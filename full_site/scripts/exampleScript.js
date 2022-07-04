// alert('Hello world!');
// document.write("HELL World!!");
// console.log("Hello world");
var a = 5;
var b = 5;
console.log(a == b); // == verifica aceeasi val si === verifica aceeasi val+tipul
// "|| - OR" "&& - AND"
var myName = "Corbeanu Alexandru";
console.log("Hello" + " " + myName);
var i;
for (i = 1; i <= 100; i++) {
  console.log(i);
}
i=1;
while (i<=100){
    console.log(i);
    i++;
}

//Afisati toate nr cuprinse intre 50 si 150, divizibile cu 7
for (i=50;i<=150;i++){      //Varianta cu for
    if (i%7==0) {
        console.log(i);
    }
}
i=50
while (i<=150){             //Varianta cu while
    if (i%7==0) {
        console.log(i);
    }
    i++;
}
// Functii
var a = 10;
var b = 15;

function suma(x,y){
   return x+y;
}

var z= suma(3,4)
console.log(suma(a,b))
console.log(z)
/*
-functie cu 3 parametri a,b,c
-functia returneaza un array care contine 
toate nr de la a la b div cu c
*/
function divArray(a,b,c){
    var ar=[];
    while(a<=b){
        if(a%c==0){
            ar.push(a);
        }
        a++;
    }
    return ar;
}
var z =divArray(50,150,2);
console.log(z);
// fibonacci seq
function fibonacciSeq(a){
    var ar=[0,1];
    for(i=2;i<a;i++){
        ar.push(ar[i-2]+ar[i-1]);
    }
    return ar;

}

var sad=fibonacciSeq(10);
console.log(sad);

function schimbaTitlu(){
    var titlu = document.getElementById("titluNews");
    titlu.innerHTML = "De ce dai click pe mine?";
}

function schimb(){
    // var click= document.getElementsByid("tralala");
    var tit=document.getElementById("titluNews");
    tit.innerHTML = "NEWS";
}/*
=========== facuta la Curs=========================
function sumaUser(){
    var firstElem=document.getElementById("firstNumber");
    var secondElem=document.getElementById("secondNumber");
    var nr1=parseInt(firstElem.value);
    var nr2=parseInt(secondElem.value) ;
    var show=suma(nr1,nr2);
    var results=document.getElementById("rezultatSuma");
    results.innerHTML=show;
}
===================================================
*/
//============Facuta dupa
function getElemValue(){
    var firstElem=document.getElementById("firstNumber");
    var secondElem=document.getElementById("secondNumber");
    var firstNumber=parseInt(firstElem.value);
    var secondNumber=parseInt(secondElem.value);
    var valueArray=[firstNumber,secondNumber];
    return valueArray;
}

function sumElem(value){
    results=0;
    for(i=0;i<2;i++){
        results+=value[i];
    }
    return results;
}
function prodElem(value){
    results=1;
    for(i=0;i<2;i++){
        results=results*value[i];
    }
    return results;
}
function userSum(){
    var valueArray=getElemValue();
    var results=sumElem(valueArray);
    var showUser=document.getElementById("rezultatSuma");
    showUser.innerHTML=results;
}
function userProd(){
    var valueArray=getElemValue();
    var results=prodElem(valueArray);
    var showUser=document.getElementById("rezultatProd");
    showUser.innerHTML=results;
}

console.log(getElemValue());