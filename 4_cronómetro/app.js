const cronometro = document.getElementById("cronometro")
let totalSegundos = 0

setInterval(function () {
    totalSegundos++
    texto = formatearTiempo(totalSegundos)
    cronometro.innerText = texto
}, 1000)

function formatearTiempo(se) {
    let segundos = se % 60
    let minutos = Math.floor((se % 3600) / 60)
    let horas = Math.floor(se / 3600)

    let s = String(segundos).padStart(2, "0")
    let m = String(minutos).padStart(2, "0")
    let h = String(horas).padStart(2, "0")

    return `${h}:${m}:${s}`
}









