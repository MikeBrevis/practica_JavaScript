const ingresarTarea = document.getElementById("ingresar-tarea")
const crearTarea = document.getElementById("boton-crear")
const listaTareas = document.getElementById("lista-de-tareas")

function nuevaTarea() {
    const texto = ingresarTarea.value.trim()
    const div = document.createElement("div")
    div.classList.add("tarea")
    listaTareas.prepend(div)

    const inp = document.createElement("input")
    inp.setAttribute("type", "checkbox")
    div.appendChild(inp)

    const p = document.createElement("p")
    p.textContent = texto
    div.appendChild(p)
}

crearTarea.addEventListener("click", function () {

    if (ingresarTarea.value == "") {
        alert("ingrese una tarea")
        ingresarTarea.focus()
        return
    }

    nuevaTarea()
})
















