import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: auto; padding: 24px; background: #fff7ed; border-radius: 16px;">
        <h2 style="color: #7C2D12; margin-bottom: 16px;">
          New Restaurant Enquiry
        </h2>

        <div style="background: #ffffff; padding: 20px; border-radius: 14px;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

          <hr style="border: none; border-top: 1px solid #fed7aa; margin: 20px 0;" />

          <p><strong>Message:</strong></p>
          <p style="line-height: 1.7;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `New ${subject} Enquiry from ${name}`,
      html: emailHtml
    });

    if (error) {
      return Response.json(
        { success: false, error: "Email sending failed." },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}