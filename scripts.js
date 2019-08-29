$(document).ready(onREady);
function onREady(){
    console.log('hello from jquery');
    
    //.remove removes anything you don't want without going into the html
    $('#pizzaPrices').remove();

    //.children pulls anything in the div element and .addClass is preferred way if manipulating dom
    //in example below 'bold' is already in css 'This needs to be added to target it
    $('ul').children().addClass('boldThis');

    //getters and setters
    //.text() empty parenthesis will pull from the pizza value when logged out i.e below
    let val = $('#pizzeriaName').text(); //getter
    console.log('this is val:', val);
    
    $('#pizzeriaName').text(`Casie's Place`); //setter, when parenthesis are filled it will replace old text, use flicker ``

    //using .on because .click can be restricting the anoyn fucntion in the parenthesis helps 'handleclick' from not firing off right away when clicked
    $('#orderBtn').on('click',function(){
        handleClick();
    })
//header because it exist, secretbtn doesnt
        $('header').on('click','#secretBtn',function(){
            secretFunction();
    })
  

    }
//writing function outside  so if needed to access the handleclick any functions can handle it

function handleClick() {
    console.log('clickadiclack');
    $('#orderBtn').toggleClass('updateOrderBtn');//toggleclass when updating does not need a dot.targets the class and updates it temp. 'updateOrderBtn' is in css/html, if there is remove, if there isnt add
    $('header').append(`<button id='secretBtn'> Secret button </button>`)
}

function secretFunction(){
    alert('secret');
    $('#secretBtn').remove();
}