export const metadata = { title: "Consumidor" };

export default function Page() {
  return (
    <section className="card">
      <h1 style={{fontSize: "2rem", marginTop: 0}}>Consumidor</h1>
      <ul>
      <li className="muted">Cobros abusivos, hostigamiento de estudios de cobranzas</li>
      <li className="muted">Bancos, tarjetas de crédito y servicios públicos</li>
      <li className="muted">Planes, suscripciones y compras online</li>
      <li className="muted">Daños punitivos y acuerdos rápidos</li>
      </ul>
      <p><a className="btn" href="/contacto">Necesito ayuda en consumidor</a></p>
    </section>
  );
}
