import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate mandatory fields
    if (!data.fullName || !data.email || !data.mobile) {
      return NextResponse.json(
        { error: "Mandatory fields missing: Full Name, Email, and Mobile are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Anti-spam honeypot check
    if (data.companyWeb) {
      console.warn("[Spam Bot Blocked via Honeypot]", data.fullName, data.email);
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    }

    const leadInfo = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      formType: data.formType || "General Enquiry",
      name: data.fullName,
      email: data.email,
      mobile: data.mobile,
      city: data.city || "Not Specified",
      interest: data.interest || "General",
      investmentExperience: data.investmentExperience || "Not Specified",
      message: data.message || "None",
    };

    console.log("[Longview Capital Lead Received]", leadInfo);

    // 1. Google Sheets Auto-Save Webhook
    // Automatically appends a new row to Longview Capital's Google Sheet
    const sheetsWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwOTkHwGXmb2gqvXPDATviDbUsLhMXYtikngAuwb0PShYWr5EJn_9kKzNIRgKgkWLuf/exec";

    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadInfo),
          redirect: "follow",
        });
        console.log("[Google Sheets] Lead successfully synced to Google Sheet");
      } catch (sheetError) {
        console.error("[Google Sheets Auto-Save Error]", sheetError);
        // Never fail user submission if webhook has a temporary network glitch
      }
    }

    // 2. Optional Instant Telegram Lead Alert
    // When TELEGRAM_BOT_TOKEN & TELEGRAM_CHAT_ID are set in .env.local,
    // Sunny & Harsh will receive an instant alert on their phone!
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (tgToken && tgChatId) {
      try {
        const cleanMobile = data.mobile.replace(/[^0-9]/g, "");
        const waCallbackLink = `https://wa.me/${cleanMobile}?text=Hello%20${encodeURIComponent(
          data.fullName
        )}%2C%20thank%20you%20for%20reaching%20out%20to%20Longview%20Capital.`;

        const tgMessage = `🚨 *NEW INVESTOR ENQUIRY* 🚨
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.fullName}
📱 *Phone:* ${data.mobile}
📧 *Email:* ${data.email}
🏙️ *City:* ${data.city || "Not specified"}
🎯 *Interest:* ${data.interest || "General"}
📋 *Source:* ${data.formType || "Website"}
💬 *Message:* ${data.message || "None"}
⏱️ *Time:* ${leadInfo.timestamp}
━━━━━━━━━━━━━━━━━━━━
👉 [Tap to WhatsApp Lead Directly](${waCallbackLink})`;

        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: tgMessage,
            parse_mode: "Markdown",
          }),
        });
      } catch (tgError) {
        console.error("[Telegram Notification Error]", tgError);
        // Do not fail user request if notification webhook fails
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. Longview Capital team has been notified.",
      receivedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("[Lead Submission Error]", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing lead." },
      { status: 500 }
    );
  }
}
