/* async function getData() {
    setTimeout(function(){
        console.log("I am inside the set time fnc !");
    },5000);
}
getData(); */
/* async function getData() {
    let response = await fetch('https://en.wikipedia.org/wiki/Janson');
// async call by complete excute
let data= await response.json();
}
/// a-wait==?
// fecth API  
 */
// functon scop  nested fnc
let name="rahul";
function outerfunction(){
    {
        let name="raghav";
    }
   // let name=" rohit";
    function innerfunction(){
        //let name=" deeksha";
        console.log( name);
    }
    innerfunction();
}
outerfunction();