// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, val) {
    for(var i = arr.length-1; i >= 0; i--) {
        arr[i+1] = arr[i]
    }
    arr[0] = val;
}
var testArr = [1,3,5,7];
pushFront(testArr, 9);
console.log(testArr)
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
	const val = arr[0];
	for(let i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
}
var testArr = [1,3,5,7];
console.log(testArr)

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function instertAt(arr, idx, value) {
    for (let i=0; i<arr.length; i++) {
      if (i === idx) {
        arr[i] = value
      }
    }
    return arr
  }

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, idx) {
    // shift array values right from idx
	toRemove = arr[idx];
	for(let i = idx; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return toRemove;
}

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
function removeDupesUnnested(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i] !== arr[i+1])
			newArr.push(arr[i])
	}
	return newArr;
}