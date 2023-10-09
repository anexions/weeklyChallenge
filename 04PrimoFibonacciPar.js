/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

function esPrimo(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  // Chequear división por 2 y 3
  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

const esFibonacci = (number) => {
  const isPerfectSquare = (n) => {
    const s = Math.sqrt(n);
    return s * s === n;
  };

  return (
    isPerfectSquare(5 * number * number + 4) ||
    isPerfectSquare(5 * number * number - 4)
  );
};

const esPar = (number) => {
  if (number % 2 == 0) {
    return true;
  }
};

const checkNumber = (number) => {
  //Saber si es Primo, llamamos a la funcion creada arriba.

  if (esPrimo(number)) {
    console.log(`${number} es primo`);
  } else {
    console.log(`${number} no es primo`);
  }

  //Saber si es finoacci
  if (esFibonacci(number)) {
    console.log(`${number} es fibonacci`);
  } else {
    console.log(`${number} no es fibonacci`);
  }

  //Saber si es par
  if (esPar(number)) {
    console.log(`${number} es par`);
  } else {
    console.log(`${number} no es par`);
  }

  console.log(
    `El número ${number} es ${esPrimo(number) ? "primo" : "no primo"}, ${
      esFibonacci(number) ? "fibonacci" : "no fibonacci"
    } y ${esPar(number) ? "par" : "impar"}`
  );
};

checkNumber(7);
