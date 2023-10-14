const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let Slytherin = [];
let Gryffindor = [];
let Hafelpuff = [];
let Ravenclaw = [];
let casa = "";

rl.question("¿Cuál es tu nombre? ", (nombre) => {
  rl.question(
    "Elige entre: Ambición, Amistad, Ayuda o Sanacion?",
    (respuesta) => {
      switch (respuesta) {
        case "Ambición":
          Slytherin.push(respuesta);
          break;
        case "Amistad":
          Gryffindor.push(respuesta);
          break;
        case "Ayuda":
          Hafelpuff.push(respuesta);
          break;
        case "Sanacion":
          Ravenclaw.push(respuesta);
          break;
        default:
          console.log("No has elegido una opción válida");
      }

      rl.question(
        "Para ti, poder es...Grandeza, Compartir, Ayudar, Diversión?",
        (respuesta) => {
          switch (respuesta) {
            case "Grandeza":
              Slytherin.push(respuesta);
              break;
            case "Compartir":
              Gryffindor.push(respuesta);
              break;
            case "Ayudar":
              Hafelpuff.push(respuesta);
              break;
            case "Diversión":
              Ravenclaw.push(respuesta);
              break;
            default:
              console.log("No has elegido una opción válida");
          }

          rl.question(
            "¿ Qué te gustaría aprender en Hogwarts? Magia, Pociones, Encantamientos, Transformaciones ?",
            (respuesta) => {
              switch (respuesta) {
                case "Magia":
                  Slytherin.push(respuesta);
                  break;
                case "Pociones":
                  Hafelpuff.push(respuesta);
                  break;
                case "Encantamientos":
                  Ravenclaw.push(respuesta);
                  break;
                case "Transformaciones":
                  Gryffindor.push(respuesta);
                  break;
                default:
                  console.log("No has elegido una opción válida");
              }

              rl.question(
                "¿Qué te gustaría hacer en tu tiempo libre? Leer, Jugar, Dormir, Estudiar?",
                (respuesta) => {
                  switch (respuesta) {
                    case "Leer":
                      Ravenclaw.push(respuesta);
                      break;
                    case "Jugar":
                      Gryffindor.push(respuesta);
                      break;
                    case "Dormir":
                      Hafelpuff.push(respuesta);
                      break;
                    case "Estudiar":
                      Slytherin.push(respuesta);
                      break;
                    default:
                      console.log("No has elegido una opción válida");
                  }

                  //Choose house

                  if (
                    Slytherin.length > Gryffindor.length &&
                    Slytherin.length > Hafelpuff.length &&
                    Slytherin.length > Ravenclaw.length
                  ) {
                    casa = "Slytherin";
                  } else if (
                    Gryffindor.length > Slytherin.length &&
                    Gryffindor.length > Hafelpuff.length &&
                    Gryffindor.length > Ravenclaw.length
                  ) {
                    casa = "Gryffindor";
                  } else if (
                    Hafelpuff.length > Slytherin.length &&
                    Hafelpuff.length > Gryffindor.length &&
                    Hafelpuff.length > Ravenclaw.length
                  ) {
                    casa = "Hafelpuff";
                  } else if (
                    Ravenclaw.length > Slytherin.length &&
                    Ravenclaw.length > Gryffindor.length &&
                    Ravenclaw.length > Hafelpuff.length
                  ) {
                    casa = "Ravenclaw";
                  } else {
                    console.log(
                      "Deberías volver a hacer el test, no soy capaz de encontrarte una casa."
                    );
                  }

                  console.log(
                    `Hola ${nombre}, según tus elecciones, debería asignarte la casa de: ${casa}`
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});
