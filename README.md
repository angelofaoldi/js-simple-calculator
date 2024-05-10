Attenzione: la nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.
MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
MILESTONE 2
aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
MILESTONE 3
aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo
:star2: BONUS
verificare che non si stia cercando di dividere per 0

// _______________________________________________________________________________________________________________________________


MILESTONE 1
1) Aggiungere event listener a tutti i numeri

- HTML: aggiungo una classe="tastiUnoNove" ai bottoni da 1 a 9
- JS: ogni bottone avrà il proprio listener e stamperà il messaggio corretto in console quando viene cliccato.
per selezionarli tutti faccio querySelectorAll('tastiUnoNove)



2) Quando si clicca su un numero, concatenarlo al numero in alto nel display