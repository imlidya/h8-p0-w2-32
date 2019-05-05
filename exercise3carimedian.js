// for(var i=0; i<arr.length; i++){
//     if(arr.length%2===1){
//       var median = arr[Math.floor(arr.length/2)]
//     } else if(arr.length%2===0){
//       var akg1 = arr[arr.length/2-1]
//       var akg2 = arr[(arr.length/2)]
//       var median = [akg1+akg2]/2
//     }
//   }
//   return median

function cariMedian(arr) {
  // you can only write your code here!
  var median = 0
  for(var i=0; i<arr.length; i++){
      if(arr.length%2===1){
          median = arr[Math.floor(arr.length/2)]
        //   console.log(median) 
      } else if(arr.length%2===0){
          var angka1 = arr[arr.length/2-1]
          var angka2 = arr[(arr.length/2)]
          median = [angka1 + angka2]/2
      }
  }
  return median
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5