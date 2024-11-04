/* function Eventfunctio(){
    console.log("I am event function.");
};
document.addEventListener('click',function () {
        console.log(' I have clicked on the doc')   
});
document.removeEventListener('click',function(){
    console.log("  I have removed.");
} )

const content=document.querySelector("p");
content.addEventListener('click',function(rohit){
    console.log(event);
}); */

/* let links=document.querySelectorAll('a');
let thirdlink=links[2];
 thirdlink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('m shi hu bhai.');
 }); */


/*  let myDiv=document.createElement('div');
 for (let i = 0; i < 100; i++) {
    let mypara= document.createElement('p');
    mypara.textContent('this is my para')+i;
    
    mypara.addEventListener('click',function(){
        mypara.append('textcontent')
    })
    
 } */

    /*  EVETN TARGET PROPERTY */
    let ele=document.querySelector('#wrapper');
    ele.addEventListener('click',function(event){
        console,console.log('span pr click kiya h'+ event.target.text.getContext(key));
    });