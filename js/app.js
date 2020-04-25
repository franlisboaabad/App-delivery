const formulario = document.getElementById('formulario');
const button = document.getElementById('submit');

button.onclick = function (e) {
    e.preventDefault();
    console.log(e);

    let nombre = formulario.name.value;
    let correo = formulario.email.value;
    var lista = formulario.opciones;
    var texto = formulario.textarea.value;

    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var textoSeleccionado = opcionSeleccionada.text; // select texto seleccionado
    var valorSeleccionado = opcionSeleccionada.value; // valor selccionado

}

