function targetTerdekat(arr) {
    var distance_o = [];
    var distance_x = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        distance_x.push(i);
      }
      if (arr[i] === 'o') {
        distance_o.push(i);
      }
    }
    
    console.log(distance_x);
    console.log(distance_o);
    if (distance_x.length === 0) { 
      return 0;
    } else {
      if (distance_x[0] < distance_o[0]) { 
        return Math.abs(distance_x[distance_x.length-1] - distance_o[0]);
      } else {
        return Math.abs(distance_o[distance_o.length-1] - distance_x[0]);
      }
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['o', '', 'x', 'o'])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2