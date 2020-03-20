// raffronto tra numeri
alert('benvenuto nel giochino del numerino')

//inserimento primo numero
var primoNum = parseInt(prompt("fate il vostro gioco ed inserite il primo numero"));

//inserimento secondo numero
var secondoNum = parseInt(prompt("adesso tocca a te là dietro, si dico a te, fai il tuo gioco"));

//var del vincitore
var vincitore;
//scelta numero maggiore
if (primoNum > secondoNum) {
  vincitore = "primo tizio, che ha puntato " + primoNum;
} else if (primoNum < secondoNum){
  vincitore = "secondo tizio, che ha puntato " + secondoNum;
}
//output numero maggiore
document.getElementById('ex-1').innerHTML= "il vincitore è il " + vincitore;
