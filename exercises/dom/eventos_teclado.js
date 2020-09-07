const d = document;

export function shortcuts(e) {
  /* //ver las propiedades del evento keydown
  console.log(e);
  //para poderle agregar eventos con el código
  console.log(e.keyCode);
  //para saber si la tecla es ctrl o alt, retorna true o false.
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e.type); */

  //si preciona la tecla a y la tecla alt
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado un confirm con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado una confirmación con el teclado");
  }
}
//Esta mondá nos va a permitir controlar el movimiento
let x = 0,
  y = 0;
//e para pasarle el evento(cuando se oprime la tecla), la bola y el escenario
export function moveBall(e, ball, containerBall) {
  //guardamos en variables tanto la pelota como el contenedor
  const $ball = d.querySelector(ball),
    $containerBall = d.querySelector(containerBall),
    //Este getBoundingClientRect nos indica caracteristicas del elemento, como su ancho, alto y que tan alejado está de cada cada margen de la pantalla
    $limitsBall = $ball.getBoundingClientRect(),
    $limitsContainer = $containerBall.getBoundingClientRect();
  /* console.log(e.keyCode);
  console.log(e.key);
  console.log($limitsBall);
  console.log($limitsContainer); */

  switch (e.keyCode) {
    case 37:
      if ($limitsBall.left > $limitsContainer.left) {
        //MIENTRAS ESTE VALIDANDO QUE EL LÍMITE DE LA BOLA A LA IZQUIERDA SEA MAYOR A LOS LÍMITES DEL CONTENEDOR, VA A ESTAR QUITANDOLE EL ATAJO POR DEFECTO DE LA TECLA. EN EL CASO DE ESTA TECLA ES QUE LA PANTALLA HAGA SCROLL HACIA LA IZQUIERDA
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if ($limitsBall.top > $limitsContainer.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if ($limitsBall.right < $limitsContainer.right) {
        x++;
        e.preventDefault();
      }
      break;
    case 40:
      if ($limitsBall.bottom < $limitsContainer.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  //translate recibe dos parámetros, lo que se va a mover en "x" y lo que se va a mover en "y" y los multiplico por 10 para que se muevan de 10 pixeles cada vez que oprima la tecla
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
