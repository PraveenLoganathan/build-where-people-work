const { app } = require("@azure/functions");
const { EmailClient } = require("@azure/communication-email");

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return { status: 400, jsonBody: { error: "Invalid JSON body" } };
    }

    const { from_name, from_email, phone, enquiry_type, message } = body ?? {};

    if (!from_name || !from_email || !enquiry_type || !message) {
      return { status: 400, jsonBody: { error: "Missing required fields" } };
    }

    const connectionString = process.env.ACS_CONNECTION_STRING;
    const senderAddress = process.env.ACS_SENDER_ADDRESS;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!connectionString || !senderAddress || !recipientEmail) {
      context.error("Missing ACS environment variables");
      return { status: 500, jsonBody: { error: "Server configuration error" } };
    }

    try {
      const client = new EmailClient(connectionString);

      const emailMessage = {
        senderAddress,
        recipients: {
          to: [{ address: recipientEmail, displayName: "Nuvaa Properties" }],
          replyTo: [{ address: from_email, displayName: from_name }],
        },
        content: {
          subject: `New Enquiry — ${escapeHtml(enquiry_type)} — ${escapeHtml(from_name)}`,
          plainText: [
            "New enquiry received from the Nuvaa Properties website.",
            "",
            `Name:         ${from_name}`,
            `Email:        ${from_email}`,
            `Phone:        ${phone || "Not provided"}`,
            `Enquiry Type: ${enquiry_type}`,
            "",
            "Message:",
            message,
          ].join("\n"),
          html: `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f4f4f4;">
  <div style="background:#0f172a;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="margin:0;color:#40e0d0;font-size:18px;letter-spacing:1px;">NUVAA PROPERTIES</h2>
    <p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">New website enquiry</p>
  </div>
  <div style="background:#ffffff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;border-top:none;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:10px 0;color:#64748b;width:130px;font-weight:600;">Name</td>
        <td style="padding:10px 0;color:#0f172a;">${escapeHtml(from_name)}</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:10px 0;color:#64748b;font-weight:600;">Email</td>
        <td style="padding:10px 0;"><a href="mailto:${escapeHtml(from_email)}" style="color:#0891b2;">${escapeHtml(from_email)}</a></td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:10px 0;color:#64748b;font-weight:600;">Phone</td>
        <td style="padding:10px 0;color:#0f172a;">${escapeHtml(phone || "Not provided")}</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:10px 0;color:#64748b;font-weight:600;">Enquiry Type</td>
        <td style="padding:10px 0;">
          <span style="background:#f0fdfa;color:#0f766e;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;">${escapeHtml(enquiry_type)}</span>
        </td>
      </tr>
    </table>
    <div style="margin-top:20px;">
      <p style="font-size:13px;font-weight:600;color:#64748b;margin-bottom:8px;">MESSAGE</p>
      <div style="background:#f8fafc;border-left:3px solid #40e0d0;padding:14px 16px;border-radius:0 6px 6px 0;font-size:14px;color:#334155;white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
    <p style="margin-top:24px;font-size:12px;color:#94a3b8;">Reply directly to this email to respond to ${escapeHtml(from_name)}.</p>
  </div>
</div>`,
        },
      };

      const poller = await client.beginSend(emailMessage);
      await poller.pollUntilDone();

      return { status: 200, jsonBody: { success: true } };
    } catch (err) {
      context.error("Email send failed:", err);
      return { status: 500, jsonBody: { error: "Failed to send email" } };
    }
  },
});
