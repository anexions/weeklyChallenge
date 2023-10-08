/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */

// Heterograma: Es una palabra o frase que no tiene ninguna letra repetida.
// Isograma: Es una palabra o frase que no tiene ninguna letra repetida.
// Pangrama: Es una frase que contiene todas las letras del alfabeto.

const heterograma = (texto) => {
  // Convertimos el texto a minúsculas y quitamos caracteres que no son letras.
  texto = texto.toLowerCase().replace(/[^a-z]/g, "");

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    // Buscamos la letra en el texto.
    let primeraVez = texto.indexOf(letra);
    let segundaVez = texto.indexOf(letra, primeraVez + 1);

    // Si encontramos la letra una segunda vez, no es un heterograma.
    if (segundaVez !== -1) {
      return console.log("No es un heterograma");
    }
  }

  return console.log("Es un heterograma");
};

heterograma("murcielago");

//PANGRAMA

const pangrama = (texto) => {
    // Convertimos el texto a minúsculas y quitamos caracteres que no son letras del alfabeto español.
    texto = texto.toLowerCase().replace(/[^a-záéíóúüñ]/g, "");
  
    // Creamos un array con todas las letras del alfabeto español.
    let letras = "abcdefghijklmnñopqrstuvwxyzáéíóúü".split("");
  
    // Recorremos el array de letras.
    for (let i = 0; i < letras.length; i++) {
      let letra = letras[i];
  
      // Buscamos la letra en el texto.
      let encontrado = texto.indexOf(letra);
  
      // Si no encontramos la letra, no es un pangrama.
      if (encontrado === -1) {
        console.log("Falta la letra: " + letra); // Esta línea mostrará qué letra falta.
        return console.log("No es un pangrama");
      }
    }
  
    return console.log("Es un pangrama");
  }
  
  pangrama("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja");

  