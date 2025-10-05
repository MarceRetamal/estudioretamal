import Link from "next/link";

export const metadata = { title: "Áreas de práctica" };

export default function Page() {
  const items = [
    { slug: "familia", title: "Familia", desc: "Divorcios, alimentos, cuidado personal, régimen de comunicación." },
    { slug: "laboral", title: "Laboral", desc: "Despidos, indemnizaciones, trabajo no registrado, acoso laboral." },
    { slug: "consumidor", title: "Consumidor", desc: "Defensa frente a bancos, financieras, tarjetas y servicios." },
  ];
  return (
    <section>
      <h1 style={{fontSize: "2rem", marginBottom: ".75rem"}}>Áreas de práctica</h1>
      <div className="grid">
        {items.map((it) => (
          <Link key={it.slug} href={`/areas/${it.slug}`} className="card" style={{display: "block"}}>
            <h3 style={{marginTop: 0}}>{it.title}</h3>
            <p className="muted">{it.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
