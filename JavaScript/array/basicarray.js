/* let student1="aman";
let student2="rohit";
let student3="kanha";
let sdtudent4="sohit"; */

let student =["aman","rohit","sohit","kanha"];
console.log(student);
/* repeat method it means repeat the value multiple time  */
console.log(student[0].repeat(4));
  
/* replace method  it means repalce the value */
let name =" araya ";
 console.log(name.replace("araya","adarsh"));
 
 /* slice method it means the part of the strings */
 let msg ="  My is Rohit kumar vishawkarma ";
 console.log(msg.slice(0,2));
 console.log(msg.slice(8));
 console.log(msg.slice(-4));
 console.log(msg.slice().trim());
/*  Array is a collection of the multiple elements and its use to stored the values */
let ans=["rohit",232,34.6 ,"34$sujoy"];
console.log(ans);
console.log(ans[0]);
console.log(ans.length);
console.log(ans.typeOf);
console.log(ans[0][0]);
console.log(ans.slice(1,-1));
console.log(ans[0][1]);

/* PRACTICE QS */
let months=["january","july","march","august","spetamber"];
console.log(months);
/* after changing   it  */
console.log(months.shift(),months.shift());
 console.log(months);
 console.log(months.unshift("april"),months.unshift("july")); 
 /* here this is represnts length and add frist position values */
 console.log(months);
 