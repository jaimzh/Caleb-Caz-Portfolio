import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/emails/contact-email";
import { contactSchema } from "@/lib/validation/contact";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedBody = contactSchema.safeParse(body);

    if (!validatedBody.success) {
      return NextResponse.json(
        {
          ok: false,
          error: validatedBody.error.format()._errors[0] || "Invalid request.",
        },
        { status: 400 },
      );
    }

    const { name, email, projectType, message, company } = validatedBody.data;

    if (company && company.trim()) {
      return NextResponse.json({ ok: true });
    }

    const from =
      process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "jameshenshaw10@gmail.com";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Contact: ${name} - ${projectType}`,
      react: EmailTemplate({ name, email, projectType, message, company }),
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
