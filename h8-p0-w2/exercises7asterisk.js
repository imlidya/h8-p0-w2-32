//Nomor 1
var  rows1 = 5
for(var i=rows1; i>0; i--){
    console.log("*")
}

//Nomor 2

var rows2 = 5
for(var i=0; i<rows2; i++){
    var str = ''
    for(var j=0; j<rows2; j++){
        str+= "*"
    }
    console.log(str)
}

//Nomor 3

var rows3 = 5;
for(var i = 0; i < rows3; i++){
  var str = "";
  for (var j = i; j >= 0 ; j--){
    str += "*";
  }
  console.log(str);
}

function makeLine(length) {
  var str = "";
  for (var j = 1; j <= length; j++) {
    str += "*"
  }
 return str + "\n";
}

function buildTriangle(width){
  var triangle=""; 
  for (var i=1; i<=width; i++){
    triangle += (makeLine(i));
  }
  return triangle;
}
buildTriangle(5); 
console.log(buildTriangle(5));

