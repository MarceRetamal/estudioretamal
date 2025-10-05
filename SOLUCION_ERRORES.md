# Solución a los Errores de Next.js Build

## Errores Identificados

### 1. Error Principal: "Event handlers cannot be passed to Client Component props"

```
Error: Event handlers cannot be passed to Client Component props.
{className: ..., onSubmit: function onSubmit, children: ...}
^^^^^^^^^^^^^^^^^
```

**Causa:** Este error ocurre cuando intentas pasar funciones (event handlers) como props desde un Server Component a un Client Component en Next.js App Router.

**Solución:**
- Asegúrate de que cualquier componente que use event handlers tenga `'use client'` al principio del archivo
- Mueve la lógica de manejo de eventos dentro del componente cliente

### 2. Error de Timeout: "Static page generation for / is still timing out after 3 attempts"

**Causa:** El error anterior causaba que la generación de páginas estáticas fallara repetidamente.

## Código Correcto - Ejemplo de Formulario

### ❌ Forma Incorrecta (causa el error):
```tsx
// Server Component (por defecto)
export default function Page() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica del formulario
  };

  return <MyForm onSubmit={handleSubmit} />; // ❌ Error: pasando función a Client Component
}
```

### ✅ Forma Correcta:
```tsx
// contact-form.tsx
'use client'; // 👈 IMPORTANTE: declara esto como Client Component

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // 👈 La función está DENTRO del Client Component
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // lógica del formulario
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Tu nombre"
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
}
```

## Reglas Clave para Next.js App Router

### 1. Server Components (por defecto)
- No pueden usar hooks de React (useState, useEffect, etc.)
- No pueden manejar eventos del usuario (onClick, onSubmit, etc.)
- Se ejecutan en el servidor
- Ideales para cargar datos y renderizado inicial

### 2. Client Components (con 'use client')
- Pueden usar hooks de React
- Pueden manejar eventos del usuario
- Se ejecutan en el cliente
- Necesarios para interactividad

### 3. Mejores Prácticas
- Usa Server Components para cargar datos y contenido estático
- Usa Client Components solo donde necesites interactividad
- Mantén los Client Components lo más pequeños posible
- No pases funciones como props entre Server y Client Components

## Estructura Recomendada

```
src/app/
├── page.tsx          # Server Component - carga datos
├── contact-form.tsx  # Client Component - maneja formulario
└── layout.tsx        # Server Component - layout general
```

## Verificación

Para verificar que tu código funciona correctamente:

1. **Linting:**
   ```bash
   npm run lint
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Development:**
   ```bash
   npm run dev
   ```

## Resumen de la Solución

1. **Agrega `'use client'`** al principio de cualquier archivo que use event handlers
2. **Mueve la lógica de eventos** dentro del Client Component
3. **No pases funciones como props** desde Server a Client Components
4. **Separa la lógica** entre Server y Client Components de manera adecuada

Con estos cambios, tu aplicación debería construirse sin errores y funcionar correctamente en producción.