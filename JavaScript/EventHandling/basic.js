
const btn = document.querySelector( "button" );

// evenet trigger are being the change the bcgk color
let currentmode = "Light";
//select body to change the color
const body = document.querySelector( "body" )
btn.addEventListener( "click", () =>
{
    //after event adding  black and light screen
    if ( currentmode === "Light" )
    {
        currentmode = "dark";
        body.classList.add( "dark" )
        body.classList.remove( "light" )

    } else
    {
        currentmode = "Light"
        body.classList.add( "light" )
        body.classList.remove( "dark" )
    }
    console.log( currentmode );

} )