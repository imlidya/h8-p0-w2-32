// Nomor 1 Looping While
console.log("Looping pertama")
var flag = 2;
while(flag < 21) { 
  console.log(flag + ' I love coding');
  flag+= 2;
}
console.log("Looping kedua")
var flag = 20
while(flag>0){
    console.log(flag + ' I will become fullstack developer');
    flag-=2
}

//Nomor 2 Looping For

console.log("Looping pertama")
for(var i=0; i<=20; i++){
    console.log(i + ' I love coding')
}
console.log("Looping kedua")
for(var i=20; i>0; i--){
    console.log(i + ' I will become fullstack developer')
}

//Nomor 3

    for (var i = 1; i <= 100; i++){
        if((i%2) === 0){
            console.log("GENAP");
        }else{
            console.log("GANJIL");
        }
    }

    console.log("");

    for (var i = 1; i <= 100; i+=2){
        if((i%3) === 0){
            console.log(i+" kelipatan 3");
        }else{
            console.log("");
        }
    }

    for (var i = 1; i <= 100; i+=5){
        if((i%6) === 0){
            console.log(i+" kelipatan 6");
        }else{
            console.log("");
        }
    }

    for (var i = 1; i <= 100; i+=9){
        if((i%10) === 0){
            console.log(i+" kelipatan 10");
        }else{
            console.log("");
        }
    }
