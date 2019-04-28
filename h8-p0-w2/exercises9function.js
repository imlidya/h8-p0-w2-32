//1

function shoutOut() {
    return "Halo Function!";
  }
console.log(shoutOut());

//2
function calculateMultyply(num1,num2) {
    return num1*num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultyply(num1,num2);
console.log(hasilPerkalian);

//3

function processSentence(name,age,address,hobby) {
    return 'Nama saya ' + name + ', Umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby;
}

var name = "Agus"
var age = 30;
var address = "jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

