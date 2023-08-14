// Relacionado al numero secreto
let numeroAzar = Math.trunc(Math.random() * 20) + 1;
let signo = document.getElementById("signoInterrogacion");

// Score inicial
let score = 20;
document.getElementById("score").textContent = score;
let highscore = 0;
document.getElementById("highscore").textContent = highscore;
let playing = true;

mensajeAlUsuario.innerText = "Comienza a adivinar";

//Llamo al evento
let btnCheck = document.getElementById("btn-check");
btnCheck.addEventListener("click", verificar);

function verificar() {
    document.getElementById("score").textContent = score;
    let numeroUsuario = Number(document.getElementById("inputNumero").value);

    if (playing && numeroUsuario) {
        if (numeroUsuario >= 1 && numeroUsuario <= 20) {
            if (numeroUsuario === numeroAzar) {
                let acertaste = '🎊 Felicidades, acertaste!';
                mensajeAlUsuario.innerText = acertaste;
                /* highscore = score; */
                document.getElementById("highscore").textContent = highscore;
                let fondoGanaste = document.getElementById("fondoGanaste");
                fondoGanaste.classList.add("ganaste");
                signo.innerText = numeroAzar;
                hasGanado()

                if (highscore < score) {
                    highscore = score;
                    document.getElementById("highscore").textContent = highscore;
                }

                playing = false;

            } else if (numeroUsuario !== numeroAzar) {
                if (numeroUsuario < numeroAzar) {
                    let mensaje = ' 📉 Estas por debajo';
                    mensajeAlUsuario.innerText = mensaje;
                    score--;
                    document.getElementById("score").textContent = score;
                    alertaPorDebajo();
                } else {
                    let mensaje = ' 📉 Estas por arriba';
                    mensajeAlUsuario.innerText = mensaje;
                    score--;
                    document.getElementById("score").textContent = score;
                    alertaPorArriba();
                }
            }
        } else {
            mensajeAlUsuario.innerText = "INGRESAR UN NUMERO ENTRE 1 Y 20";
        }
    }
    else if (playing && numeroUsuario === 0) {
        mensajeAlUsuario.innerText = "INGRESAR UN NUMERO ENTRE 1 Y 20";
    }

    if (score === 0) {
        mensajeAlUsuario.innerText = "Has perdido ☹ - Intentalo nuevamente";
        fondoGanaste.classList.add("perdiste");
        hasPerdido();
        playing = false;
    }
}

let repetir = document.getElementById("repetirJuego");
repetir.addEventListener("click", function () {
    score = 20;
    fondoGanaste.classList.remove("ganaste");
    fondoGanaste.classList.remove("perdiste");
    numeroAzar = Math.trunc(Math.random() * 20) + 1;
    signo.innerText = "?";
    document.getElementById("inputNumero").value = "";
    mensajeAlUsuario.innerText = "Comienza a adivinar";
    document.getElementById("score").textContent = score;
    playing = true

})

function alertaPorDebajo() {

    Toastify({
        text: "📉 Estas por debajo",
        className: "info",
        duration: 1000,
        style: {
            background: "black",
        }
    }).showToast();
}
function alertaPorArriba() {

    Toastify({
        text: "📉 Estas por arriba",
        className: "info",
        duration: 1000,
        style: {
            background: "black",
        }
    }).showToast();
}
function hasGanado() {

    Swal.fire({
        position: 'top-center',
        title: 'HAS GANADO',
        imageUrl: './homero-feliz.png',
        imageHeight: 500,
        imageAlt: 'A tall image',
        showConfirmButton: false,
        timer: 2000
    })
}
function hasPerdido() {

    Swal.fire({
        position: 'top-center',
        title: 'HAS PERDIDO',
        imageUrl: './homero-triste.png',
        imageHeight: 500,
        imageAlt: 'A tall image',
        showConfirmButton: false,
        timer: 2000
    })
}





