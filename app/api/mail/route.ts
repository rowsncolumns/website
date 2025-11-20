import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const { email, message, company, name } = await request.json();

  const apiKey = process.env.BIRD_API_KEY;
  const workspaceId = process.env.BIRD_WORKSPACE_ID;
  const apiUrl =
    process.env.BIRD_API_URL || "https://email.us-west-2.api.bird.com";

  if (!apiKey || !workspaceId) {
    console.error("BIRD_API_KEY or BIRD_WORKSPACE_ID is not set");
    return NextResponse.json("Email service not configured", { status: 500 });
  }

  const emailPayload = {
    recipients: [
      {
        address: {
          email: "contact@rowsncolumns.app",
          name: "Contact",
        },
        substitution_data: {
          sender_name: name,
          sender_email: email,
          sender_company: company,
          message: message,
        },
      },
    ],
    content: {
      from: {
        email: "support@rowsncolumns.app",
        name: "Rows & Columns Contact Form",
      },
      subject: `Contact email - ${name} - ${company}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 30px;">
    <h1 style="color: #1a73e8; margin-bottom: 20px;">New Contact Form Submission</h1>
    <p style="color: #333; margin-bottom: 10px;"><strong>From:</strong> ${name}</p>
    <p style="color: #333; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
    <p style="color: #333; margin-bottom: 10px;"><strong>Company:</strong> ${company}</p>
    <p style="color: #333; margin-bottom: 10px;"><strong>Message:</strong></p>
    <p style="color: #555; padding: 15px; background: #f5f5f5; border-radius: 4px;">${message}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p style="color: #999; font-size: 12px;">Reply directly to this email to contact ${email}</p>
  </div>
</div>`,
      text: `New Contact Form Submission\n\nFrom: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
      reply_to: email,
    },
  };

  try {
    const response = await fetch(
      `${apiUrl}/api/workspaces/${workspaceId}/reach/transmissions`,
      {
        method: "POST",
        headers: {
          Authorization: `AccessKey ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Bird API error:");
      console.error("Status:", response.status);
      console.error("Error data:", JSON.stringify(errorData, null, 2));
      return NextResponse.json(
        { error: "Error sending email", details: errorData },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);
    return NextResponse.json("Email sent successfully");
  } catch (error: any) {
    console.error("Bird API request failed:", error);
    return NextResponse.json("Error sending email", { status: 500 });
  }
}
