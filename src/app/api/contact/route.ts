import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
      preferredContact,
      urgency,
      selectedArea
    } = formData

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Format the message for WhatsApp
    const whatsappMessage = `*NUEVA CONSULTA LEGAL - ER SOLUCIONES LEGALES*%0A%0A` +
      `*Datos del Cliente:*%0A` +
      `👤 Nombre: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `📱 Teléfono: ${phone}%0A` +
      `${company ? `🏢 Empresa: ${company}%0A` : ''}%0A` +
      `*Detalles de la Consulta:*%0A` +
      `📋 Área: ${selectedArea || 'No especificada'}%0A` +
      `📝 Asunto: ${subject}%0A` +
      `💬 Mensaje: ${message}%0A` +
      `🔄 Preferencia de contacto: ${preferredContact === 'email' ? 'Email' : preferredContact === 'phone' ? 'Teléfono' : 'WhatsApp'}%0A` +
      `🚨 Urgencia: ${urgency === 'high' ? 'Urgente' : urgency === 'medium' ? 'Normal' : 'No urgente'}%0A%0A` +
      `*Fecha:* ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}%0A%0A` +
      `*Por favor contactar a la brevedad posible*`

    // Send WhatsApp notification
    const whatsappUrl = `https://wa.me/5491125826179?text=${whatsappMessage}`
    
    try {
      const response = await fetch(whatsappUrl, { method: 'GET' })
      // Note: This will open WhatsApp on the server side, which might not work as expected
      // In a real production environment, you'd use the WhatsApp Business API
    } catch (whatsappError) {
      console.error('Error sending WhatsApp notification:', whatsappError)
      // Continue even if WhatsApp fails
    }

    // Send email notification (using a simple email service or ZAI SDK)
    try {
      const ZAI = await import('z-ai-web-dev-sdk')
      let zai;
      
      try {
        const ZAIClass = ZAI.default || ZAI
        zai = await ZAIClass.create()
      } catch (zaiError) {
        console.log('ZAI SDK initialization failed, continuing without AI processing:', zaiError)
      }
      
      const emailContent = `
        <h2>Nueva Consulta Legal - ER Soluciones Legales</h2>
        
        <h3>Datos del Cliente:</h3>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          ${company ? `<li><strong>Empresa:</strong> ${company}</li>` : ''}
        </ul>
        
        <h3>Detalles de la Consulta:</h3>
        <ul>
          <li><strong>Área:</strong> ${selectedArea || 'No especificada'}</li>
          <li><strong>Asunto:</strong> ${subject}</li>
          <li><strong>Mensaje:</strong> ${message}</li>
          <li><strong>Preferencia de contacto:</strong> ${preferredContact === 'email' ? 'Email' : preferredContact === 'phone' ? 'Teléfono' : 'WhatsApp'}</li>
          <li><strong>Urgencia:</strong> ${urgency === 'high' ? 'Urgente' : urgency === 'medium' ? 'Normal' : 'No urgente'}</li>
        </ul>
        
        <h3>Fecha:</h3>
        <p>${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>
        
        <p><em>Por favor contactar a la brevedad posible</em></p>
      `

      // Here you would normally send an email using an email service
      // For now, we'll just log the email content
      console.log('Email content:', emailContent)
      
      // You could use ZAI to generate a summary or process the inquiry
      if (zai) {
        try {
          const summary = await zai.chat.completions.create({
            messages: [
              {
                role: 'system',
                content: 'Eres un asistente legal que resume consultas de clientes. Crea un resumen conciso de la siguiente consulta legal, destacando los puntos clave y la urgencia.'
              },
              {
                role: 'user',
                content: `Nombre: ${name}\nÁrea: ${selectedArea}\nAsunto: ${subject}\nMensaje: ${message}\nUrgencia: ${urgency}\nTeléfono: ${phone}\nEmail: ${email}`
              }
            ],
            max_tokens: 150,
            temperature: 0.3
          })

          console.log('AI Summary:', summary.choices[0]?.message?.content)
        } catch (aiError) {
          console.log('AI processing failed, continuing without AI summary:', aiError)
        }
      }

    } catch (emailError) {
      console.error('Error processing email notification:', emailError)
      // Continue even if email processing fails
    }

    // Store the contact in the database (if you have one set up)
    try {
      // Here you would save to your database using Prisma or similar
      // For now, we'll just log it
      console.log('Contact form submission:', {
        name,
        email,
        phone,
        company,
        subject,
        message,
        preferredContact,
        urgency,
        selectedArea,
        timestamp: new Date().toISOString()
      })
    } catch (dbError) {
      console.error('Error saving to database:', dbError)
      // Continue even if database save fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Consulta enviada correctamente. Nos pondremos en contacto a la brevedad.',
      data: {
        name,
        email,
        phone,
        subject,
        urgency,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return NextResponse.json(
      { 
        error: 'Error al procesar la consulta. Por favor intenta nuevamente.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}