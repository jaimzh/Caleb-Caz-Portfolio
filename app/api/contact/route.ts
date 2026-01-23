import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/emails/contact-email";
import type { EmailTemplateProps } from "@/types/email";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as EmailTemplateProps;
    const { name, email, projectType, message, company } = body;

    // Honeypot check: If the hidden 'company' field is filled, it's a bot.
    if (company && company.trim()) {
      console.log("Honeypot triggered, ignoring request.");
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const from =
      process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "jameshenshaw10@gmail.com";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Contact: ${name} - ${projectType}`,
      react: EmailTemplate({ name, email, projectType, message }),
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 },
    );
  }
}
