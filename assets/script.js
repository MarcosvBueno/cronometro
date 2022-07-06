window.onload = function () {
  var segundos = 00
  var milesimos = 00
  var minutos = 00
  var acrescentaMin = document.getElementById('minutos')
  var acrescentaSec = document.getElementById('segundos')
  var acrescentaMil = document.getElementById('milesimos')
  var buttonStart = document.getElementById('button-start')
  var buttonStop = document.getElementById('button-stop')
  var buttonReset = document.getElementById('button-reset')
  var intervalo
  var buttonAdd = document.getElementById('button-add')
  var buttonRemove = document.getElementById('button-remove')
  const cronometro = document.querySelector('#cronometro')
  const botoes = document.getElementById('buttons')

  buttonRemove.onclick = function remove() {
    location.reload()
  }

  buttonAdd.onclick = function setTime() {
    const cronometro = document.querySelector('#cronometro').cloneNode(true)
    document.getElementById('buttons').after(cronometro)
  }

  buttonStart.onclick = function start() {
    clearInterval(intervalo)
    intervalo = setInterval(startTimer, 10)
  }

  buttonStop.onclick = function stop() {
    clearInterval(intervalo)
  }

  buttonReset.onclick = function reset() {
    clearInterval(intervalo)
    segundos = '00'
    milesimos = '00'
    acrescentaSec.innerHTML = segundos
    acrescentaMil.innerHTML = milesimos
  }

  function startTimer() {
    milesimos++

    if (milesimos <= 9) {
      acrescentaMil.innerHTML = '0' + milesimos
    }

    if (milesimos > 9) {
      acrescentaMil.innerHTML = milesimos
    }

    if (milesimos > 99) {
      segundos++
      acrescentaSec.innerHTML = '0' + segundos
      milesimos = 0
      appendTens.innerHTML = '0' + 0
    }

    if (segundos > 9) {
      acrescentaSec.innerHTML = segundos
    }

    if (segundos > 60) {
      minutos++
      segundos = '00'
      milesimos = '00'
      acrescentaSec.innerHTML = segundos
      acrescentaMil.innerHTML = milesimos
      acrescentaMin.innerHTML = minutos
    }
  }
}
