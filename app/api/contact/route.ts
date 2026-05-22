import { NextResponse } from "next/server";

// TODO: Implement Resend email integration
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // const { name, email, subject, message } = await req.json();
    //
    // const data = await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: ["david@vybztech.com"],
    //   subject: `New Message: ${subject}`,
    //   replyTo: email,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });
    //
    // return NextResponse.json(data);
    return NextResponse.json({ error: "Contact endpoint not implemented" }, { status: 501 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
