const btn1 = document.getElementById("btn1");


btn1.addEventListener("click", () => {
    alert("Hola Mundo");
});

const btnIrCalculadora = document.getElementById("btnIrCalculadora");

btnIrCalculadora.addEventListener("click", () => {
    window.location.href = "calculadoraPage.html";
});