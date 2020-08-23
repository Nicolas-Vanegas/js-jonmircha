import saludar, { PI, user } from "./curso_33_constants.js";
//importa la función aritmetica y le pongo el alias de calculos para usarla con ese alias en este archivo js
import { aritmetica as calculos } from "./curso_33_arithmetic.js";
console.log("Archivo modules.js");
console.log(PI);
console.log(user);
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
//mando a llamar la función saludar la cual se exporta como default e inmediatamente se importa sola cuando la uses
/* saludar(); */
