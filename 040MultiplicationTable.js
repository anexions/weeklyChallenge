/*
 * Crea un programa que sea capaz de solicitarte un número y se
 * encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
 * - Debe visualizarse qué operación se realiza y su resultado.
 *   Ej: 1 x 1 = 1
 *       1 x 2 = 2
 *       1 x 3 = 3
 *       ...
 */

const multiplicationTable = (number) => {
  for (let i = 0; i <= 10; i++) {
    result = number * i;
    if (isNaN(number)) {
      console.log("Debes instertar un número no un carácter.");
      break;
    }
    console.log(`${number} x ${i} = ${result}`);
  }
};

multiplicationTable("5");
