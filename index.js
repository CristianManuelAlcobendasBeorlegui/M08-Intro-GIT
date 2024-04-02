// === MODO ESTRICTO === //
"use strict";

// === ELEMENTOS DEL DOM === //
let spanFecha;

// === EVENTOS === //
window.addEventListener("load", init, false);

// === METODOS === // 

// Funcion init
function init() {
    // Vincula las variables con los elementos del DOM
    spanFecha = document.getElementById("span-fecha");

    // Llama a algunos metodos
    mostrarFecha();
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
