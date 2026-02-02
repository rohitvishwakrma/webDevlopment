/* var home = document.querySelector( "#home" );
var about = document.querySelector( "#about" );
var contact = document.querySelector( "#contact" );

var hometext = document.querySelector( "#hometext" );
var abouttext = document.querySelector( "#abouttext" );
var contacttext = document.querySelector( "#contacttext" );

/* hometext.style.display = "block";
hometext.style.width = "50%"; */

/*home.addEventListener( "click", function ()
{
    hideAll();
    hometext.style.display = "block";
    hometext.style.width = "100%";
    contacttext.style.backgroundcolor= "#66666e";
} );
about.addEventListener( "click", function ()
{
    hideAll();
    abouttext.style.display = "block";
    abouttextstyle.width = "100%";
    contacttext.style.backgroundcolor= "#66666e";
} );
contact.addEventListener( "click", function ()
{
    hideAll();
    contacttext.style.display = "block";
    contacttext.style.width = "100%";
    contacttext.style.backgroundcolor= "#66666e";
} );
function hideAll ()
{
    var h3 = document.querySelectorAll( "h3" );
    h3.forEach(function(h3){
        h3.style.display = "none";
    });
}
 */
var home = document.querySelector( "#home" );
var about = document.querySelector( "#about" );
var contact = document.querySelector( "#contact" );

var hometext = document.querySelector( "#hometext" );
var abouttext = document.querySelector( "#abouttext" );
var contacttext = document.querySelector( "#contacttext" );



home.addEventListener( "click", function ()
{
    hideAll();
    hometext.style.display = "block";
    hometext.style.width = "50%";
} )
about.addEventListener( "click", function ()
{
    hideAll();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
} )
contact.addEventListener( "click", function ()
{
    hideAll();
    contacttext.style.display = "block";
    contacttext.style.width = "50%";
} )

function hideAll ()
{
    var h3 = document.querySelector( "#h3" );
    h3.forEach( function ( h3 )
    {
        h3.style.display = "none";
    } );
}
function hideAll ()
{
    var h3 = document.querySelectorAll( "h3" );
    h3.forEach( function ( h3 ){
        h3.style.display = "none";
    })
}