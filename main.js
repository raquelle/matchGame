$(document).ready( function(){

//create a set of elements

//each element has a random color assigned to it that matches only one other element
//give each element an id number to differentiate
//select random number
//assign color based on random number

//when element is clicked on show color assigned
//after two elements have been clicked and they are different show both elements for 3 seconds then flip them back over
//if elements are the same only show the colored side
//every time two elements are clicked a number is increased

//when an element that already has a match is clicked it does nothing


//we are creating a counter for all elements in the array
let arr = ["blue", "green"];
var counter = {};
for (var ix=0; ix < arr.length; ix++) {
    var key = arr[ix];
    counter[key] = 0;
}
var totalCounter = 0;
var card_id = 1;

//we are creating a function to be used later to create our deck of cards
var randomColor = function(colors) {
    var upper = colors.length;
    var num = Math.floor(Math.random()*upper);
    return colors[num];
}

//deal out all pairs
while (totalCounter < (arr.length * 2)) {
    var color = randomColor(arr);

    // determine if the color has a pair
    // if not then set current cell to the color
    if (counter[color] < 2) {
        var cardName = "#card" + card_id.toString();
        $(cardName).css('background-color', color);       
        console.log(color)
        ++totalCounter
        ++card_id
        ++counter[color]
    }  
};


//QUESTION is this setting attempts to null everytime?
var matches = 0;
var remember = null;
var attempts = 0;
var remember2 = null;
var state = 'initial';


//this is only part that runs on click
$('#matchGame').on('click', '.back', function(event) {
  
     //if you can see the second card hide both cards
     if (remember2 !== null){
        remember.css('visibility', 'hidden');
        remember2.css('visibility', 'hidden');
        remember2 = null;
        remember = null;
    }
    //name the front
    var ct = $(event.currentTarget).children('.front');

    //if the current card is visible on click then go back
    if( ct.css('visibility') === 'visible'){
        return;
    }
    
    //card clicked will become visible
    ct.css('visibility', 'visible');

    //if first card is showing remember it is showing
    if (remember === null){
        remember = ct;
        return;
    } 
    //In order to arrive at this place you are on the second card
    //keep track of number of attempts 
    attempts++;


    //Is it a match?
    if (ct.css('background-color') === remember.css('background-color')) {
        matches++;  
        remember = null;
        state = 'match';
        ct.change();   
    }
    //If not a match then you remember the last card
    else{
        remember2 = ct;
    }
    
});

$('.front').on('change', function(event){
    debugger;
    switch (state){
        case 'match':
        alert ("You Matched!"); 
        state = 'attempt';
        break;
    }
    
    // determine if all colors are complete
    // if yes then done
    if (matches >= arr.length) {
        alert ("You Win");
    }

});

})