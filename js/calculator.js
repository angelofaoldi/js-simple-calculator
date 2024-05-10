'use strict';


// PRIMA PROVA
// const tastiUnoNove = document.getElementById('tastiUnoNove');
// console.log(tastiUnoNove);

// SECONDA PROVA
// let tastiUnoNove = [];
// tastiUnoNove = document.getElementById('unoNove');
// console.log(tastiUnoNove);

// tastiUnoNove.forEach(() => {
//     tastiUnoNove.addEventListener ('click', () => {
//         const buttonText = button.textContent;
//         console.log(`${buttonText}`);
//     });
// });



// TERZA PROVA

// creo una costante relativa al display della calcolatrice, poi passo al tastierino
const displayNero = document.getElementById("result");
console.log(displayNero);

// conferisco una classe "tasto" ad ogni singola cifra numerica del tastierino, in modo tale da poterle raggruppare
const tasti = document.querySelectorAll(".tasto");
console.log(tasti);

// creo una costante che abbia la lunghezza dei dieci tasti della calcolatrice; la utilizzerò nel ciclo for 
const tastiZeroNove = tasti.length;

// CICLO FOR
// l'idea è quella di selezionare tutti i numeri, metterli in ascolto di un click, farli comparire nel displayNero
for (let i = 0; i < tastiZeroNove; i++) {
    tasti[i].addEventListener("click", => () {
        // in questo modo ho messo ogni singolo tasto in ascolto di un click
        // quando avviene il click, si attiva la funzione anonima
        // la funzione anonima dovrà collegare i tasti cliccati al displayNero e qui farli visualizzare

        
    })

}





