// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
let word = prompt('Inserisci una parola');

// Funzione per capire se la parola inserita è palindroma
function isPalindrome(string) {
    let reverseWord = string.split('').reverse().join('');
    if (word === reverseWord) {
        console.log('La parola inserita è palindroma');
    } else {
        console.log('La parola inserita non è palindroma');
    }
}
