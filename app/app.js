// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

console.log('paliedispari')

let parolaUtente = prompt('Inserisci una parola')
// console.log(parolaUtente.length - 1)

function isPalindrome(parola) {
    let j = parola.length - 1
    for (let i = 0; i < parola.length / 2; i++) {
        if (parolaUtente[i] != parolaUtente[j]) {
            return false
        } j--;
    }
    return true;
}

console.log(isPalindrome(parolaUtente))