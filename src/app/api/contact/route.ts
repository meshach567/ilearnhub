import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/subabase";
import { contactFormSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Validate request data
    const validatedData = contactFormSchema.parse(req.body);

    // Save to database
    const { data: savedMessage, error: dbError } = await supabaseAdmin
      .from("contact_messages")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          topic: validatedData.topic,
          message: validatedData.message,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return res.status(500).json({ error: "Failed to save message" });
    }

    // Send email notification to admin
    const topicLabels = {
      "course-issue": "Course Issue",
      payment: "Payment Support",
      feedback: "Feedback",
      technical: "Technical Support",
      other: "Other",
    };

    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: [process.env.ADMIN_EMAIL!],
        subject: `New Contact Form: ${topicLabels[validatedData.topic]}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Topic:</strong> ${topicLabels[validatedData.topic]}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #374151;">${validatedData.message}</p>
            </div>
            
            <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
              This message was sent from your e-learning platform contact form.
            </p>
          </div>
        `,
      });

      // Send confirmation email to user
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: [validatedData.email],
        subject: "Thank you for contacting us!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
            
            <p>Hi ${validatedData.name},</p>
            
            <p>We've received your message about <strong>${topicLabels[validatedData.topic]}</strong> and our team will get back to you within 24 hours.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
              <h3 style="margin-top: 0; color: #1e40af;">Your Message Summary:</h3>
              <p style="margin: 10px 0;"><strong>Topic:</strong> ${topicLabels[validatedData.topic]}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong> ${validatedData.message}</p>
            </div>
            
            <p>In the meantime, you can:</p>
            <ul style="line-height: 1.8;">
              <li>Check our <a href="/help" style="color: #2563eb;">Knowledge Base</a> for instant answers</li>
              <li>Browse our <a href="/tutorials" style="color: #2563eb;">Video Tutorials</a></li>
              <li>Join our <a href="/community" style="color: #2563eb;">Community Forum</a></li>
            </ul>
            
            <p>Best regards,<br>
            The E-Learning Support Team</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the request if email fails
    }

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      id: savedMessage.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Validation failed",
        details: error.errors,
      });
    }

    res.status(500).json({ error: "Internal server error" });
  }
}
