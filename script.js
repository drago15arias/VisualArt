const chatbot = {
    comandos: {
      hola: "¡Hola! Bienvenido a nuestra página web. ¿En qué puedo ayudarte? escribe los siguientes mensajes para mas informacion(quienes_somos, que_servicios_ofrecemos ,como_Puedo_Contactar_Con_Ustedes, tengo_Alguna_Pregunta_Frecuente",
      quienes_somos: "Somos una empresa que se dedica a ofrecer servicios de alta calidad en el área de diseños,maketing,logos entre otros. Nuestra misión es proporcionar soluciones innovadoras y efectivas para nuestros clientes, para mas informacion escribe (que_servicios_ofrecemos)",
      que_servicios_ofrecemos: "Ofrecemos una variedad de servicios, incluyendo (diseño grafico, publicidad en redes sociales,edicion de videos,marketing digital,realizacion de diapositivas,impresiones,branding para redes sociales,manejo de redes sociales). Si tienes alguna pregunta sobre nuestros servicios, no dudes en preguntar, si necesitas de nuestros servicios encuentra nuestro contacto escribiendo (como_puedo_contactar_con_ustedes). ",
      como_puedo_contactar_con_ustedes: "Puedes contactar con nosotros a través de nuestro teléfono [+58 424-562.14.03], correo electrónico [correo] o visitando nuestra oficina en [dirección],",
      tengo_alguna_pregunta_frecuente: "Sí, aquí tienes algunas preguntas frecuentes y nuestras respuestas: [lista de preguntas y respuestas]",
    },
    respuestaPorDefecto: "Lo siento, no entiendo tu pregunta. puedes escribir hola para obtener mas informacion"
  };
  
  function procesarMensaje(mensaje) {
    const comando = mensaje.toLowerCase();
    if (comando in chatbot.comandos) {
      return chatbot.comandos[comando];
    } else {
      return chatbot.respuestaPorDefecto;
    }
  }
  
  function sendMessage() {
      const input = document.getElementById('message-input');
      const mensaje = input.value.trim();
      if (mensaje) {
          const messages = document.getElementById('messages');
          // Mostrar el mensaje del usuario
          const userMessageElement = document.createElement('div');
          userMessageElement.className = 'user-message';
          userMessageElement.textContent = mensaje;
          messages.appendChild(userMessageElement);
          input.value = '';
          
          // Procesar el mensaje y mostrar la respuesta del chatbot
          const respuesta = procesarMensaje(mensaje);
          const botMessageElement = document.createElement('div');
          botMessageElement.className = 'bot-message';
          botMessageElement.textContent = respuesta;
          messages.appendChild(botMessageElement);
          
          // Desplazar el chat hacia abajo para mostrar el último mensaje
          messages.scrollTop = messages.scrollHeight;
      }
  }
  
  document.getElementById('message-input').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });



  function toggleTrabajos() {
  const zona = document.getElementById("trabajo");
  zona.style.display = (zona.style.display === "none") ? "block" : "none";
}


