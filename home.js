function mostrarSeccion(id) {
    ocultarSecciones();
    document.getElementById(id).classList.add('visible');
}

function ocultarSecciones() {
    document.querySelectorAll('section').forEach(seccion => 
        seccion.classList.remove('visible')
    );
}

document.addEventListener("DOMContentLoaded", function() {
    // Botones del NAV (solo TEMPORADA y CATÁLOGO)
    const botonesNav = document.querySelectorAll("nav button");
    
    // Asignar eventos a los botones del NAV
    botonesNav[0].addEventListener("click", () => mostrarSeccion('inicio'));
    botonesNav[1].addEventListener("click", () => mostrarSeccion('catalogo'));

    // Botones del FOOTER (¿Quiénes somos? y Preguntas frecuentes)
    const botonQuienesSomos = document.querySelector(".footer-links button:first-child");
    const botonPreguntas = document.querySelector(".footer-links button:last-child");

    botonQuienesSomos.addEventListener("click", () => mostrarSeccion('quienesSomos'));
    botonPreguntas.addEventListener("click", () => mostrarSeccion('preguntasFrecuentes'));

    // Mostrar sección inicial
    mostrarSeccion('inicio');
});

// Carrusel
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.style.opacity = 0;
            slide.style.zIndex = 0;
        });
        
        // Mostrar slide actual
        slides[index].style.opacity = 1;
        slides[index].style.zIndex = 1;
        
        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Autoplay
    setInterval(nextSlide, 5000);

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
    });
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});