
//Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// DEFINISCO VARIABILI GLOBALI

var totaleNumeri = 0;
var totaleBombe = 16;
var difficulty = 0;
var bombe = [];
var numeriValidi = [];
var numeroUtente = 0;


//FUNZIONI

//questa funzione sarà usata per generare i numeri casuali dell'array Bombe, nei vari livelli di difficoltà scelti:
function randomizer (numeroMin, numeroMax) {
  return Math.floor(Math.random() * (numeroMax - numeroMin + 1 ) + numeroMin);
}

//questa funzione servirà per capire se un elemento scelto è presente in un array (come una sorta di metodo .includes):
function inArray (array, elemento) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == elemento) {
      return true;
    }
  }
  return false;
}

//PROGRAMMA

// 1. definisco difficulty; uso uno switch.

do {
  difficulty = prompt("Scegli la tua difficoltà: facile, medio o difficile.").toLowerCase();
} while (difficulty != "facile" && difficulty != "medio" && difficulty != "difficile");

switch (difficulty) {
  case "facile":
    totaleNumeri = 100;
    break;
  case "medio":
    totaleNumeri = 80;
    break;
  case "difficile":
    totaleNumeri = 50;
    break;
}

// 2. vado a definire i numeri che compongono l'array Bombe con la funzione Randomizer:

var i = 0;
var numeroRandom;

while (i < totaleBombe) {
  numeroRandom = randomizer(1, totaleNumeri);
  if (inArray(bombe, numeroRandom )) {
  } else {
    bombe.push(numeroRandom);
    i++
  }
}

// stampo le bombe per controllo nel console log
console.log("Se vuoi barare e vedere i numeri bomba, li trovi qui: " + bombe);

// 3. creo il cuore del programma usando un ciclo while con tre condizioni if di controllo successive.

var esploso = false;

// ciclo che dura in base alla length dei numwri inseriti, confrontata al massimo raggiungibile E fintanto che la booleana Esploso è falsa.
while (numeriValidi.length < totaleNumeri - totaleBombe && esploso == false) {
  numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e " + totaleNumeri));
  // primo controllo: se il numero inserito è uguale a un numero già usato, questo non viene pushato nell'array Numeri Validi.
  if (inArray(numeriValidi, numeroUtente)) {
    alert("Non fare il furbo: inserisci solo numeri che non hai già inserito.");
  }
  // secondo controllo: se il numero non rientra nei parametri accettati o è un NaN, questo non viene pushato nell'array Numeri Validi.
  if (numeroUtente <= 0 || numeroUtente > totaleNumeri || isNaN(numeroUtente)) {
    alert("Attenzione: inserisci solo un valore numerico compreso tra 1 e " + totaleNumeri);
  }
  // terzo controllo: se il numero rientra nell'array Bombe, la booleana Esploso da vero e il ciclo termina; ALTRIMENTI il numero è pushato nell'array Numeri Validi.
  if (inArray(bombe, numeroUtente)) {
    esploso = true;
    alert("BOOM! Sei saltato in aria e la tua partita termina qui.")
    console.log("Boom! Il numero " + numeroUtente + " era una bomba!")
  } else {
    numeriValidi.push(numeroUtente);
    //stampo il numero per controllo.
    console.log("Hai inserito il numero " + numeroUtente);
  }
}

// 4. In questa parte comunico all'utente il punteggio in base alle iterazioni, ossia alla length dell'Array NumeriValidi; stampo un alert appropriato a seconda dei punti fatti.

var punteggio = numeriValidi.length;

alert("Il tuo punteggio finale è " + punteggio)
console.log("Il tuo punteggio finale è " + punteggio )
console.log("I numeri che hai scelto sono stati: " + numeriValidi)

// uso un else if per i commenti al punteggio.

if (punteggio < (totaleNumeri - totaleBombe) * 0.20) {
  console.log("Hai totalizzato un punteggio basso; ritenta, sarai più fortunato.")
  alert("Hai totalizzato un punteggio basso; ritenta, sarai più fortunato.")
} else if (punteggio == totaleNumeri - totaleBombe) {
  console.log("INCREDIBILE! Hai totalizzato il massimo dei punti!!!")
  alert("INCREDIBILE! Hai totalizzato il massimo dei punti!!!")
} else {
  console.log("Un ottimo punteggio...Ma puoi sempre migliorare.")
  alert("Un ottimo punteggio...Ma puoi sempre migliorare.")
}
