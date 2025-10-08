import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const [width, height] = params.params.map(Number)
  
  // Validar dimensiones
  const w = Math.min(Math.max(width || 200, 50), 2000)
  const h = Math.min(Math.max(height || 200, 50), 2000)
  
  // Generar SVG placeholder
  const svg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#F7F7F5"/>
      <rect width="100%" height="100%" fill="none" stroke="#E5E5E3" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" 
            fill="#2E3239" text-anchor="middle" dy=".3em">
        ${w}×${h}
      </text>
    </svg>
  `
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}