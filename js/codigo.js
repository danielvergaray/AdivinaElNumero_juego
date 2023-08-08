// Relacionado al numero secreto
let numeroAzar= Math.trunc(Math.random()*20)+1;
let signo= document.getElementById("signoInterrogacion");
signo.innerText=numeroAzar;

// Score inicial
let score=20;
document.getElementById("score").textContent=score;

//Llamo al evento
let btnCheck= document.getElementById("btn-check");
btnCheck.addEventListener("click",  verificar );


function verificar (){
    
    document.getElementById("score").textContent=score;
    let highscore=0;
    let numeroUsuario=Number(document.getElementById("inputNumero").value);
   
    if (numeroUsuario===numeroAzar){
        let acertaste= '🎊 Felicidades, acertaste!';
        mensajeAlUsuario.innerText=acertaste;

    } else if (numeroUsuario<numeroAzar){
        let mensaje= '📉 Estas por debajo';
        mensajeAlUsuario.innerText=mensaje;
        score--;
        document.getElementById("score").textContent=score;  
    } else if (numeroUsuario>numeroAzar){
        let mensaje= '📉 Estas por arriba';
        mensajeAlUsuario.innerText=mensaje;
        score--;
        document.getElementById("score").textContent=score;    
    }

    /* console.log(numeroUsuario.value) */
}