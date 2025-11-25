const ingresarTarea = document.getElementById("ingresar-tarea")
const crearTarea = document.getElementById("boton-crear")
const listaTareas = document.getElementById("lista-de-tareas")
const eliminarTarea = document.querySelector(".trash")

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

    const trash = document.createElement("i")
    trash.classList.add("bi", "bi-trash3", "trash")
    div.appendChild(trash)
}

crearTarea.addEventListener("click", function () {

    if (ingresarTarea.value == "") {
        alert("ingrese una tarea")
        ingresarTarea.focus()
        return
    }

    nuevaTarea()

    ingresarTarea.value = ""
    ingresarTarea.focus()
})

listaTareas.addEventListener("click", function (e) {

    if (e.target.classList.contains("trash")) {
        let eliminarTarea = e.target.closest(".tarea")
        eliminarTarea.remove()
    }
})



















