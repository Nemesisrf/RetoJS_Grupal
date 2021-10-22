const letras = document.getElementById("letras");
const numeros = document.getElementById("numeros");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const diez = document.getElementById("diez");
const once = document.getElementById("once");
const doce = document.getElementById("doce");

const unoClick = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML = "1";
  } else {
    alert("Faltan letras");
  }
};

const dosClick = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML = letras.innerHTML + "B";
  } else if (numeros.innerHTML == "1") {
    numeros.innerHTML = numeros.innerHTML + "2";
  } else {
    alert("Faltan letras");
  }
};
const tresClick = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML = letras.innerHTML + "C";
  } else if (numeros.innerHTML == "12") {
    numeros.innerHTML = numeros.innerHTML + "3";
  } else {
    alert("Faltan letras");
  }
};
const cuatroClick = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML = letras.innerHTML + "D";
  } else if (numeros.innerHTML == "123") {
    numeros.innerHTML = numeros.innerHTML + "4";
  } else {
    alert("Faltan letras");
  }
};
const cincoClick = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML = letras.innerHTML + "E";
  } else if (numeros.innerHTML == "1234") {
    numeros.innerHTML = numeros.innerHTML + "5";
  } else {
    alert("Faltan letras");
  }
};
const seisClick = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML = letras.innerHTML + "F";
  } else if (numeros.innerHTML == "12345") {
    numeros.innerHTML = numeros.innerHTML + "6";
  } else {
    alert("Faltan letras");
  }
};
const sieteClick = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML = letras.innerHTML + "G";
  } else if (numeros.innerHTML == "123456") {
    numeros.innerHTML = numeros.innerHTML + "7";
  } else {
    alert("Faltan letras");
  }
};
const ochoClick = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML = letras.innerHTML + "H";
  } else if (numeros.innerHTML == "1234567") {
    numeros.innerHTML = numeros.innerHTML + "8";
  } else {
    alert("Faltan letras");
  }
};
const nueveClick = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML = letras.innerHTML + "I";
  } else if (numeros.innerHTML == "12345678") {
    numeros.innerHTML = numeros.innerHTML + "9";
  } else {
    alert("Faltan letras");
  }
};
const onceClick = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML = letras.innerHTML + "J";
  } else if (numeros.innerHTML == "123456789") {
    numeros.innerHTML = numeros.innerHTML + "0";
  } else {
    alert("Faltan letras");
  }
};

uno.onclick = function () {
  unoClick();
};
dos.onclick = function () {
  dosClick();
};
tres.onclick = function () {
  tresClick();
};
cuatro.onclick = function () {
  cuatroClick();
};
cinco.onclick = function () {
  cincoClick();
};
seis.onclick = function () {
  seisClick();
};
siete.onclick = function () {
  sieteClick();
};
ocho.onclick = function () {
  ochoClick();
};
nueve.onclick = function () {
  nueveClick();
};
once.onclick = function () {
  onceClick();
};
