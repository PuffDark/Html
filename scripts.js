// Objeto para almacenar el estado de cada computadora
let estados = {
  1: true,
  2: true,
  3: true,
  4: true
};

// Objeto para almacenar el tiempo transcurrido para cada computadora
let tiempos = {
  1: 0,
  2: 0,
  3: 0,
  4: 0
};

// Objeto para almacenar el límite de tiempo (en minutos) para cada computadora
let limites = {
  1: document.getElementById('limite-1').value,
  2: document.getElementById('limite-2').value,
  3: document.getElementById('limite-3').value,
  4: document.getElementById('limite-4').value
};


// Variable para almacenar el límite de tiempo (en minutos)
  let limite = 5;

// Función para cambiar el estado de una computadora
  function toggleComputer(numero) {
  // Cambiar el estado de la computadora
  estados[numero] = !estados[numero];

// Actualizar el texto del elemento que muestra el estado
  let estadoTexto = estados[numero] ? 'Encendido' : 'Apagado';
  document.getElementById(`computer-${numero}-status`).textContent = estadoTexto;
  
// Actualizar el texto del botón
  let botonTexto = estados[numero] ? 'Apagar' : 'Encender';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).textContent = botonTexto;
  
// Actualizar el color del botón
  let botonColor = estados[numero] ? 'red' : 'green';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.backgroundColor = botonColor;
  
// Actualizar el color del texto del botón
  let botonTextColor = estados[numero] ? 'white' : 'white';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.color = botonTextColor;
  
  // Actualizar el borde del botón
  let botonBorder = estados[numero] ? 'none' : 'none';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.border = botonBorder;
  
  // Actualizar el cursor del botón
  let botonCursor = estados[numero] ? 'pointer' : 'pointer';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.cursor = botonCursor;
  
   // Actualizar el padding del botón
  let botonPadding = estados[numero] ? '8px 10px' : '8px 10px';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.padding = botonPadding;
  
   // Actualizar el margen del botón
  let botonMargin = estados[numero] ? '3px' : '3px';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.margin = botonMargin;
  
   // Actualizar la fuente del botón
  let botonFontFamily = estados[numero] ? 'Times New Roman' : 'Times New Roman';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.fontFamily = botonFontFamily;
  
   // Actualizar la fuente del botón
  let botonFontSize = estados[numero] ? '14px' : '14px';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.fontSize = botonFontSize;
  
   // Actualizar la fuente del botón
  let botonFontWeight = estados[numero] ? 'Times New Roman' : 'Times New Roman';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.fontWeight = botonFontWeight;
  
   // Actualizar la fuente del botón
  let botonTextDecoration = estados[numero] ? 'none' : 'none';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.textDecoration = botonTextDecoration;
  
   // Actualizar la fuente del botón
  let botonTextTransform = estados[numero] ? 'uppercase' : 'uppercase';
  document.querySelector(`.computer-section:nth-child(${numero}) button`).style.textTransform = botonTextTransform;

  // Función para actualizar los cronómetros
function actualizarCronometros() {
  // Recorrer todas las computadoras
  for (let i = 1; i <= 4; i++) {
      // Si la computadora está encendida, aumentar el tiempo transcurrido
      if (estados[i]) {
          tiempos[i]++;

          // Calcular los minutos y segundos transcurridos
          let minutos = Math.floor(tiempos[i] / 60);
          let segundos = tiempos[i] % 60;

          // Asegurarse de que los minutos y segundos tengan dos dígitos
          if (minutos <10) {
              minutos = '0' + minutos;
          }
          if (segundos <10) {
              segundos = '0' + segundos;
          }

          // Actualizar el texto del cronómetro
          document.querySelector(`.computer-section:nth-child(${i}) .timer`).textContent = `${minutos}:${segundos}`;

          // Si se alcanzó el límite, mostrar una alerta y apagar la computadora
          if (minutos >= limite) {
              alert(`La computadora ${i} ha alcanzado el límite de tiempo`);
              toggleComputer(i);
          }
      }
  }
}


// Ejecutar la función actualizarCronometros cada segundo
setInterval(actualizarCronometros,1000);

// Update time limit when input field value changes
for (let i = 1; i <= 4; i++) {
    document.getElementById(`limite-${i}`).addEventListener('change', function() {
        limites[i] = this.value;
    });
}






// Obtener la fecha y hora actuales
let ahora = new Date();
let dia = ahora.getDate();
let mes = ahora.getMonth() + 1;
let anio = ahora.getFullYear();
let horas = ahora.getHours();
let minutos = ahora.getMinutes();

// Asegurarse de que el día y el mes tengan dos dígitos
if (dia < 10) {
  dia = '0' + dia;
}
if (mes < 10) {
  mes = '0' + mes;
}

// Asegurarse de que las horas y los minutos tengan dos dígitos
if (horas < 10) {
  horas = '0' + horas;
}
if (minutos < 10) {
  minutos = '0' + minutos;
}

// Establecer los valores de los campos de entrada
document.getElementById('fecha').value = `${anio}-${mes}-${dia}`;

