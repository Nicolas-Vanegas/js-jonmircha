const d = document;

export function countdown(id, limitDate, finalMessage) {
  const $contanierDate = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      //los milisegundos que sobraban al hallar los días, por cojo para las horas con eayuda del módulo y lo divide por el factor de horas. Le agregamos el 0 para que cuando solo tengo 1 número salga el 0 de primero y el slice para cortar el dato para que no salga el 0 si el número tiene más de 2 números
      hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
      minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $contanierDate.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $contanierDate.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
