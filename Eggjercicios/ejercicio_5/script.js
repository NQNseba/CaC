function realizarOperaciones(num1, num2) {
    var resultado = {};
  
    resultado.suma = num1 + num2;
    resultado.resta = num1 - num2;
    resultado.multiplicacion = num1 * num2;
    resultado.division = num1 / num2;
  
    console.log(resultado);
  }
  
  realizarOperaciones(7, 3);
  realizarOperaciones(13, 3);
  realizarOperaciones(9, 5);
  