/*
 * Crea una función que reciba dos cadenas de texto casi iguales,
 * a excepción de uno o varios caracteres. 
 * La función debe encontrarlos y retornarlos en formato lista/array.
 * - Ambas cadenas de texto deben ser iguales en longitud.
 * - Las cadenas de texto son iguales elemento a elemento.
 * - No se pueden utilizar operaciones propias del lenguaje
 *   que lo resuelvan directamente.
 * 
 * Ejemplos:
 * - Me llamo mouredev / Me llemo mouredov -> ["e", "o"]
 * - Me llamo.Brais Moure / Me llamo brais moure -> [" ", "b", "m"]
 */

const compareTexts = (text1, text2) => {
    let diferences = [];

    for (let i = 0; i < Math.min(text1.length, text2.length); i++) { 
        if (text1[i] != text2[i]) {
            diferences.push({position: i, charText1: text1[i], charText2: text2[i]}); // Almacenamos la posición y los caracteres diferentes
        }
    }

    diferences.forEach(dif => {
        console.log(`En la posición ${dif.position}, text1 tiene '${dif.charText1}' y text2 tiene '${dif.charText2}'`);
    });

}

compareTexts("Hola soy jesus", "Hula soy jisus");
