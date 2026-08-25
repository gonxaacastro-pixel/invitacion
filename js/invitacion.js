const fechaEvento = new Date("2026-10-17T12:00:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / 86400000);

    const horas = Math.floor(
        (diferencia / 3600000) % 24
    );

    const minutos = Math.floor(
        (diferencia / 60000) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

actualizarContador();

setInterval(actualizarContador, 1000);


/* ========================================
   CONFIRMACIÓN
======================================== */

function mostrarFormulario(viene) {

    const formulario =
        document.getElementById("formulario-asistencia");

    const mensajeNo =
        document.getElementById("mensaje-no");

    if (viene) {

        formulario.style.display = "block";
        mensajeNo.style.display = "none";

    } else {

        formulario.style.display = "none";
        mensajeNo.style.display = "block";

    }
}


/* ========================================
   WHATSAPP
======================================== */

function enviarWhatsApp() {

    const nombre =
        document.getElementById("nombre").value.trim();

    const cancion =
        document.getElementById("cancion").value.trim();

    const comidaSeleccionada =
        document.querySelector(
            'input[name="comida"]:checked'
        );

    if (nombre === "") {

        alert("Por favor, escribí tu nombre ❤️");

        return;
    }

    if (!comidaSeleccionada) {

        alert(
            "Por favor, seleccioná una preferencia alimentaria ❤️"
        );

        return;
    }

    if (cancion === "") {

        alert(
            "Por favor, escribí una canción 🎵"
        );

        return;
    }

    const comida =
        comidaSeleccionada.value;

    const mensaje =
        "Hola ❤️ Soy " + nombre +
        ". Confirmo que voy a la celebración de Nadia & Hugo." +
        "\n\nPreferencia alimentaria: " + comida +
        "\nCanción: " + cancion;

    const numero = "5491126817356";

    const url =
        "https://wa.me/" + numero +
        "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}
/* ========================================
   REGALO
======================================== */

function mostrarRegalo() {

    const datos =
        document.getElementById("datos-regalo");

    if (datos.style.display === "block") {

        datos.style.display = "none";

    } else {

        datos.style.display = "block";

    }
}


function copiarAlias() {

    const alias =
        document.getElementById("alias-mp").textContent;

    navigator.clipboard.writeText(alias);

    alert("Alias copiado ❤️");
}
/* ========================================
   ANIMACIONES AL DESLIZAR
======================================== */

const elementosAnimados =
    document.querySelectorAll(".animar");

const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

elementosAnimados.forEach((elemento) => {

    observador.observe(elemento);

});
