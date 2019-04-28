function angkaPalindrome(num){
    num++;
    var result=[num]
    var flag=false
  
    while(flag===false){
      var strNum=num.toString()
      var reverse=''
      for(var i=strNum.length-1; i>=0; i--){
        reverse += strNum[i]
      } 
      if(strNum===reverse){
        flag=true
      } else {
        flag=false
        
        result.push(num)
      }
    }
    return result
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001