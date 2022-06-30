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
    if (i%5==0) {
        console.log(i);
    }
}
i=50
while (i<=150){             //Varianta cu while
    if (i%5==0) {
        console.log(i);
    }
    i++;
}