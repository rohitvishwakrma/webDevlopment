var txtarea = document.querySelector( "textarea" );
var counter = document.querySelector( "#count" );
txtarea.addEventListener( "input", function ()
{
    counter.textContent = txtarea.value.length;
} )