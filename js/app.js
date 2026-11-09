var artistas = [
    {
        dia: "Pop/Rock internacional",
        hora: "20:00",
        imagen: "./media/albumes/imaginaldisk.jpg",
    },
    {
        dia: "Pop/Rock internacional",
        hora: "21:30",
        imagen: "./media/albumes/1989ç.jpg",
    },
    {
        dia: "Pop/Rock internacional",
        hora: "23:00",
        imagen: "./media/albumes/ADELE.jpg",
    },
    {
        dia: "Pop/Rock internacionañ",
        hora: "19:30",
        imagen: "./media/albumes/UYI.jpg",
    },
    
    {
        dia: "Indie",
        hora: "21:00",
        imagen: "./media/albumes/currents.jpg",
    },
    {
        dia: "Indie",
        hora: "23:30",
        imagen: "./media/albumes/SAW.jpg",
    },
    {
        dia: "Rap",
        hora: "18:00",
        imagen: "./media/albumes/MBDTF.jpg",
    },
    {
        dia: "Rap",
        hora: "20:00",
        imagen: "./media/albumes/tmm.jpg",
    },
    {
        dia: "Rap",
        hora: "22:00",
        imagen: "./media/albumes/TUPAC.jpg",
    }
];
// Empieza aquí tu código
console.log(artistas.length); 
console.log(artistas[1].nombre);

// Seleccionamos los elementos
var cartel = document.querySelector("#cartel");

//funcuion que pinta los artistas en el cartel

function pintarCartel(diaActuacion) {
    var html = "";
    var total = 0;

    for (var i = 0; i < artistas.length; i++) {
        if (diaActuacion === "Todos" || artistas[i].dia === diaActuacion) {

            var estilo;
            if (artistas[i].imagen) {
                estilo = "background-image: url('" + artistas[i].imagen + "')";
            } else {
                estilo = "background-color: " + artistas[i].color;
            }

            html = html +
                '<article class="artista">' +
                    '<div class="artista__poster" style="' + estilo + '"></div>' +
                    '<button type="button" class="boton boton--borde boton-artista" data-indice="' + i + '">Ver más</button>' +
                '</article>';

            total++;
        }
    }

    // mostramos cuántos artistas se han pintado
    contador.textContent = "Mostrando " + total + " albumes.";
    cartel.innerHTML = html;

    // Paso 4: ventana modal asociada a cada botón de cada artista
    var botonesArtista = document.querySelectorAll(".boton-artista");
    for (var j = 0; j < botonesArtista.length; j++) {
        botonesArtista[j].addEventListener("click", abrirModal);
    }
}


// Paso 3: Filtros por dia 
var filtros = document.querySelectorAll(".filtro"); 
console.log(filtros);

for (var k = 0; k < filtros.length; k++) {
    filtros[k].addEventListener("click", function(){ 
        var dia = this.getAttribute("data-dia");
        pintarCartel(dia);

    });
}

//llamamos a la funcion

pintarCartel("Todos");