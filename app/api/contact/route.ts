import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, mobile, email, investment, query } = body;

    // Basic validation
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Name, email and mobile are required." },
        { status: 400 }
      );
    }

    // Configure transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the business (notification)
    await transporter.sendMail({
      from: `"Chatur Wealth Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Enquiry from ${name} — Chatur Wealth`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2ddd4; border-radius: 8px; overflow: hidden;">
          <div style="background: #0d1f3c; padding: 24px 32px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Client Enquiry</h2>
            <p style="color: rgba(255,255,255,0.5); margin: 6px 0 0; font-size: 13px;">Submitted via chaturwealth.com</p>
          </div>
          <div style="padding: 32px; background: #faf9f6;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #7a8498; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; width: 35%;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #0d1f3c; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #7a8498; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #0d1f3c; font-size: 14px;"><a href="mailto:${email}" style="color: #b87010;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #7a8498; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">Mobile</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #0d1f3c; font-size: 14px;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #7a8498; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">Investment Range</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2ddd4; color: #0d1f3c; font-size: 14px;">${investment || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #7a8498; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: top; padding-top: 16px;">Query / Goals</td>
                <td style="padding: 12px 0; color: #0d1f3c; font-size: 14px; line-height: 1.7; padding-top: 16px;">${query || "No message provided."}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #f5f3ee; border-top: 1px solid #e2ddd4;">
            <p style="margin: 0; font-size: 12px; color: #7a8498;">This enquiry was submitted through the Chatur Wealth website contact form.</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the enquirer
    await transporter.sendMail({
      from: `"Chatur Wealth" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your enquiry — Chatur Wealth",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2ddd4; border-radius: 8px; overflow: hidden;">
          <div style="background: #0d1f3c; padding: 24px 32px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Thank you, ${name}.</h2>
            <p style="color: rgba(255,255,255,0.5); margin: 6px 0 0; font-size: 13px;">Chatur Wealth — Private Client Office</p>
          </div>
          <div style="padding: 32px; background: #faf9f6;">
            <p style="color: #3a4559; font-size: 15px; line-height: 1.8; margin-top: 0;">
              We've received your enquiry and will review it carefully. A member of our team will be in touch within <strong>one business day</strong>.
            </p>
            <p style="color: #3a4559; font-size: 15px; line-height: 1.8;">
              In the meantime, feel free to reach us directly at
              <a href="mailto:deveshchawla@chaturideas.com" style="color: #b87010;">deveshchawla@chaturideas.com</a>
            </p>
            <p style="color: #7a8498; font-size: 13px; margin-bottom: 0; margin-top: 32px;">
              Warm regards,<br/>
              <strong style="color: #0d1f3c;">Devesh Chawla</strong><br/>
              Founder, Chatur Wealth
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
