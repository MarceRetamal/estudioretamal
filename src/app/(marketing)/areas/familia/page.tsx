export const metadata = { title: "Familia" };

export default function Page() {
  return (
    <section className="card">
      <h1 style={{fontSize: "2rem", marginTop: 0}}>Familia</h1>
      <ul>
      <li className="muted">Divorcios (de común acuerdo y controvertidos)</li>
      <li className="muted">Alimentos: fijación, actualización y ejecución</li>
      <li className="muted">Cuidado personal y régimen de comunicación</li>
      <li className="muted">Violencia familiar: medidas urgentes y protección</li>
      </ul>
      <p><a className="btn" href="/contacto">Necesito ayuda en familia</a></p>
    </section>
  );
}
