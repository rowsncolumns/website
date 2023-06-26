import sendMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  const { email, message, company, name } = await request.json();

  const msg: MailDataRequired = {
    to: "contact@rowsncolumns.app",
    from: "support@rowsncolumns.app",
    subject: `Contact email - ${name} - ${company}`,
    text: message,
    html: message,
    replyTo: {
      name,
      email,
    },
  };

  try {
    await sendMail.send(msg);
    return NextResponse.json("Email sent successfully");
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error sending email", { status: 500 });
  }
}
