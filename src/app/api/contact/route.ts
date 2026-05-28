import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const attempts = new Map<string, { count: number; ts: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 1000;
  const max = 3;
  const entry = attempts.get(ip);
  if (!entry || now - entry.ts > window) {
    attempts.set(ip, { count: 1, ts: now });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

function sanitize(str: string): string {
  return String(str).replace(/[<>]/g, "").trim().slice(0, 1000);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Trop de requêtes" }, { status: 429 });
  }

  try {
    const body = await req.json();
    const name = sanitize(body.name ?? "");
    const company = sanitize(body.company ?? "");
    const email = sanitize(body.email ?? "");
    const message = sanitize(body.message ?? "");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Lunyx" <acc7bc001@smtp-brevo.com>`,
      to: "lunyx.dev@outlook.fr",
      replyTo: email,
      subject: `[Portfolio] Message de ${name}${company ? ` — ${company}` : ""}`,
      text: `Nom: ${name}\nSociété: ${company}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;padding:24px;background:#f5f3ee;border-radius:8px">
          <h2 style="font-size:18px;color:#0a0a0f;margin-bottom:16px">Nouveau message — Portfolio</h2>
          <table style="width:100%;font-size:14px;color:#555">
            <tr><td style="padding:4px 0;color:#999;width:90px">Nom</td><td style="color:#0a0a0f;font-weight:500">${name}</td></tr>
            ${company ? `<tr><td style="padding:4px 0;color:#999">Société</td><td style="color:#0a0a0f">${company}</td></tr>` : ""}
            <tr><td style="padding:4px 0;color:#999">Email</td><td><a href="mailto:${email}" style="color:#0a0a0f">${email}</a></td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#fff;border-radius:6px;font-size:14px;line-height:1.6;color:#333;white-space:pre-wrap">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
