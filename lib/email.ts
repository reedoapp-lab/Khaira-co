export type Enquiry = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  challenge: string;
  receivedAt: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildText(enquiry: Enquiry): string {
  return [
    "New enquiry from the Khaira.co website",
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Company: ${enquiry.company}`,
    `Website: ${enquiry.website || "Not provided"}`,
    `Service of interest: ${enquiry.service}`,
    `Received: ${enquiry.receivedAt}`,
    "",
    "Business challenge:",
    enquiry.challenge,
  ].join("\n");
}

function buildHtml(enquiry: Enquiry): string {
  const rows: Array<[string, string]> = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Company", enquiry.company],
    ["Website", enquiry.website || "Not provided"],
    ["Service of interest", enquiry.service],
    ["Received", enquiry.receivedAt],
  ];

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f2faf5;padding:32px;font-family:Inter,Arial,sans-serif;color:#071b12;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d8e8df;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:28px 32px;border-bottom:1px solid #d8e8df;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#0a7a56;">Khaira.co</p>
          <h1 style="margin:0;font-size:24px;line-height:1.2;">New website enquiry</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rows
              .map(
                ([label, value]) => `<tr>
              <td style="padding:7px 0;width:150px;font-size:12px;color:#4c6559;vertical-align:top;">${escapeHtml(label)}</td>
              <td style="padding:7px 0;font-size:14px;color:#071b12;">${escapeHtml(value)}</td>
            </tr>`,
              )
              .join("")}
          </table>
          <div style="margin-top:22px;padding-top:20px;border-top:1px solid #d8e8df;">
            <p style="margin:0 0 8px;font-size:12px;color:#4c6559;">Business challenge</p>
            <p style="margin:0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(enquiry.challenge)}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 32px;background:#f2faf5;font-size:12px;color:#4c6559;">
          Reply directly to this email to contact ${escapeHtml(enquiry.name)}.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export type EnquiryNotificationResult = {
  delivered: boolean;
  configured: boolean;
};

export async function sendEnquiryNotification(
  enquiry: Enquiry,
): Promise<EnquiryNotificationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.info(
      "[khaira] New enquiry (email delivery not configured). Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL to enable notifications.",
      enquiry,
    );
    return { delivered: false, configured: false };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `New enquiry: ${enquiry.company} - ${enquiry.service}`,
        text: buildText(enquiry),
        html: buildHtml(enquiry),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "[khaira] Email delivery failed. Enquiry retained below",
        response.status,
        await response.text(),
        enquiry,
      );
      return { delivered: false, configured: true };
    }

    return { delivered: true, configured: true };
  } catch (error) {
    console.error(
      "[khaira] Email delivery error. Enquiry retained below",
      error,
      enquiry,
    );
    return { delivered: false, configured: true };
  }
}
