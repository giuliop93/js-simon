// Un alert() espone 5 numeri generati casualmente.
// var randomNumbers = []

function getRandomNumbers(x) {
    var randomNumbers = [];
    for (i = 0; i < x; i++) {
        var n = Math.round(Math.random() * 100 + 1);
        randomNumbers.push(n);
    }
    return randomNumbers;
}

var numbers = getRandomNumbers(5);
alert("Memorizza i seguenti numeri " + numbers + " per provare a disinnescarmi.")
console.log(numbers);

// Da li parte un timer di 30 secondi.
setTimeout(myFunction, 30000);
function myFunction() {
    alert("i 30 secondi sono scaduti");
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    //pushare i numeroInserito nell'array userChoice
    var userChoice = [];
    var guessNumbers = [];
    for (i = 0; i < 5; i++) {
        var numeroInserito = parseInt(prompt("Inserisci un numero"));
        userChoice.push(numeroInserito);
    }
    for (i = 0; i < userChoice.length; i++) {
        if (correctNumbers.includes(userChoice[i])) {
            guessNumbers.push(userChoice[i])
        }
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        console.log("i numeri indovinati sono" + guessNumbers + "e sono in totale" + guessNumbers.length)
}
//  }
