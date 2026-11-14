$(function () {
    var $body = $('body');
    var $panel = $('#panel-carrito');
    var $lista = $('#lista');
    var carrito = [];

    // Cargar el carrito guardado (localStorage no tiene versión jQuery)
    try {
        carrito = $.parseJSON(localStorage.getItem('carrito')) || [];
    } catch (e) {
        carrito = [];
    }

    function guardar() {
        try {
            localStorage.setItem('carrito', JSON.stringify(carrito));
        } catch (e) {}
    }

    function abrir() {
        $body.addClass('carrito-abierto');
        $panel.attr('aria-hidden', 'false');
        $panel.find('.cerrar').trigger('focus');
    }

    function cerrar() {
        $body.removeClass('carrito-abierto');
        $panel.attr('aria-hidden', 'true');
        $('#carrito-btn').trigger('focus');
    }

    function pintar() {
        $lista.empty();

        if (carrito.length === 0) {
            $lista.append('<p>Tu carrito está vacío.</p>');
            return;
        }

        $.each(carrito, function (i, p) {
            var $info = $('<div>').append(
                $('<div class="nombre">').text(p.nombre),
                $('<div class="precio">').text(p.precio + ' EUR')
            );

            $('<div class="item">')
                .append($('<img>').attr({ src: p.img, alt: '' }), $info, $('<div class="cant">').text('x' + p.cant))
                .appendTo($lista);
        });
    }

    function anadir(producto) {
        // $.grep filtra el array: busca si ya existe un producto con ese nombre
        var existente = $.grep(carrito, function (p) {
            return p.nombre === producto.nombre;
        })[0];

        if (existente) {
            existente.cant++;
        } else {
            carrito.push({
                nombre: producto.nombre,
                precio: Number(producto.precio),
                img: producto.img,
                cant: 1
            });
        }

        guardar();
        pintar();
        abrir();
    }

    // Eventos
    $('#carrito-btn').on('click', abrir);
    $panel.on('click', '.cerrar', cerrar);
    $('#fondo').on('click', cerrar);

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $body.hasClass('carrito-abierto')) cerrar();
    });

    // Botones con data-anadir (sirve también para los que cree app.js)
    $(document).on('click', '[data-anadir]', function () {
        var $b = $(this);
        anadir({ nombre: $b.data('nombre'), precio: $b.data('precio'), img: $b.data('img') });
    });

    $.anadirAlCarrito = anadir;

    pintar();
});