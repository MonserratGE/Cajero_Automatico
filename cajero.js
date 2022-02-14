'use strict'

var cuentas = [
    //{ nombre: "Enre", saldo: 800, password: '378453' },
    { nombre: "Juan", saldo: 990, password: '304060' },
    { nombre: "Monse", saldo: 670, password: '23681920' }
  ];

let juan = document.getElementById("juan");
juan.addEventListener('click', btnJuan);
function btnJuan() {
    //resetear()
    resultado.textContent=`¡Hola Juan, ingresa tu password!`
    const container = document.querySelector('.pantalla')
    const input = document.createElement('input')
    input.setAttribute('type', 'password');
    input.setAttribute('id', 'password');
    const texto = document.createTextNode('')
    container.appendChild(input)
    input.appendChild(texto)
}

function resetear() {
    resultado.textContent = "";
}

let confirmar = document.getElementById("confirmar");
confirmar.addEventListener('click', btnEnter);
function btnEnter() {
    cargar()
}

function cargar(){
    let comCont = document.getElementById('password');
    let contra = comCont.value;
    let cuenta = cuentas.find(cuenta => cuenta.password === contra);
    console.log('Cuenta:',cuenta);
}

/*async function navegar() {
    window.location.href = './pagAcciones.html';
    
}*/

