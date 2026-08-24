const fechaEvento = new Date("2027-05-15T21:00:00");

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
