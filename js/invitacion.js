// ========================================
// CONTADOR DE LA INVITACIÓN
// ========================================

// FECHA DEL EVENTO
// Después vamos a reemplazar esta fecha
const fechaEvento = new Date("2027-05-15T21:00:00").getTime();


// Actualiza el contador
function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;


    // Si llegó el momento del evento
    if (diferencia <= 0) {

        document.getElementById("contador").innerHTML =
            "<div class='evento-hoy'>✨ HOY ES EL GRAN DÍA ✨</div>";

        return;
    }


    // Convertimos el tiempo restante
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    // Mostramos el resultado
    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas.toString().padStart(2, "0");

    document.getElementById("minutos").textContent =
        minutos.toString().padStart(2, "0");

    document.getElementById("segundos").textContent =
        segundos.toString().padStart(2, "0");
}


// Actualizar inmediatamente
actualizarContador();


// Actualizar cada segundo
setInterval(actualizarContador, 1000);
