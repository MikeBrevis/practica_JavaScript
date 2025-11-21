const cronometro = document.getElementById("cronometro")

let totalSegundos = 0



setInterval(function () {
    totalSegundos ++
    cronometro.innerText = totalSegundos
}, 1000)


function formatearTiempo(totalSegundos) {
    let segundos = totalSegundos % 60 
    let minutos = Math.floor((totalSegundos % 3600) / 60) 
    let horas = Math.floor(totalSegundos / 3600)

    

    return `${horas}:${minutos}:${segundos}`
}

console.log(formatearTiempo(500500))





