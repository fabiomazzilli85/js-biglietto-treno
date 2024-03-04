// Informazioni preliminari del passeggero: età e chilometri da percorrere.

let kmViaggio = prompt("Quanti chilometri devi percorrere?"); //number
let etaPassegero = prompt("Quanti anni hai?") //number

// Calcolo del costo del biglietto del treno
let costoBiglietto = kmViaggio*0.21; //number


// Calcolo del costo del bilgietto in base all'eta

let bigliettoMinori = costoBiglietto * 0.8; //number 
// Costo del biglietto per i  passeggeri con età inferiore ai 18 anni

let bigliettoAnziani = costoBiglietto * 0.6; //number
// Costo del biglietto per i  passeggeri con età superiore ai 65 anni

let bigliettoStandard = costoBiglietto; //number


// Console Log
if (etaPassegero <18){
    console.log("Il costo del biglietto per i minori è: " + bigliettoMinori.toFixed(2) + " euro");
}

else if (etaPassegero >65){
    console.log("Il costo del biglietto per gli anziani è: " + bigliettoAnziani.toFixed(2) + " euro");
}

else {
    console.log("Il costo del biglietto è: " + bigliettoStandard.toFixed(2) + " euro");
}