var turnoJugador = 1;
var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var ganador = 0;
var contadorJug1 = 0;
var contadorJug2 = 0;
var empates = 0;


function marcarCelda(idCelda) {
    if (tablero[idCelda] == 0) {
        document.getElementById("c" + idCelda).style.backgroundColor = "white";
    } else {
        if (tablero[idCelda] == 1) {
            document.getElementById("c" + idCelda).style.backgroundColor = "red";
        } else {
            document.getElementById("c" + idCelda).style.backgroundColor = "blue";
        }
    }
}

function jugarDeNuevo() {
    var opcion = confirm("¿Desea seguir jugando?");
    if (opcion == true){
        tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < tablero.length; i++) {
            marcarCelda(i);
        } 
        ganador = 0;
    }else{
        alert("Adiós!");
    }
}

function comprobarGanador() {
    var ganadorB = false;
    var contador = 0;
    ganador = tresEnRaya(tablero);
    contador++;
    if (ganador != 0) {
        ganadorB = true;
        
    }
    if (contador == 9 && ganador == 0) {
        ganador = "EMPATE"; 
    }

    return ganadorB;
}

function actualizarPuntuacion(ganador) {
    alert("Ha ganado la partida el jugador: "+ganador);
    if (ganador == 0){
        empates++;
        document.getElementById("empates").textContent = empates;
    }
    if (ganador == 1){
        contadorJug1++;
        document.getElementById("ganadosJ1").textContent = contadorJug1;
    }
    if (ganador == 2){
        contadorJug2++;
        document.getElementById("ganadosJ2").textContent = contadorJug2;
    }
}

function seleccionarCelda(idCelda) {
    if (tablero[idCelda] == 0) {
        var jugador = document.getElementById("jugadorActivo").textContent;
        tablero[idCelda] = jugador;
        marcarCelda(idCelda);
        if (jugador == "1") {
            document.getElementById("jugadorActivo").textContent = "2";
        } else {
            document.getElementById("jugadorActivo").textContent = "1";
        }
        if (comprobarGanador() == true) {
            //document.getElementById("c"+idCelda).onclick = function(){return false;} 
            actualizarPuntuacion(ganador);
            jugarDeNuevo();
        }

    } else {
        alert("Casilla ya ocupada");
    }

}
function tresEnRaya(tablero) {
    //vertical
    if ((tablero[0] != 0) && (tablero[3] != 0) && (tablero[6] != 0)) {
        if (tablero[0] == tablero[3] == tablero[6]) {
            ganador = tablero[0];
        }
    }
    if ((tablero[1] != 0) && (tablero[4] != 0) && (tablero[7] != 0)) {
        if (tablero[1] == tablero[4] == tablero[7]) {
            ganador = tablero[1];
        }
    }
    if ((tablero[2] != 0) && (tablero[4] != 0) && (tablero[8] != 0)) {
        if (tablero[2] == tablero[4] == tablero[8]) {
            ganador = tablero[2];
        }
    }

    //horizontal   
    if ((tablero[0] != 0) && (tablero[1] != 0) && (tablero[2] != 0)) {
        if (tablero[0] == tablero[1] == tablero[2]) {
            ganador = tablero[0];
        }
    }
    if ((tablero[3] != 0) && (tablero[4] != 0) && (tablero[5] != 0)) {
        if (tablero[3] == tablero[4] == tablero[5]) {
            ganador = tablero[3];
        }
    }
    if ((tablero[6] != 0) && (tablero[7] != 0) && (tablero[8] != 0)) {
        if (tablero[6] == tablero[7] == tablero[8]) {
            ganador = tablero[6];
        }
    }

    //diagonal   
    if ((tablero[0] != 0) && (tablero[4] != 0) && (tablero[8] != 0)) {
        if (tablero[0] == tablero[4] == tablero[8]) {
            ganador = tablero[0];
        }
    }
    if ((tablero[2] != 0) && (tablero[4] != 0) && (tablero[6] != 0)) {
        if (tablero[2] == tablero[4] == tablero[6]) {
            ganador = tablero[2];
        }
    }

    return ganador;
}

        /*var texto = '';
        for (var i = 0; i < tablero.length; i++) {
            texto += tablero[i];
        }
        alert(texto);*/

