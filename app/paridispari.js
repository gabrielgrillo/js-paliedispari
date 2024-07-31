// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
console.log('pari e dispari')

// let evenOdd = prompt('Scegli pari o dispari')
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
// console.log(evenOdd, numeroUtente)

function numeroCasuale(e) {
    let num = (Math.floor(Math.random() * 5) + 1)
    return num
}
let numPc = numeroCasuale()
let somma = numeroUtente + numPc
console.log(numeroUtente)
console.log(numPc)
console.log(somma)

// numeroCasuale()
// console.log(numeroCasuale())
