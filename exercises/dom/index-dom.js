const $hamburguesa = document.querySelector(".hamburger"),
  $navegacion = document.getElementById("navegation");

const abrirNav = () => {
  $navegacion.classList.toggle("is-active");
  $hamburguesa.classList.toggle("is-active");
  console.log("sisas");
};

$hamburguesa.addEventListener("click", abrirNav);
$navegacion.addEventListener("click", abrirNav);
