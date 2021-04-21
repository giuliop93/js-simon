// Un alert() espone 5 numeri generati casualmente.

function getRandomNumbers (x){
    var randomNumbers = [];
    for(i = 0; i < x; i++){
        var n = Math.round(Math.random() * 100 + 1);
        randomNumbers.push(n);
    }
    return randomNumbers;
}

var numeri = getRandomNumbers(5);
console.log(numeri);
// Da li parte un timer di 30 secondi.
setTimeout(myFunction, 30000)

     
//  }
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
