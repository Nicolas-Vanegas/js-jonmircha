/* export default function hamburgerMenu() {
  const $hamburguesa = document.querySelector(".hamburger"),
    $navegacion = document.getElementById("navegation");

  const abrirNav = () => {
    $navegacion.classList.toggle("is-active");
    $hamburguesa.classList.toggle("is-active");
    console.log("sisas");
  };

  $hamburguesa.addEventListener("click", abrirNav);
  $navegacion.addEventListener("click", abrirNav);
}
 */

//acá la función ya trae como parametro los elementos del html
export default function hamburgerMenu(panelBtn, panel, menuLink) {
  //Esta mondá para no estar escribiendo document....
  const d = document;

  //le agrego el evento click a todo el documento y le doy una función
  d.addEventListener("click", e => {
    //si oprime en hamburger o en cualquier hijo de hamburguesa, eso lo hago con el *
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
  });
}
