//this sevral uses
//call apply bind 
// it use to way any object of calling.
// keyword ka mtlb hota hai ki  aisa word jiska koi mtlb ho programing lng m

/* use of this  */
// global scop -window
/* kisi bhi fnc k under code na likhna global  */
/* console.log(this)
//function- window
function abcd(){
    console.log(this)
}
abcd();
//method-object
    var obj={
        name:function(){
            console.log(this);
        }, 
        age:25,
        email:"rohit020899@gmail.com"
    }
    obj.name();
// fnc inside method(es5)- window
var obj2={
      sayRohit:  function () {
            console.log(this.age);
            function child(){
                console.log(this.age);
            }
        },
        age:24
}
  obj2.sayRohit();
// fnc inside method(es6) - object
var obj3={
    sayname: function(){
        const child =()=>{
            console.log(this);
        }
        child();
    }
}
obj3.sayname(); */

// fnc with constructor - blank obj
// eventListinner have this use - that ele jis event lga ho


/// /* 2..-->>  Call ;Apply; and Bind Keyword  */
// any func call krne ka way as a obj ko this man k

// call 
/* const obj4={name:"rohit"}
function abcd(){
    console.log(this)
}
abcd.call();

;
// apply 
const obj5={ name:"rohit",
    age:20,
    contact:232321
};
function ac(){
    console.log(this);
}
ac.apply(obj5,[1,2,3,4]); */
   

// inheritance
/* function makeHumen(){
    this.name=name;
    this.age=age;
} 
 */

// clousre keyword
// it returns same fnc  and use parent fnc variable
/* function counter (){
    var count =0;
    return function(){
        console.log(count);
    }
}
 var ans = counter();
 console.log(ans);
 */


// EVENT DELEGATION= JB APP event listner s kai sare diffr ele k event ko handle kr ske
// event listnner ko parent ke 
var parent=document.querySelector("#parent");
parent.addEventListener("click",function(event){
    if(event.target.id==="play"){
        console.log("play song");
    }
    else if(event.target.id==="pause") {
        console.log("pause song");

    }
   
})

// hofs -higher order functions
// asia koi fnc jo ki ek fnc ko paremeterr m accept karle and /or ek fnc return kr d
/* function abcd(){
    return abcd;
} */
// error handling -try catch
function divide(a,b){
    try{
        if(b==0){
            throw Error("koi gabdab hai");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
divide(12,13);