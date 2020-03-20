

alert("la preghiamo di inserire 5 numeri dopo il segnale acustico")

//chiedere un numero
var num1 = parseInt(prompt('inserisci il primo numero'));
//chiedere un numero
var num2 = parseInt(prompt('inserisci il secondo numero'));
//chiedere un numero
var num3 = parseInt(prompt('inserisci il terzo numero'));
//chiedere un numero
var num4 = parseInt(prompt('inserisci il quarto numero'));
//chiedere un numero
var num5 = parseInt(prompt('inserisci il quinto numero'));

//creare result e sommare i numeri
var result = num1 + num2 + num3 + num4 + num5;

//output con la somma
document.getElementById('ex-3').innerHTML= "il totale fa " + result + " ,COMPLIMENTI HAI VINTO UN PALLOTTOLIERE";
