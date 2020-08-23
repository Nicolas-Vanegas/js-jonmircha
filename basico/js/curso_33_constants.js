export const PI = Math.PI;

//no necesariamente tienes que exportar todo
export let user = "Nicolas";

//No puedes exportar por default de esta manera una función expresada(función que se almacena dentro de una variable) o una variable, sólo función definida (la que no se guarda en una variable). Ya que con las funciones expresadas, no hace hoisting, y con las definidas si.
/* export default let password = "sisas"; */

//si necesitas exportar por defalut constantes o variables lo haces de la siguiente forma:
let password = "sisas";
export default password;

//default: cuando se mande a llamar esta función en otro archivo, se importa automáticamente. SOLO PUEDES TENER UNA FUNCÓN CON DEFAULT.
/* export default function saludar() {
  console.log("Hola módulos + ES6");
} */

//clase con dafault
/* export default class Saludar {
  constructor() {
    console.log("Hola módulos + ES6");
  }
} */
