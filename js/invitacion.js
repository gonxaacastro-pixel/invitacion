// ========================================
// CONTADOR
// ========================================

// FECHA DE PRUEBA
const fechaEvento = new Date("2027-05-15T21:00:00").getTime();


function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;


    // Si llegó la fecha
    if (diferencia <= 0) {

        document.getElementById("contador").innerHTML =
            "<div class='evento-hoy'>✨ HOY ES EL GRAN DÍA ✨</div>";

        return;
    }


    // Días
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    // Horas
    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );


    // Minutos
    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );


    // Segundos
    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    // Mostrar los valores
    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent =
        horas.toString().padStart(2, "0");

    document.getElementById("minutos").textContent =
        minutos.toString().padStart(2, "0");

    document.getElementById("segundos").textContent =
        segundos.toString().padStart(2, "0");

}


// Ejecutar inmediatamente
actualizarContador();


// Actualizar cada segundo
setInterval(actualizarContador, 1000);
