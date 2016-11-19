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

var $newBoardDiv = $('.squares'); // selecting new board div with the class squares

var $toggle = true;

// var $redToken = $('<div>'); // creating a new div that goes below the new board div
//   $redToken.attr('id', 'red-token'); // gave attribute of circle to the new div
//
// var $blackToken = $('<div>'); // creating a new div that goes below the new board div
//   $blackToken.attr('id', 'black-token'); // gave attribute of circle to the new div



// SWITCH TURNS
var $toggleFunction = function(div) {
  console.log(div); // click listener is working
  if ($toggle === '#red-token' || $toggle === '#black-token') {
    } else if ($toggle == true) {
      $circleDiv.attr('id', 'red-token'); // gave attribute of redToken to the new div
    } else {
      $circleDiv.attr('id', 'black-token'); // gave attribute of blackToken to the new div
    };
      $toggle = !$toggle;
    // if ($('#red-token') || $('#red-token')) {
    //   $('#red-token').unbind('click', $toggleFunction);
    // }
}


// CREATING CONNECT FOUR BOARD

  for (var i = 0; i < 42; i++) { // iterating 42 times
    var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
    $newBoardDiv.addClass('squares'); // adding the class squares to the board div
    $board.append($newBoardDiv); // appending the new div that goes inside the board div

    var $circleDiv = $('<div>'); // creating a new div that goes below the new board div
      $circleDiv.attr('id', 'circle'); // gave attribute of circle to the new div
      $circleDiv.attr('tile', i);
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

// var $clickButton = $('#clear-board'); // getting element by id
// $clickButton.on('click', function() { // on click, the button will reset the game
//   // var $newGame = $(#circle); // getting element by the id of circle
//   // for(var i = 0; i < $newGame.length; i++) {
//   //       $newGame[i].innerHTML = '';
//   //   }
//     console.log('I clicked the clear button');
// })















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

// var $clearBoard = $('clear-board');
//   $clearBoard.on('click', $createBoard)
//   console.log('clear board was clicked');
//
// // $createBoard();



// var $redToken = $('#circle'); // getting circle id
// $redToken.addClass('red-token'); // adding the red-token class to the circle id

// } else if ($toggle == true) {
//   $circleDiv.remove('#circle');
//   $circleDiv.addClass('.red-token');
// } else {
//   $circleDiv.remove('#circle');
//   $circleDiv.addClass('.black-token');
// };


// var $redToken = $('<div>'); // creating a new div that goes below the new board div
//   $redToken.attr('id', 'red-token'); // gave attribute of redToken to the new div
//   $newBoardDiv.append($redToken); // appending the redToken div to the newBoardDiv (squares)
//
// var $blackToken = $('<div>'); // creating a new div that goes below the new board div
//   $blackToken.attr('id', 'black-token'); // gave attribute of blackToken to the new div
//   $newBoardDiv.append($blackToken); // appending the blackToken div to the newBoardDiv (squares)



// WORKING
// var $toggleFunction = function() {
//   console.log('testing toggle'); // click listener is working
//   if ($toggle === '#red-token' || $toggle === '#black-token') {
//     } else if ($toggle == true) {
//       var $redToken = $('<div>'); // creating a new div that goes below the new board div
//       $redToken.attr('id', 'red-token'); // gave attribute of redToken to the new div
//       $newBoardDiv.append($redToken); // appending the redToken div to the newBoardDiv (squares)
//       $circleDiv.remove('#circle'); // removed white cicle div
//     } else {
//       var $blackToken = $('<div>'); // creating a new div that goes below the new board div
//       $blackToken.attr('id', 'black-token'); // gave attribute of blackToken to the new div
//       $newBoardDiv.append($blackToken); // appending the redToken div to the newBoardDiv (squares)
//       $circleDiv.remove('#circle'); // removed white cicle div
//     };
//       $toggle = !$toggle;
//
//     // if ($('#red-token') || $('#red-token')) {
//     //   $('#red-token').unbind('click', $toggleFunction);
//     // }
//
// }

// TAMBIEN WORKING
// var $toggleFunction = function() {
//   console.log('testing toggle'); // click listener is working
//
//   for (var i = 0; i < 42; i++) {
//     array[i]
//   }
//
//     if ($toggle === '#red-token' || $toggle === '#black-token') {
//       } else if ($toggle == true) {
//         $newBoardDiv.append($redToken);
//         $circleDiv.remove('#circle');
//       } else {
//         $newBoardDiv.append($blackToken);
//         $circleDiv.remove('#circle'); // removed white cicle div
//       };
//         $toggle = !$toggle;
//
//     // if ($('#red-token') || $('#red-token')) {
//     //   $('#red-token').unbind('click', $toggleFunction);
//     // }
//
// }
