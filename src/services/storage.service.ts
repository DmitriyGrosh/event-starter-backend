import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

export class StorageService {
  private s3Client: S3Client
  private bucketName: string
  private endpoint: string

  constructor() {
    // Selectel uses S3-compatible API
    this.endpoint = process.env.SELECTEL_ENDPOINT || 'https://s3.ru-7.storage.selcloud.ru'
    this.bucketName = process.env.SELECTEL_BUCKET || 'event-starter'

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
      return `${this.endpoint}/${this.bucketName}/${key}`
    } catch (error) {
      console.error('Error uploading file to storage:', error)
      throw new Error('Failed to upload file to storage. Please check your storage configuration.')
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
}

export const storageService = new StorageService()
