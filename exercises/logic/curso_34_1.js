/* 1)  Programa una función que cuente el número de caracteres de algo ingresado */

function numeroDeCaracteres(ingreso) {
  switch (typeof ingreso) {
    case "string":
      console.log(`Tu cadena tiene ${ingreso.length} caracteres`);
      break;
    case "object":
      for (const elementos in ingreso) {
        if (ingreso.hasOwnProperty(elementos)) {
          const element = ingreso[elementos];
          console.log(`${element} tiene ${element.length} caracteres`);
        }
      }
      break;
    case "number":
      console.log(`Tu numero tiene ${ingreso.toString().length} dígitos`);
      break;
    default:
      console.log("Lo siento no reconozco lo ingresado");
      break;
  }
}
numeroDeCaracteres("Hola mundo");
numeroDeCaracteres(["Nicolas", "Pedro", "Pablo"]);
numeroDeCaracteres({ nombre: "Nicolas", apellido: "Vanegas", edad: "21" });
numeroDeCaracteres(3231);
console.clear();

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados
pe. miFunción("Hola Mundo",4) devolvrá "Hola" */

const textoRecortado = (mensaje, caracteres) => console.log(mensaje.substring(0, caracteres));

textoRecortado("Hola Mundo", 4);
console.clear();

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por ciento caracter
pe. miFunción("Hola que tal",'') devolverá ['hola', 'que', 'tal'].*/

const devuelveArray = (message, romper) => console.log(message.split(romper));

devuelveArray("Hola que tal", " ");
console.clear();

/* 4)Programa una función que repita un texto X veces.
pe. ("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo*/

function repetirTexto(mensaje, veces) {
  console.log(mensaje.repeat(veces));
}
repetirTexto("Hola Mundo ", 3);
console.clear();

//----------------------------------Solución del profesor-------------
/* 1)  Programa una función que cuente el número de caracteres de algo ingresado */

const contarCaracteres = (cadena = "") =>
  //si la cadena no está
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

//sale el warning
contarCaracteres();
contarCaracteres("Hola Mundo");

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados
pe. miFunción("Hola Mundo",4) devolvrá "Hola" */

const recortarTexto = (cadena = "", longitud = undefined) =>
  //si no ingresa algo
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar la cadena de texto")
    : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 4);
recortarTexto();
recortarTexto("", 7);
recortarTexto("d");
console.clear();

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
pe. miFunción("Hola que tal",'') devolverá ['hola', 'que', 'tal'].*/

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  //Si es verdad que no hay cadena hace lo del ? si es falso lo del :
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : //si no hay nada en el parámetro de separador
    separador === undefined
    ? console.warn("No ingresaste un separador de texto")
    : console.info(cadena.split(separador));
cadenaAArreglo("Hola que tal", " ");
cadenaAArreglo("1,2,3,4,5,6,7,8,9, ", ",");
cadenaAArreglo();
cadenaAArreglo("asdasd asdas asd");
console.clear();

/* 4)Programa una función que repita un texto X veces.
pe. ("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo*/

//cuando un condicional solo va a ejecutar la linea de código inmediata que tiene abajo, las llaves valen mondá
const repeatText = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");

  if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

  if (veces === 0) return console.error("No ingresaste un número de veces válido");

  if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

repeatText("Hola Mundo", 4);
