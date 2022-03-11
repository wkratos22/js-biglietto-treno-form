
//età
// let eta = prompt( "Quanti anni hai?" );
console.log(eta);

//chilometri


let prezzo = 0.21;
// let chilometri = Number (prompt( "Quanti chilometri vuoi percorrere?" ) );
console.log(chilometri);
let prezzoTot = prezzo * chilometri;
console.log( prezzoTot + "€" );

//sconto minorenni 
if (eta<18){
    alert ("Hai uno sconto del 20%");
    let prezzo20 = prezzoTot * 0.8; 
    console.log (prezzo20);
    let info = prezzo20;
    // document.getElementById("contenitore_target").innerHTML = ("la tua età è:"+ " " + eta);
    // document.getElementById("contenitore_target2").innerHTML = `Costo del biglietto senza sconto applicato: ${prezzoTot.toFixed(2)} €`;
}
    // document.getElementById("contenitore_target3").innerHTML = `Costo del biglietto con 20% di sconto: ${prezzo20.toFixed(2)} €`;


//sconto over 65
if (eta>65){
    alert ("Hai uno sconto del 40%");
    let prezzo40 = prezzoTot * 0.6; 
    console.log (prezzo40);
    let info = prezzo40;
    // document.getElementById("contenitore_target").innerHTML = ("la tua età è:"+ " " + eta);
    // document.getElementById("contenitore_target2").innerHTML = `Costo del biglietto senza sconto applicato: ${prezzoTot.toFixed(2)} €`;
    // document.getElementById("contenitore_target3").innerHTML = `Costo del biglietto con 40% di sconto: ${prezzo40.toFixed(2)} €`;
}

//bottone
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}

//numeri random
function casuale() {
    num = Math.round(Math.random() * 100000 + 10000);
    document.getElementById("casuale").innerHTML = num;
}

//carrozza
function carrozza() {
    num = Math.round(Math.random() * 10 + 1);
    document.getElementById("carrozza").innerHTML = num;
}

//botone
// let bottone = document.getElementById("bottoneShowHide");
// let none = document.getElementById("hide");

// bottone.addEventListener("click",
    
//     function(){
//     none.classList.add("none");
//     }

// );