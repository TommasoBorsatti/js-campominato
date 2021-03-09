
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

//FUNZIONI

//Funzione per generare un intero random tra due estremi compresi.
function randomizer(numeroMin, numeroMax) {
  return Math.floor(Math.random()* (numeroMax - numeroMin + 1) + numeroMin);
}



// PROGRAMMA

//1. Creo un array casuale di 16 numeri vietati (numeri bomba) presi tra 1 e 100, usando la funzione Randomizer.
// Per farlo ripeto l'uso della funzione per 16 volte usando un ciclo For.
//I numeri dell'array non possono essere uguali tra loro:

var numeriBomba = [];
var i = 0;
var punteggio = 0;

for (var i = 0; i < 16; i++) {
  var numeroRandom = randomizer(1,50);
  while (numeriBomba.includes(numeroRandom)) {
    numeroRandom = randomizer(1, 50);
  }
  numeriBomba.push(numeroRandom);
}

console.log("numeri bomba: " + numeriBomba);

//2. Chiedo all'utente di inserire in prompt il totale dei numeri richiesto;
// Il tutto avviene in un ciclo while.

var numeroUtente = 0;
var j = 0;
while (j < 10 && !numeriBomba.includes((numeroUtente))) {
  numeroUtente = parseInt(prompt("inserisci qui un numero intero compreso tra 1 e 100"));
  j++;
  console.log("inserito il " + numeroUtente);
}
punteggio = j;
console.log("hai totalizzato " + punteggio + " punti!")
