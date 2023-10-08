/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

//Creamos la función. Luego añadimos una variable vacia donde se almacenará el texto que se hackeara.
//Recorremos el largo del texto introducido con un for y vamos sustituyendo carácter por número.
//Finalmente llamamos a la función.
//En la letra a, he usado también OR para controlar la mayúscula.

const hackearTexto = (texto) => {
  let textoHackeado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a" || texto[i] === "A") {
      textoHackeado += 4;
    } else if (texto[i] === "o") {
      textoHackeado += "0";
    } else {
      textoHackeado += texto[i];
    }
  }
  console.log(textoHackeado);
};

hackearTexto("HolA soy yo");
