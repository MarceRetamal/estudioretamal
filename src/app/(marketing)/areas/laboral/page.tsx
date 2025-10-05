export const metadata = { title: "Laboral" };

export default function Page() {
  return (
    <section className="card">
      <h1 style={{fontSize: "2rem", marginTop: 0}}>Laboral</h1>
      <ul>
      <li className="muted">Despidos con y sin causa, cálculos indemnizatorios</li>
      <li className="muted">Trabajo no registrado / diferencias salariales</li>
      <li className="muted">Acoso laboral y condiciones indignas</li>
      <li className="muted">Accidentes de trabajo (ART)</li>
      </ul>
      <p><a className="btn" href="/contacto">Necesito ayuda en laboral</a></p>
    </section>
  );
}
