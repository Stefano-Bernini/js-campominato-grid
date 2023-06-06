PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1 - Creare il pulsante nel DOM;
2 - Recuperare il pulsante in js;
3 - Aggiungere l'event listener al pulsante;
4 - Creare un div nel DOM che conterra' le caselle della griglia;
5 - Creare le caselle dinamicamente e appenderle al div al click del pulsante;
6 - Scrivere nella casella il numero corrispondente;
6.1 - All'interno del for, utilizzare la proprieta' innerText della casella create per assegnargli il valore numerico (i + 1);
7 - Aggiungo l'event listener alla casella;
8 - Al click la casella si colora di azzurro;
9 - Al click della casella mostro in console il numero della casella cliccata;




BONUS: Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

1 - Aggiungere la seclect al DOM;
2 - Al click del pulsante, recuperare il valore se3lezionato dalla select;
3 - Generare la griglia in base al valore della select selezionato;
