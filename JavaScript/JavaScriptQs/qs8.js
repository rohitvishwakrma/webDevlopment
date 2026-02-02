var data = [
    { name: 'people', src: 'https://images.unsplash.com/photo-1731318800748-fe0b4073fe23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D' },
    { name: '2025 ', src: 'https://images.unsplash.com/photo-1730829807423-83b045bd6cfd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    {
        name: 'device', src: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D'
    },
    {
        name: 'room', src: 'https://images.unsplash.com/photo-1730982045412-326c81810ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzV8fHxlbnwwfHx8fHw%3D'
    },
    {
        name: 'Dogy', src: 'https://plus.unsplash.com/premium_photo-1734203007981-0cfdae356886?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjN8fHxlbnwwfHx8fHw%3D'
    }
];
var pers = "";
data.forEach( function ( elem )
{
    pers += `<div class="person">
                    <div id="img">
                        <img src="${ elem.src }" alt="">
                    </div>
                    <h4>${ elem.name }</h4>
                </div>`;
} );
var person = document.querySelector( ".people" ).innerHTML = pers;
var input = document.querySelector( "input" );
input.addEventListener( "input", function ()
{
    var matching = data.filter( function ( e )
    {
        return e.name.startsWith( input.value );
    } )
    var newpers = "";
    matching.forEach( function ( elem )
    {
        newpers += `<div class="person">
                    <div id="img">
                        <img src="${ elem.src }" alt="">
                    </div>
                    <h4>${ elem.name }</h4>
                </div>`
    } );
    document.querySelector( ".people" ).innerHTML = newpers;
} )