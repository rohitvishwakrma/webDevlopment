// array 
arr=[2,34,55,64,53,54,32,56,34,49];
//console.log(arr);
// add ele
// by print  for loop each element
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// unshift() -->means array ele add in first postion 
arr.unshift(9);
console.log(arr);

// shift () ---> it means remove the first positoin ele
arr.shift(arr[3]);
console.log(arr);

// in array accepted all data type
brr=[85,'rohit',8.6,"true"];
console.log(brr);

// 2d array do not make  to another array it works inside the same array
crr=[[2,3,45,66],[3,56,3,3,3,4]];
console.log(crr);

// // for loop 
// for( let i=0;i<crr.length;i++){
//     console.log(crr[i]);
// }

// forof loop
// for (const ele of crr) {
//     console.log(ele)    
// }

// for each loop 
vrr=[12,34,554,323,234];
vrr.forEach(ele,i => {
    console.log(ele,i);
});