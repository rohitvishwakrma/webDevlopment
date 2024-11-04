let arr=["red ","blue","white","green ","orange"]
console.log(arr);
/* push method means add the last element in the arr two element are added togther */
arr.push("red","blue");
console.log(arr);
/* pop method meand remove the last element in the arr but two element are not removed together */
arr.pop("red","blue","green");
console.log(arr);
/*  unshift method means add the value in front side and multiple element are add */
arr.unshift("pink","lightgreen","whitelight");
console.log(arr);
/* shift method means removed the frist element of the front but not remove more then ele */
arr.shift("pink","lightgreen");
console.log(arr);
/* IndexOf method means it shows the index of particular element index  but element is not avialble then gives a negative value  */
console.log(arr.indexOf("red"));   // index->>7
console.log(arr.indexOf("black"));  // no index ->>-1
/* incldes methods refers the true or false value means h ya nhi h  */
console.log(arr.includes("RED"));    // false
console.log(arr.includes("red"));   // true
/*  concat() this methid add two (merge ) two array or is jo phle hoga uske phle element aate h */
 let a=["p","q","r"];
 let b=["s","t","u"];
 console.log(a.concat(b));  // first  concat seconed
 console.log(b.concat(a));   // seconed to concat first
 console.log(b.concat(b));  // itself concat
/* reverse() method reverse the sequnce or/ change the order \ serail */
let c=["oyo ","chutiya!"];
console.log(c.reverse(c));
/* slice()  it means part of the index \ iska mtlb vhi chaiye jo us part tk chahiye\ \negative bhi  */
c.slice();
console.log(c);
 /* splice method multple thing work together like  /start/delete/ remove /it work similiar as a slice  */
let friuts=["mango","apple","banana","gova","papaya"];
console.log(friuts.splice());
console.log(friuts.splice(1));   //index 1 include all element
console.log(friuts.splice(0,4)); // 0 to 3 element  remove hoge only remaning element show hoga //remove ele
console.log(friuts.splice(0,3,"carrot","whitepotato","potato"));  // add ele
console.log(friuts);

/* sort() it show the sequence of array into change string first then change  */
let nums=[23,22,45,32,2,4,1,44,40,223];
console.log(nums.sort());
/* copy of the array does not alocate same memory adderes */
let r = []==[];
console.log(r);
