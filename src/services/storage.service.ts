import { S3Client, PutObjectCommand, HeadBucketCommand } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

export class StorageService {
  private s3Client: S3Client
  private bucketName: string
  private endpoint: string
  private publicUrl: string

  constructor() {
    // Selectel uses S3-compatible API
    this.endpoint = process.env.SELECTEL_ENDPOINT || 'https://s3.ru-7.storage.selcloud.ru'
    this.bucketName = process.env.SELECTEL_BUCKET || 'event-starter'
    // Public URL for accessing files (different from S3 endpoint)
    this.publicUrl = process.env.SELECTEL_PUBLIC_URL || 'https://1ca1de13-42fa-4286-bb8c-9c20e603e728.selstorage.ru'

    console.log('Storage service initialization:', {
      endpoint: this.endpoint,
      bucket: this.bucketName,
      publicUrl: this.publicUrl,
      hasAccessKey: !!process.env.SELECTEL_ACCESS_KEY,
      hasSecretKey: !!process.env.SELECTEL_SECRET_KEY,
      accessKeyLength: process.env.SELECTEL_ACCESS_KEY?.length || 0,
      secretKeyLength: process.env.SELECTEL_SECRET_KEY?.length || 0
    })

    if (!this.bucketName) {
      console.warn('SELECTEL_BUCKET environment variable is not set. File uploads will be disabled.')
    }

    if (!process.env.SELECTEL_ACCESS_KEY || !process.env.SELECTEL_SECRET_KEY) {
      console.warn('SELECTEL_ACCESS_KEY or SELECTEL_SECRET_KEY environment variables are not set. File uploads will be disabled.')
    }

    this.s3Client = new S3Client({
      endpoint: this.endpoint,
      region: 'ru-7',
      credentials: {
        accessKeyId: process.env.SELECTEL_ACCESS_KEY || '',
        secretAccessKey: process.env.SELECTEL_SECRET_KEY || ''
      },
      forcePathStyle: true // Required for Selectel
    })
  }

  /**
   * Upload a file directly to storage
   * @param fileBuffer The file buffer to upload
   * @param fileType The MIME type of the file
   * @returns The URL of the uploaded file
   */
  async uploadFile(fileBuffer: Buffer, fileType: string): Promise<string> {
    if (!this.bucketName) {
      throw new Error('Storage bucket is not configured. Please set SELECTEL_BUCKET environment variable.')
    }

    if (!process.env.SELECTEL_ACCESS_KEY || !process.env.SELECTEL_SECRET_KEY) {
      throw new Error('Storage credentials are not configured. Please set SELECTEL_ACCESS_KEY and SELECTEL_SECRET_KEY environment variables.')
    }

    const fileExtension = fileType.split('/')[1]
    const key = `events/${randomUUID()}.${fileExtension}`

    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: fileBuffer,
      ContentType: fileType
    })

    try {
      await this.s3Client.send(command)
      const publicUrl = `${this.publicUrl}/${key}`
      console.log('File uploaded successfully:', publicUrl)
      return publicUrl
    } catch (error) {
      const s3Error = error as any
      
      // Provide more specific error messages based on the error type
      if (s3Error.code === 'NoSuchBucket') {
        throw new Error(`Bucket '${this.bucketName}' does not exist. Please check your SELECTEL_BUCKET configuration.`)
      } else if (s3Error.code === 'AccessDenied') {
        throw new Error('Access denied. Please check your SELECTEL_ACCESS_KEY and SELECTEL_SECRET_KEY credentials.')
      } else if (s3Error.code === 'InvalidAccessKeyId') {
        throw new Error('Invalid access key. Please check your SELECTEL_ACCESS_KEY.')
      } else if (s3Error.code === 'SignatureDoesNotMatch') {
        throw new Error('Invalid secret key. Please check your SELECTEL_SECRET_KEY.')
      } else if (s3Error.code === 'NetworkingError') {
        throw new Error(`Network error connecting to ${this.endpoint}. Please check your SELECTEL_ENDPOINT configuration.`)
      } else {
        throw new Error(`Failed to upload file to storage: ${s3Error.message || 'Unknown error'}`)
      }
    }
  }

  /**
   * Validate if the file type is allowed
   * @param fileType The MIME type of the file
   * @returns boolean indicating if the file type is allowed
   */
  isAllowedFileType(fileType: string): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    return allowedTypes.includes(fileType)
  }

  /**
   * Get the maximum file size in bytes (5MB)
   */
  getMaxFileSize(): number {
    return 5 * 1024 * 1024 // 5MB
  }

  /**
   * Test the storage connection and configuration
   * @returns Promise<boolean> indicating if the connection is successful
   */
  async testConnection(): Promise<{ success: boolean; error?: string; details?: any }> {
    if (!this.bucketName) {
      return { 
        success: false, 
        error: 'SELECTEL_BUCKET environment variable is not set' 
      }
    }

    if (!process.env.SELECTEL_ACCESS_KEY || !process.env.SELECTEL_SECRET_KEY) {
      return { 
        success: false, 
        error: 'SELECTEL_ACCESS_KEY or SELECTEL_SECRET_KEY environment variables are not set' 
      }
    }

    try {
      const command = new HeadBucketCommand({ Bucket: this.bucketName })
      await this.s3Client.send(command)
      
      return { 
        success: true,
        details: {
          bucket: this.bucketName,
          endpoint: this.endpoint,
          publicUrl: this.publicUrl
        }
      }
    } catch (error) {
      const s3Error = error as any
      return {
        success: false,
        error: s3Error.message || 'Unknown error',
        details: {
          code: s3Error.code,
          statusCode: s3Error.$metadata?.httpStatusCode,
          bucket: this.bucketName,
          endpoint: this.endpoint
        }
      }
    }
  }
}

export const storageService = new StorageService()
