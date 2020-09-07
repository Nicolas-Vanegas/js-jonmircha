const d = document,
  w = window;

export default function buttomScroll(btnScroll) {
  const $btnScroll = d.querySelector(btnScroll);
  w.addEventListener("scroll", e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    scrollTop > 500 ? $btnScroll.classList.add("is-active") : $btnScroll.classList.remove("is-active");
  });

  d.addEventListener("click", e => {
    if (e.target.matches(btnScroll) || e.target.matches(`${btnScroll} *`))
      /* d.documentElement.scrollTop = 0; Esta sería una forma*/
      //otra manera:
      w.scrollTo({
        behavior: "smooth", //Esta mondá para que el desplazamiento del scroll sea suave
        top: 0, //Este la cantidad de separación que va a tener con respecto al top
      });
  });
}
