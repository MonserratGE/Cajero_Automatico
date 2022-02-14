'use strict'

var cuentas = [
    { nombre: "Enre", saldo: 800, password: '378453' },
    { nombre: "Juan", saldo: 990, password: '304060' },
    { nombre: "Monse", saldo: 670, password: '23681920' }
  ];

let confirmar = document.getElementById("confirmar");
confirmar.addEventListener('click', btnEnter);
function btnEnter() {
    cargar()
    if(1){
        //console.log('Si agarra');
        acceso()
        } else{
        console.log('Contraseña incorrecta');
    }
}

function cargar(){
    let comCont = document.getElementById('password')
    let contra = comCont.value
    let cuenta = cuentas.find(cuenta => cuenta.password === contra);
    console.log('Cuenta:',cuenta);
    cuenta = 1;
}

async function acceso() {
    window.location.href = './3_pagAcciones.html';   
}

    
