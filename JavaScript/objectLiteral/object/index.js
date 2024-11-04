function add(){
   console.log(add);
}
// fnc call  
add();
// function assingment
let stand =function walk(){
    console.log;
}
stand();
function sum(a,b,...arg){
   // console.log(a+b);
   let total=0;
   for(let value of arguments){
    total=+value;
   }
   console.log(arguments);
   return a+b;
}
let ans=sum(1,2,6,6,7,8,9,96,5);

//si

function si(p,r,t){
   return (p*r*t)/100;
}
console.log(si);

// getter  and setter value 
let person = {
    name:'rohit',
    age:23,
    class:'mca',

    /* getter method  use as a access the value */
    get fullname(){
     return `${person.name} ${person.age}`;
    },
    /* setter method  use as a set the value */
    set fullname(value){
      let lastName=value.split(' ');
      this.fname=lastName(0);
      this.lname=lastName(1);
    }
}
/* console.log(person);
function fullname(person){
     return (person)`${person.name} ${person.class  }` 
}*/
person.lastName=" ";

try{
   person.fullname=true;
}
catch(e){
   alert(error);
}
console.log(person.fullname);
 