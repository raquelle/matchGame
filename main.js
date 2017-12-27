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

let arr = ["blue", "green"];
var counter = {};
for (var ix=0; ix < arr.length; ix++) {
    var key = arr[ix];
    counter[key] = 0;
}
var totalCounter = 0;
var card_id = 1;

var randomColor = function(colors) {
    var upper = colors.length;
    var num = Math.floor(Math.random()*upper);
    return colors[num];
}

while (totalCounter < (arr.length * 2)) {
    var color = randomColor(arr);

    // determine if the color is complete
    // if not then set current cell to the color
    if (counter[color] < 2) {
        var cardName = "#card" + card_id.toString();
        $(cardName).css('background-color', color);       
        console.log(color)
        ++totalCounter
        ++card_id
        ++counter[color]
    }

    // determine if all colors are complete
    // if yes then done

    
};

var attempts = 0;
var matches = 0;


$('#matchGame').on('click', '.front', function(event) {
    if (matches < arr.length) {
        alert ("Keep Trying");
    }
    else{
        alert ("You Win");
    }
    
});


})