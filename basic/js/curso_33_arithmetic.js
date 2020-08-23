function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//juntar las funciones para exportarlas como un objeto
export const aritmetica = {
  //cuando el valor y la propiedad se llaman igual se deja solo el nombre 1 vez
  /* sumar: sumar, */
  sumar,
  restar,
};
