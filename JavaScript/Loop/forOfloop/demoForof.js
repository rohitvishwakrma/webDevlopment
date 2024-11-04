/*  it is used to collection of the element --->> means string, arrays element acess */
/* let student=[["rohit",90],["rahul",89],["kanha",79]];
for (let i = 0; i < student.length; i++) {
    console.log(i,student[i])
} */
let fruits=[["mango",80],["guava",90],["graps",99],["banana",70]];
for (fruit of fruits) {
    /* console.log(fruits) */
    for (list of fruit) {
        console.log(fruit,fruits);
    }
}