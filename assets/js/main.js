function cargarComponente(id, archivo) {
    fetch(archivo)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
        })
        .catch((error) => console.error("Error cargando:", archivo, error));
}

cargarComponente("header", "components/header.html");
cargarComponente("footer", "components/footer.html");


const track = document.getElementById("partnersTrack");
const carousel = track.parentElement;

/* ancho visible */
const visibleWidth = carousel.offsetWidth;

/* duplicar hasta que sobre espacio */
let contentWidth = track.scrollWidth;
while(contentWidth < visibleWidth * 2){
  track.innerHTML += track.innerHTML;
  contentWidth = track.scrollWidth;
}

/* guardar ancho ORIGINAL (mitad) */
const originalWidth = contentWidth / 2;

/* pasar valores a CSS */
track.style.setProperty("--scroll-width", originalWidth + "px");

/* velocidad profesional adaptable */
const pxPerSecond = 80;
track.style.setProperty("--duration", (originalWidth/pxPerSecond)+"s");