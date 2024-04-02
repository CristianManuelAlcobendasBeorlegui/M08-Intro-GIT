// === MODO ESTRICTO === //
"use strict";

// === ELEMENTOS DEL DOM === //
let spanFecha;
let spanHora;

// === EVENTOS === //
window.addEventListener("load", init, false);

// === METODOS === // 

// Funcion init
function init() {
    // Vincula las variables con los elementos del DOM
    spanFecha = document.getElementById("span-fecha");
    spanHora = document.getElementById("span-hora");

    // Llama a algunos metodos
    mostrarFecha();
    setInterval(mostrarHora, 1000);
}

/** 
 * Muestra la fecha de hoy en formato DD/MM/YYYY en el elemento "spanFecha".
 * */
function mostrarFecha() {
    let date = new Date();
    let dia = date.getDay().toString().padStart(2, 0);
    let mes = date.getMonth().toString().padStart(2, 0);
    let anyo = date.getFullYear().toString().padStart(2, 0);
    spanFecha.innerHTML = dia + "/" + mes + "/" + anyo;
}

/** 
 * Muestra la hora actual en formato HH:MM:SS.
 * */
function mostrarHora() {
    let date = new Date();
    let segundos = date.getSeconds().toString().padStart(2, 0);
    let minutos = date.getMinutes().toString().padStart(2, 0);
    let horas = date.getHours().toString().padStart(2, 0);

    spanHora.innerHTML = horas + ":" + minutos + ":" + segundos;
}