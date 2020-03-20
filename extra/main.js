
//prima domanda
var firstAsk = prompt("si può sapere quanto fa 15 + 18 ? fa trentasei?");


//creare result
var result;
//gestire le risposte
if (firstAsk === "si") {
  result = "che dio ti maledica, non fa 36";
}
document.getElementById('extra').innerHTML= result;

var result2;
var secondAsk = parseInt(prompt("allora? 15 + 18 quanto fa?"));
if (secondAsk === 33){
  result2 = "bravo,hai vinto una bottiglia di barbera d'Asti";
}
document.getElementById('extra2').innerHTML= result2;
