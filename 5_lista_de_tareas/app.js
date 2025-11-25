const ingresarTarea = document.getElementById("ingresar-tarea")
const crearTarea = document.getElementById("boton-crear")
const listaTareas = document.getElementById("lista-de-tareas")

crearTarea.addEventListener("click", function () {
    const texto = ingresarTarea.value.trim()

    if (texto == "") {
        alert("ingrese una tarea")
        ingresarTarea.focus()
        return
    }

    const p = document.createElement("p")
    p.textContent = texto
    listaTareas.prepend(p) // Agrega la tarea al inicio

    ingresarTarea.value = ""
    ingresarTarea.focus()
})












