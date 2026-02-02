/*
//qs1
var p=document.querySelector("p");
var btn =document.querySelector("button");
btn.addEventListener("click",function(){
p.textContent = "Hello new text! ";
})
 */

/* 
//qs2
var img1=document.querySelector("#cat");
var img2=document.querySelector("#dog");
document.querySelector("button")
.addEventListener("click",function(e) {
    var src1= img1.src;
    var src2= img2.src;

    //swap
    img1.src = src2;
    img2.src = src1;
});
 */

/* //qs3
var form = document.querySelector( "form" );
var inps = document.querySelectorAll( 'input[type=submit]' );
var h4 = document.querySelector( "h4" );
form.addEventListener( "submit", function ( ev )
{
    ev.preventDefault();
    for ( let i = 0; i < inps.length; i++ )
    {
        if ( inps[ i ].value === '' )
        {
            h4.textContent = "Error,please enter a valid input ";
            h4.style.color = "red";
            break;
        }

    }
} ); */

//qs4
/* var inp = document.querySelector( "input" );
var add = document.querySelector( "#add" );
var remove = document.querySelector( "#rm" );
var ul = document.querySelector( "ul" );
var li;
add.addEventListener( "click", function ()
{
    li=document.createElement( 'li' );
    if ( inp.value.trim() === '' ) { }
    else
    {
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value ="";
    }
 remove.addEventListener("click",function(){
    ul.removeChild(li);
})
} ) */


/* 
//qs5 
var start = document.querySelector( "#st" );
var stop = document.querySelector( "#sp" );
var h4 = document.querySelector( "h4" );
var intv;
start.addEventListener( "click", function ()
{
    var count = 0;
    intv = setInterval( function ()
    {
        h4.textContent = count;
        count++;
    }, 1000 );
} );
stop.addEventListener("click",function(){
    clearInterval(intv);
}) */