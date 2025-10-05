import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: Record<string, string> = {};

    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      payload = Object.fromEntries(form.entries()) as Record<string, string>;
    } else {
      try { payload = await req.json(); } catch {}
    }

    const name = (payload.name || "").toString().trim();
    const email = (payload.email || "").toString().trim();
    const phone = (payload.phone || "").toString().trim();
    const message = (payload.message || "").toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
    }

    if (message.toLowerCase().includes("http://") || message.toLowerCase().includes("https://")) {
      return NextResponse.json({ ok: true });
    }

    const to = process.env.LEAD_NOTIFY_EMAIL;
    if (!to) {
      return NextResponse.json({ ok: false, error: "LEAD_NOTIFY_EMAIL no configurado." }, { status: 500 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY no configurado." }, { status: 500 });
    }

    const html = `
      <h2>Nuevo Lead</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone || "-"}</p>
      <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: "Leads Estudio <leads@estudioretamal.com.ar>",
      to,
      subject: `Nuevo lead: ${name}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err?.message || "Error desconocido" }, { status: 500 });
  }
}
