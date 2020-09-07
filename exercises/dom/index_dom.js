import hamburgerMenu from "./hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./eventos_teclado.js";
import { countdown } from "./countdown.js";
import buttomScroll from "./botonScroll.js";

const d = document;

//Le agrega a la página un recargado y una función la cuál es la del módulo
d.addEventListener("DOMContentLoaded", e => {
  //acá van las mondás del html
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  //2.
  digitalClock("#clock", "#start-clock", "#stop-clock");
  alarm("../../assets/hombre-cantando-la-bebesita-bebelin-meme-2020.mp3", "#start-alarm", "#stop-alarm");
  countdown("container-date", "Jan 25, 2021 10:10:10", "Buena la rata");
  buttomScroll(".btn-scroll");
});

//3.
//Le agrego a la página keydown para que detecte cuando se oprime una tecla y agregarle un evento. keyup = cuando se suelta la tecla. keypress = mientras tenga presionada la tecla.
d.addEventListener("keydown", e => {
  shortcuts(e);
  moveBall(e, "#ball", "#container-ball");
});
