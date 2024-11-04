let msg =" Hi this is passing msg   ";
// trim method is remove frist and last spaces doesn't middle space remove
console.log(msg.trim());

/* toUPPER CASE METHOD */
console.log(msg.toUpperCase());

/*toLOWER case METHOD  */
console.log(msg.toLowerCase());

/* indexOf method it is return the value of index  or not then return -1 index */
 str ="rohit mohit";
 console.log(str.indexOf("r"));
 console.log(str.indexOf("o"));
 console.log(str.indexOf("y"));

 /* METHOD CHAINNING RULE MEANS TWO METHOD WORK TOGETHER  */
 let chain= "  hellow";
 /* let newchain= chain.trim();
 newchain=newchain.toUpperCase();
 console.log(newchain); */
 newchain=chain.trim().toUpperCase();
 console.log(newchain);

 /* slcie METHOD  it include of substring  */
let str1="IloveCoding";
console.log(str1.slice(5));
console.log(str1.slice(1,4));   // starting index and ending not include
console.log(str1.slice(-13));  // negative indexing is allow

/* replace  replace a new string */
let sg="hello";
console.log(sg.replace("h","H"));
console.log(sg.replace("hello","Kanha"));

/* repeat Method */
let mg="rohit ";
console.log(mg.repeat(2));  // repeat the current value