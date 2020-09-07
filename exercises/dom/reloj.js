const d = document;

export function digitalClock(clock, startClock, stopClock) {
  //gardar el reloj para poderlo parar después
  let clockTempo;
  //le agrego el evento click a todo el documento y le doy una función
  d.addEventListener("click", e => {
    if (e.target.matches(startClock)) {
      clockTempo = setInterval(() => {
        //esto da la hora actual y la meto en un setInterval para que la de cada segundo
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 500);

      e.target.disabled = true;
    }

    if (e.target.matches(stopClock)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(startClock).disabled = false;
    }
  });
}

export function alarm(sound, startAlarm, stopAlarm) {
  let alarmTempo;
  //crea un elemento html
  const $alarm = d.createElement("audio");
  //al atributo src igualalo a sound que es el nombre del sonido que queremos reproducir.
  $alarm.src = sound;

  d.addEventListener("click", e => {
    if (e.target.matches(startAlarm)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(stopAlarm)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      //para que vuelva al comienzo
      $alarm.currentTime = 0;
      d.querySelector(startAlarm).disabled = false;
    }
  });
}
