var prg = document.querySelector( ".progress" );
var count = 0;
var h3 = document.querySelector( "h3" );
var stopSet = setInterval( function ()
{
    if ( count === 100 )
    {
        h3.style.opacity = 1;
        h3.style.textAlign = "center";
        h3.style.color = "red";
        clearInterval( stopSet )
    }
    count++;
    prg.style.width = count + "%";
}, 100);