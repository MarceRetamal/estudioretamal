export const metadata = { title: "Contacto" };

export default function Page() {
  return (
    <section className="card">
      <h1>Contacto</h1>
      <p className="muted">Dejanos tus datos y te respondemos dentro de las próximas 24 horas.</p>
      <form method="POST" action="/api/lead" style={{display: "grid", gap: ".75rem", maxWidth: 560}}>
        <input name="name" placeholder="Nombre" required style={{padding: ".75rem", borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,.02)", color: "var(--text)"}} />
        <input type="email" name="email" placeholder="Email" required style={{padding: ".75rem", borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,.02)", color: "var(--text)"}} />
        <input name="phone" placeholder="Teléfono (opcional)" style={{padding: ".75rem", borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,.02)", color: "var(--text)"}} />
        <textarea name="message" placeholder="Contanos brevemente tu caso" rows={5} required style={{padding: ".75rem", borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,.02)", color: "var(--text)"}} />
        <button className="btn" type="submit">Enviar consulta</button>
      </form>
      <div className="muted" style={{marginTop: "1rem"}}>
        También podés escribirnos a <a href="mailto:consultas@estudioretamal.com.ar">consultas@estudioretamal.com.ar</a>
      </div>
    </section>
  );
}
