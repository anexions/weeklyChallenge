/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love              P1
 *   30 - Love              P1
 *   30 - 15                P2
 *   30 - 30                P2
 *   40 - 30                P1
 *   Deuce                  P2
 *   Ventaja P1             P1
 *   Ha ganado el P1        P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */

const puntuacionTenis = ["Love", 15, 30, 40];
partidoFinalizado = false;

const partidoTenis = (secuencia) => {
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < secuencia.length && !partidoFinalizado; i++) {
    let imprimirPuntuacion = true;
    if (secuencia[i] === "P1") {
      p1++;
    } else if (secuencia[i] === "P2") {
      p2++;
    }

    //Logica para saber si está empate marca deuce

    if (puntuacionTenis[p1] === puntuacionTenis[p2] && p1 >= 3 && p2 >= 3) {
      console.log("Deuce");
      imprimirPuntuacion = false;
    }

    //Logica para saber si hay ventaja

    if (puntuacionTenis[p1] >= puntuacionTenis[p2] && p1 >= 3 && p2 >= 3) {
      console.log("Ventaja P1");
      imprimirPuntuacion = false;
    } else if (
      puntuacionTenis[p1] <= puntuacionTenis[p2] &&
      p1 >= 3 &&
      p2 >= 3
    ) {
      console.log("Ventaja P2");
      imprimirPuntuacion = false;
    }

        //Logica para que no reproduzca undefined

    if (puntuacionTenis[p1] === undefined || puntuacionTenis[p2] === undefined) {
      imprimirPuntuacion = false;
    }

    //Logica para saber si hay ganador

    if (p1 >= 4 && p1 - p2 >= 2) {
      partidoFinalizado = true;
      console.log("Ha ganado el P1");
      break;
    } else if (p2 >= 4 && p2 - p1 >= 2) {
      console.log("Ha ganado el P2");
      break;
    }

    if (partidoFinalizado) {
      break;
    }

    if (imprimirPuntuacion) {
      console.log(puntuacionTenis[p1] + " - " + puntuacionTenis[p2]);
    }
  }
};

partidoTenis(["P1", "P1", "P2", "P2", "P1", "P3", "P1", "P1", "P3"]);
