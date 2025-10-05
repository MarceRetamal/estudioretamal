export const dynamic = "force-static";

export default function Page() {
  return (
    <section className="card" style={{overflow: "hidden"}}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(600px 300px at 80% -10%, rgba(14,165,233,.35), transparent)"
      }}/>
      <h1 style={{fontSize: "clamp(2rem, 6vw, 3.2rem)", marginBottom: ".5rem"}}>
        Tu problema legal, resuelto con claridad.
      </h1>
      <p className="muted" style={{maxWidth: 720, marginBottom: "1.25rem"}}>
        Asesoramiento legal estratégico en <strong>familia</strong>, <strong>laboral</strong> y <strong>defensa del consumidor</strong>. 
        Habla con un abogado hoy mismo y recibí un plan de acción en menos de 24 horas.
      </p>
      <div style={{display: "flex", gap: ".75rem", flexWrap: "wrap"}}>
        <a className="btn" href="/contacto">Agendar consulta</a>
        <a className="btn" style={{background: "transparent", color: "var(--text)", borderColor: "var(--border)"}} href="/casos">
          Ver resultados y testimonios
        </a>
      </div>
    </section>
  );
}
