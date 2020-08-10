// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function min(arr) {
    let lowestNum= arr[0]
    let newArray = []
    for(let i=0; i<arr.length;i++) {
      if(arr[i] < lowestNum) {
        lowestNum = arr[i]
      }
    }
    for (let i=arr.length-1; i>=0; i--) {
      arr[i+1] = arr[i]
    }
    arr[0] = lowestNum
    return arr
  }
  console.log(min([2,4,6,8,10]))