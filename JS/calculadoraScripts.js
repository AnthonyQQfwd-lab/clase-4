
var textBoxOperacion = document.getElementById("TextBoxOperacion");

function formarOperacion(valor) {
    
    //se toma el valor que almacena la caja de texto 
    var operacion = textBoxOperacion.value;

    //se concatena
    operacion += valor;

    //se asigna el resultado a la caja de texto
    textBoxOperacion.value = operacion;
}

function borrarTodo() {
    textBoxOperacion.value = "";
}


function realizarOperacion(){

    var operacion = textBoxOperacion.value;
    operacion = eval(operacion);

    textBoxOperacion.value = operacion;

}

function elevar() {

    var operacion = textBoxOperacion.value;

    operacion += "**";
    textBoxOperacion.value = operacion;
}

function raizCuadrada() {

    var operacion = textBoxOperacion.value;

    operacion = "Math.sqrt(" + operacion + ")";
    textBoxOperacion.value = operacion;
}

function borrar() {

    var operacion = textBoxOperacion.value;
    operacion = operacion.slice(0, -1);
    textBoxOperacion.value = operacion;
}