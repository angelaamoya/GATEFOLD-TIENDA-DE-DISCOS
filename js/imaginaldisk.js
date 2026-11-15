$(function () {

    // PASO 1 · Selección y variables de estado
    var slides = $(".slide");        // todas las diapositivas
    var actual = 0;                  // posición actual (empieza en 0)
    var total = slides.length;       // número total de diapositivas

    // RETO 2 y 3 · Variables para el avance automático
    var intervalo = null;            // guarda el setInterval
    var reanudar = null;             // guarda el setTimeout

    // PASO 2 · Mostrar la diapositiva n
    function mostrar(n) {
        // stop(true, true) termina cualquier animación pendiente
        // (evita líos si se pulsa muy rápido)
        slides.eq(actual).stop(true, true).fadeOut();   // oculta la actual
        actual = n;                                     // nueva posición
        slides.eq(actual).stop(true, true).fadeIn();    // muestra la nueva

        // RETO 1 · Actualizar el contador ("2 / 4")
        $("#contador").text((actual + 1) + " / " + total);
    }

    // PASO 3 · Siguiente y anterior (con vuelta al principio / al final)
    function siguiente() {
        var n = actual + 1;
        if (n >= total) {
            n = 0;
        }
        mostrar(n);
    }

    function anterior() {
        var n = actual - 1;
        if (n < 0) {
            n = total - 1;
        }
        mostrar(n);
    }

    // RETO 2 · Avance automático cada 3 segundos
    function iniciarAuto() {
        clearInterval(intervalo);    // por seguridad, nunca dos intervalos a la vez
        intervalo = setInterval(siguiente, 3000);
    }

    // RETO 3 · Al pulsar un botón: parar y reactivar 5 s después
    function pausarAuto() {
        clearInterval(intervalo);
        clearTimeout(reanudar);      // si ya había una reanudación pendiente, la cancelamos
        reanudar = setTimeout(iniciarAuto, 5000);
    }

    // Botones
    $("#siguiente").on("click", function () {
        siguiente();
        pausarAuto();
    });

    $("#anterior").on("click", function () {
        anterior();
        pausarAuto();
    });

    // Arrancamos el avance automático al cargar
    iniciarAuto();

});

