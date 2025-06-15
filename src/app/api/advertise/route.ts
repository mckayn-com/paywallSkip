import { Resend } from "resend";
import { NextResponse } from "next/server";
import AdvertisingInquiryEmail from "@/emails/advertising-inquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message, plan } = await request.json();

    if (!name || !email || !company || !message || !plan) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: "francocanzani@gmail.com",
      subject: `New Advertising Inquiry from ${company}`,
      react: AdvertisingInquiryEmail({
        name,
        email,
        company,
        message,
        plan,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
} 