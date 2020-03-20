//selezione lunghezza parole
alert("benvenuti nel giochino delle parole")

//inserimento prima parola
var firstWord = prompt("Prego, scelga la sua parola");
var firstWordLength = firstWord.length;
//inserimento seconda parola
var secondWord = prompt("Prego, scelga la sua parola");
var secondWordLength = secondWord.length;

//var result
var result;
//stampa della parola più corta
if (firstWordLength < secondWordLength){
  result = firstWord +  " " + secondWord;
} else if (firstWordLength > secondWordLength){
  result = secondWord +  " " + firstWord;
} else {
  result = "le due parole sono lunghe uguali";
}
//stampa della parola più lunga
document.getElementById('ex-2').innerHTML= result;
