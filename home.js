function mostrarQuienesSomos() {
    ocultarSecciones();
    document.getElementById('quienesSomos').classList.add('visible');
}

function mostrarCatalogo() {
    ocultarSecciones();
    document.getElementById('catalogo').classList.add('visible');
}

function mostrarPreguntasFrecuentes() {
    ocultarSecciones();
    document.getElementById('preguntasFrecuentes').classList.add('visible');
}

function mostrarInicio() {
    ocultarSecciones();
    document.getElementById('inicio').classList.add('visible');
}

function ocultarSecciones() {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => seccion.classList.remove('visible'));
}

document.addEventListener("DOMContentLoaded", function() {
    var preguntas = document.querySelectorAll(".pregunta_f");
    preguntas.forEach(function(pregunta) {
        pregunta.addEventListener("click", function() {
            var respuesta = this.nextElementSibling;
            respuesta.classList.toggle("respuesta_f"); // Alternar la clase 'oculto' para mostrar u ocultar la respuesta
        });
    });
});