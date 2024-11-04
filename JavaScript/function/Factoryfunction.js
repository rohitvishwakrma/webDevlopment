// factory function
// function Rectangle1( length,breadth)
// {
//     return rectangle={
//         length:1
//         breadth :2
//         draw ():function()
//     }
//}
//constructor function 
function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}
// call 
let rectangleObject  = new Rectangle(4,6);
console.log(rectangleObject);
// add an element and delete the element
rectangleObject.color='orange'
console.log(rectangleObject);
// delete
delete rectangleObject.color;
console.log(rectangleObject);