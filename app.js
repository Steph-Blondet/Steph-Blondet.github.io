console.log('testing connect four file');

$(function() {

// ****************************************************************************************************************// create a board with 42 squares?
  // write a function that saves the squares in a variable
  // write for loop that generates 42 squares and gives them a click event listener (iterates 42 times?)
  // when the event listener is clicked create function

// create a function that runs every time a square is clicked
  // write if/else statement so clicked squares do not respond to additional clicks

// write an array with all the possible winning conditions
// write a function to check all the winning possibilities
// select the squares
// write a for loop that loops over the winning conditions array

// create a button that resets the game every time that is clicked
  // create a variable that selects the button
  // add an event listener with
// ****************************************************************************************************************

// var winningOptions = [
//   [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]
// ];
//
// var wins = function() {
//   console.log('checking winning conditions');
//   var horizontalWins = document.querySelector('---');
//
//   for (var i = 0; i < winningOptions.length; i++) {
//     winningOptions[i]
//   }
//
//   if (winningOptions === true) {
//
//   }
// }
//
// wins();

// SELECTING ELEMENTS
var $board = $('#board'); // selecting board id to create board




// SWITCH TURNS
var toggle = true;

var $toggleFunction = function() {
  console.log('testing toggle'); // click listener is working
  if (toggle === '#red-token' || toggle === '#black-token') {
    } else if (toggle == true) {
      var $redToken = $('<div>'); // creating a new div that goes below the new board div
      $redToken.attr('id', 'red-token'); // gave attribute of redToken to the new div
      $newBoardDiv.append($redToken); // appending the redToken div to the newBoardDiv (squares)
      $circleDiv.remove('#circle'); // removed white cicle div
    } else {
      var $blackToken = $('<div>'); // creating a new div that goes below the new board div
      $blackToken.attr('id', 'black-token'); // gave attribute of redToken to the new div
      $newBoardDiv.append($blackToken); // appending the redToken div to the newBoardDiv (squares)
      $circleDiv.remove('#circle'); // removed white cicle div
    };
      toggle = !toggle;

    // if (this.classList.contains('equis', 'full') || this.classList.contains('cero', 'full')) {
    //   this.removeEventListener('click', $toggleFunction);
    // }

}



// CREATING CONNECT FOUR BOARD
for (var i = 0; i < 42; i++) { // iterating 42 times
  var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
  $newBoardDiv.addClass('squares'); // adding the class squares to the board div
  $board.append($newBoardDiv); // appending the new div that goes inside the board div

  var $circleDiv = $('<div>'); // creating a new div that goes below the new board div
  $circleDiv.attr('id', 'circle'); // gave attribute of circle to the new div
  $newBoardDiv.append($circleDiv);


  $newBoardDiv.on('click', $toggleFunction); // on click, the square will...

};




// BUTTON / RESET BOARD
// var $clearBoard = function() {
//   var $squares = $('.squares'); // getting class squares
//   for (var i = 0; i < $squares.length; i++) {
//     $squares[i].remove('---', '---');
//   }
// }















});




/////////////////////////////////////////
// *** THOUGHTS AND PRACTICE CODE *** //
///////////////////////////////////////

// for (var i = 0; i < 42; i++) { // iterating 42 times
//   var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
//   $newBoardDiv.addClass('squares'); // adding the class squares to the board div
//   $newBoardDiv.attr('id', 'circle'); // gave attribute of circle to the new div
//   $board.append($newBoardDiv); // appending the new div that goes inside the board div
//   $newBoardDiv.on('click', function(){ // on click, the square will...
//   });


// var $clickButton = $('#clear-board'); // getting element by id
// $clickButton.on('click', function() { // on click, the button will reset the game
//   var $newGame = $(#circle); // getting element by the id of circle
//   // for(var i = 0; i < $newGame.length; i++) {
//   //       $newGame[i].innerHTML = '';
//   //   }
//     console.log('I clicked the clear button');
// })


// var $redToken = $('#circle'); // getting circle id
// $redToken.addClass('red-token'); // adding the red-token class to the circle id


// var $toggleFunction = function() {
//   console.log('testing toggle');
//   if (toggle === '.red-token' || toggle === '.black-token') {
//     } else if (toggle == true) {
//       $circleDiv.text('red text');
//       $newBoardDiv.attr('id', '#red-token');
//       $circleDiv.remove('#circle');
//     } else {
//       $circleDiv.text('black text');
//       $circleDiv.addClass('black-token');
//     };
//       toggle = !toggle;
//
// }
