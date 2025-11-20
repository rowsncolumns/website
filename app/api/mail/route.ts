import sendMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // IMPORTANT

const apiKey = process.env.SENDGRID_API_KEY!;

sendMail.setApiKey(apiKey);

export async function POST(request: Request) {
  const { email, message, company, name } = await request.json();

  const msg: MailDataRequired = {
    to: "contact@rowsncolumns.app",
    from: "support@rowsncolumns.app", // MUST BE DOMAIN AUTHENTICATED
    subject: `Contact email - ${name} - ${company}`,
    text: message,
    html: message,
    replyTo: { name, email },
  };

  try {
    await sendMail.send(msg);
    return NextResponse.json("Email sent successfully");
  } catch (error: any) {
    console.error("SENDGRID ERROR", error.response?.body || error);
    return NextResponse.json("Error sending email", { status: 500 });
  }
}
