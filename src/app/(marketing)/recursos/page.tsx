export const metadata = { title: "Recursos y guías" };

export default function Page() {
  const files = [
    { name: "Checklist: qué llevar a tu primera consulta", href: "/recursos/checklist.pdf" },
    { name: "Guía rápida: alimentos provisorios", href: "/recursos/alimentos-provisorios.pdf" },
    { name: "Modelo: carta documento por hostigamiento de cobranzas", href: "/recursos/cd-hostigamiento.docx" },
  ];
  return (
    <section className="card">
      <h1>Recursos descargables</h1>
      <ul>
        {files.map(f => <li key={f.href}><a href={f.href}>{f.name}</a></li>)}
      </ul>
    </section>
  );
}
