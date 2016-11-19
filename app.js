console.log('testing connect four file');

$(function() {

// create a board with 42 squares?
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

// CREATING CONNECT FOUR BOARD
var $board = $('#board'); // selecting board id to create board

for (var i = 0; i < 42; i++) { // iterating 42 times
  var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
  $newBoardDiv.addClass('.squares'); // adding the class squares to the board div
  $board.append($newBoardDiv); // appending the new div that goes inside the board div
  $newBoardDiv.on('click', function(){

  });
};















});
