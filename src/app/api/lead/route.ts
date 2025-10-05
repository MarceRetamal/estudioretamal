import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());

  // Tip: valida con Zod en producción
  const body = `
Nueva consulta desde la web:
Nombre: ${data.name}
Tel: ${data.phone}
Email: ${data.email}
Área: ${data.area}
Mensaje: ${data.message}
`;

  // Si configuras RESEND_API_KEY enviar correo (o integra tu preferido)
  try {
    if (process.env.RESEND_API_KEY) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Web Estudio <no-reply@estudioretamal.com.ar>",
          to: ["consultas@estudioretamal.com.ar"],
          subject: "Nueva consulta Web",
          text: body,
        }),
      });
      if (!r.ok) throw new Error("Resend error");
    }
    return NextResponse.redirect(new URL("/contacto?ok=1", req.url));
  } catch (e) {
    return NextResponse.redirect(new URL("/contacto?ok=0", req.url));
  }
}
