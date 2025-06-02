import nodemailer from 'nodemailer'
import { Event, Ticket, User } from '../generated/prisma'

export class EmailService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
  }

  async sendTicketPurchaseConfirmation(
    user: User,
    event: Event,
    ticket: Ticket,
    quantity: number,
    totalPaid: number
  ) {
    const emailContent = this.generateTicketEmailContent(user, event, ticket, quantity, totalPaid)

    await this.transporter.sendMail({
      from: `"Event Manager" <${process.env.SMTP_FROM}>`,
      to: user.email,
      subject: `Ticket Confirmation - ${event.title}`,
      html: emailContent
    })
  }

  private generateTicketEmailContent(
    user: User,
    event: Event,
    ticket: Ticket,
    quantity: number,
    totalPaid: number
  ): string {
    const eventDate = new Date(event.dateStart).toLocaleString()
    const eventEndDate = new Date(event.dateEnd).toLocaleString()

    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Ticket Purchase Confirmation</h1>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1f2937;">${event.title}</h2>
          <p style="color: #4b5563;"><strong>Date:</strong> ${eventDate} - ${eventEndDate}</p>
          <p style="color: #4b5563;"><strong>Location:</strong> ${event.location}</p>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937;">Ticket Details</h3>
          <p><strong>Ticket Type:</strong> ${ticket.name}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Total Paid:</strong> $${totalPaid.toFixed(2)}</p>
        </div>

        <div style="margin: 20px 0;">
          <p><strong>Ticket Holder:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
        </div>

        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937;">Important Information</h3>
          <ul style="color: #4b5563;">
            <li>Please arrive at least 15 minutes before the event starts</li>
            <li>Keep this email as your ticket confirmation</li>
            <li>You may be asked to show ID matching the ticket holder name</li>
          </ul>
        </div>

        <div style="margin-top: 30px; color: #6b7280; font-size: 14px;">
          <p>If you have any questions, please contact our support team.</p>
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    `
  }
} 