// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
console.log('pari e dispari')

//ASSEGNAZIONE DI ELEMENTO DEL DOM
let msgElement = document.getElementById("msg")

//RICHIESTA INSERIMENTO CAMPI DALL'UTENTE
let evenOdd = prompt('Scegli pari o dispari').toLowerCase()
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
console.log(evenOdd)

//FUNZIONE NUMERO CASUALE
function numeroCasuale(e) {
    let num = (Math.floor(Math.random() * 5) + 1)
    return num
}
let numPc = numeroCasuale()
let somma = numeroUtente + numPc

// console.log(numeroUtente)
// console.log(numPc)


//FUNZIONE CONTROLLO SE PARI
function isEven(e) {
    if (somma % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
//ASSEGNAZIONE TRUE O FALSE ALLA VARIABILE pari
let pari = isEven(somma)
console.log(somma, pari)

//CONDIZIONE DI VERIFICA DOPPIA TRA SELEZIONE PARI/DISPARI E VALORE RITORNATO DALLA FUNZIONE isEven
if (evenOdd == 'pari' && pari == true) {
    console.log(`hai vinto`)
    msgElement.innerHTML += `La somma tra ${numeroUtente} e ${numPc} è ${somma}, Hai vinto`
}
else if (evenOdd == "dispari" && pari == false) {
    console.log(`hai vinto`)
    msgElement.innerHTML += `La somma tra ${numeroUtente} e ${numPc} è ${somma}, Hai vinto`

}
else {
    console.log(`hai perso`)
    msgElement.innerHTML += `La somma tra ${numeroUtente} e ${numPc} è ${somma}, Hai perso`

}

