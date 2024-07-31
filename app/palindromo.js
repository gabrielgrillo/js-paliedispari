// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

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