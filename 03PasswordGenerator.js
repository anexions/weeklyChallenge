/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

const generarPassword = (longitud = 8, mayusculas = false, numeros = false, simbolos = false) => {
    let password = "";
    const caracteres = "abcdefghijklmnopqrstuvwxyz";
    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numerosString = "0123456789";
    const simbolosString = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let caracteresFinales = caracteres;

    if (mayusculas) {
        caracteresFinales += caracteresMayusculas;
    }
    if (numeros) {
        caracteresFinales += numerosString;
    }
    if (simbolos) {
        caracteresFinales += simbolosString;
    }

    for (let i = 0; i < longitud; i++) {
        password += caracteresFinales.charAt(
            Math.floor(Math.random() * caracteresFinales.length)
        );
    }

    return password;
};

console.log(generarPassword(8, true, true, true)); // Letras (minúsculas + mayúsculas), números y símbolos
console.log(generarPassword(8, false, true, true)); // Solo letras minúsculas, números y símbolos
console.log(generarPassword(8, true, false, true)); // Letras (minúsculas + mayúsculas) y símbolos
console.log(generarPassword(8, true, true, false)); // Letras (minúsculas + mayúsculas) y números
console.log(generarPassword(8, false, false, true)); // Solo letras minúsculas y símbolos
console.log(generarPassword());