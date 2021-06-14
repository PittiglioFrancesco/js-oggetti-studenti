// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo 
// nell’ordine: nome, cognome e età.

// ex

var studente = {
    nome: "Francesco",
    cognome: "Pittiglio",
    age: "20"
};

var text = "";
var x;
for (x in studente){
    text += studente[x] + " ";
}

document.getElementById("demo").innerHTML = text;
