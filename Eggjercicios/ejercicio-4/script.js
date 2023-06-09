function invertirPalabras(palabras) {
    var resultado = '';
  
    var arrayPalabras = palabras.split(' ');
  
    for (var i = arrayPalabras.length - 1; i >= 0; i--) {
      var palabraInvertida = '';
      var palabra = arrayPalabras[i];
      for (var j = palabra.length - 1; j >= 0; j--) {
        palabraInvertida += palabra[j];
      }
      resultado += palabraInvertida + ' ';
    }
  
    return resultado;
  }
  
  var string1 = 'Hola mundo';
  var string2 = 'Programación es divertida';
  var string3 = 'OpenAI ChatGPT';
  
  console.log(invertirPalabras(string1));
  console.log(invertirPalabras(string2));
  console.log(invertirPalabras(string3));
  