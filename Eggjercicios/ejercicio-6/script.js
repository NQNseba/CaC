// Paso 1: Crear un nuevo archivo 

//  Define "personas"
var personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 28, ciudad: "Sevilla" }
  ];
  
  // Declara la función
  function crearMensajesDePresentacion(personas) {
    // Paso 4: Crear el arreglo "mensajes"
    var mensajes = [];
  
    //  Recorre "personas" con un bucle
    personas.forEach(function(persona) {
      //  Crear el mensaje de presentación
      var mensaje = "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
      
      //Agregar eónl mensaje "mensajes"
      mensajes.push(mensaje);
    });
  
    // Devuelve "mensajes"
    return mensajes;
  }
  
  // Invocá la función y mostrar los mensajes por consola
  var mensajesDePresentacion = crearMensajesDePresentacion(personas);
  mensajesDePresentacion.forEach(function(mensaje) {
    console.log(mensaje);
  });
  