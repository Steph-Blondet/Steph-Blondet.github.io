console.log('testing connect four file');

$(function() {

// SELECTING ELEMENTS
var $board = $('#board'); // selecting board id to create board

var $toggle = true;


// CREATING COLUMNS ARRAYS
var column1 = ["35", "28", "21", "14", "7", "0"];
var column2 = ["36", "29", "22", "15", "8", "1"];
var column3 = ["37", "30", "23", "16", "9", "2"];
var column4 = ["38", "31", "24", "17", "10", "3"];
var column5 = ["39", "32", "25", "18", "11", "4"];
var column6 = ["40", "33", "26", "19", "12", "5"];
var column7 = ["41", "34", "27", "20", "13", "6"];


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


// var checkTileNumber = function() {
//   if ($('tile') === '35' ) {
//     console.log('tile 35');
//   }
// }
// checkTileNumber();

// 1. write the numbers of tiles as strings in the columns arrays from bottom to top
//        ---> if strings don't work try tile and number
// 2. create a function that checks the tile number
  // 3. create a function that checks if the tile is red/black
  // 4. create a function that checks the player's turn



// SWITCH TURNS [X]
var $toggleFunction = function() {
  console.log('testing toggleFunction'); // click listener is working

  if ($toggle == true) { // this will make the red token to start first
      $(this).attr('id', 'red-token'); // gave attribute of redToken to the $circleDiv created below
    } else {
      $(this).attr('id', 'black-token'); // gave attribute of blackToken to $circleDiv created below
    };
      $toggle = !$toggle;

  // a player should not be able to mark a space that has already been played
  if ($('#red-token') || $('#black-token')) {
     $(this).off('click', $toggleFunction);
  }
};


// CREATING CONNECT FOUR BOARD [X]

  for (var i = 0; i < 42; i++) { // iterating 42 times
    var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
      $newBoardDiv.addClass('circle'); // adding the class circle to the new board div
      $newBoardDiv.attr('tile', i); // adding ids to the circles
      $board.append($newBoardDiv); // appending the new board div that goes inside the board div

      $newBoardDiv.on('click', $toggleFunction); // on click, the square will...
  };


// BUTTON / RESET BOARD




var $clearBoard = $('#clear-board'); // grabbing the button
var $redToken = $('#red-token');
  $clearBoard.on('click', function(){
    $('.circle').removeAttr('id');
    console.log('I clicked the clear button'); // button is working
  });




  });


  // var $clearBoard = $('#clear-board'); // grabbing the button
  //   $clearBoard.on('click', $createBoard);
  //   $createBoard();

  // $clearBoard.on('click', function(){
  //   console.log('I clicked the clear button'); // button is working
  // });
//
//   var clearBoard = function() {
//   var board = document.querySelectorAll('.square');
//   for (var i = 0; i < board.length; i++) {
//     board[i].innerText = "";
//     board[i].classList.remove('playerX', 'playerO');
//   }
// }


















// });


//********************* ORIGINAL CODE
// if ($toggle == true) { // this will make the red token to start first
//   var $tokenIds = $('#circles');
//     $(this).attr('id', 'red-token'); // gave attribute of redToken to the $circleDiv created below
//     // var $circleDiv = $('div');
//     // $circleDiv.remove('#circle');
//     $(this).remove('#circle');
//   } else {
//     $(this).attr('id', 'black-token'); // gave attribute of blackToken to $circleDiv created below
//     // var $circleDiv = $('div');
//     // $circleDiv.remove('#circle');
//     $(this).remove('#circle');
//   };
//     $toggle = !$toggle;
//
// }
//
//
// // CREATING CONNECT FOUR BOARD [X]
// for (var i = 0; i < 42; i++) { // iterating 42 times
//   var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
//     $newBoardDiv.addClass('squares'); // adding the class squares to the board div
//     $newBoardDiv.attr('tile', i);
//     $board.append($newBoardDiv); // appending the new div that goes inside the board div
//
//   var $secondDiv = $('<div>'); // creating a new div that goes below the new board div
//     $secondDiv.attr('id', 'circle'); // gave attribute of circle to the new div
//     // $secondDiv.attr('tile', i); // every time the loop runs, add a tile attr with a number from 0-41
//     $newBoardDiv.append($secondDiv); // appending the circle div that goes inside the $newBoardDiv
//
//     $newBoardDiv.on('click', $toggleFunction); // on click, the square will...
//
//
// };





/////////////////////////////////////////
// *** THOUGHTS AND PRACTICE CODE *** //
///////////////////////////////////////

//****************************************************************************************************************
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
//****************************************************************************************************************



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


// if ($('#red-token') || $('#red-token')) {
//   $('#red-token').unbind('click', $toggleFunction);
// }


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


// for (var i = 0; i < column1.length; i++) {
//     console.log((column1.push(i) == 5));
// }


// if (['tile 0', 'tile 7', 'tile 14', 'tile 21', 'tile 28', 'tile 35'] === '#red-token')



////////////////// MY FUNCTIONS!!!! /////////////////////////////

// var $toggleFunction = function(div) {
//   console.log(div); // click listener is working
//   if ($toggle === '#red-token' || $toggle === '#black-token') {
//     } else if ($toggle == true) {
//       $circleDiv.attr('id', 'red-token'); // gave attribute of redToken to the circle div
//     } else {
//       $circleDiv.attr('id', 'black-token'); // gave attribute of blackToken to the circle div
//     };
//       $toggle = !$toggle;
//     // if ($('#red-token') || $('#red-token')) {
//     //   $('#red-token').unbind('click', $toggleFunction);
//     // }
// }

// if ($toggle === '#red-token' || $toggle === '#black-token') {
//     //do nothing//
//   } else if ($toggle == true) {
//     $circleDiv.attr('id', 'red-token'); // gave attribute of redToken to the $circleDiv created below
//   } else {
//     $circleDiv.attr('id', 'black-token'); // gave attribute of blackToken to $circleDiv created below
//   };
//     $toggle = !$toggle;



// // SWITCH TURNS
//   var $toggleFunction = function() {
//     console.log('testing toggleFunction'); // click listener is working
//
//     if ($toggle === 'red-token' || $toggle === 'black-token') {
//         //do nothing//
//       } else if ($toggle == true) {
//         $secondDiv.addClass('red-token'); // gave attribute of redToken to the $circleDiv created below
//       } else {
//         $secondDiv.addClass('black-token'); // gave attribute of blackToken to $circleDiv created below
//       };
//         $toggle = !$toggle;
//
//   }
//
//
// // CREATING CONNECT FOUR BOARD [X]
//     for (var i = 0; i < 42; i++) { // iterating 42 times
//       var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
//         $newBoardDiv.addClass('squares'); // adding the class squares to the board div
//         $board.append($newBoardDiv); // appending the new div that goes inside the board div
//
//       var $secondDiv = $('<div>'); // creating a new div that goes below the new board div
//         $secondDiv.addClass('circle'); // gave attribute of circle to the new div
//         $secondDiv.addClass('tile', i); // every time the loop runs, add a tile attr with a number from 0-41
//         $newBoardDiv.append($secondDiv); // appending the circle div that goes inside the $newBoardDiv
//
//         $newBoardDiv.on('click', $toggleFunction); // on click, the square will...
//     };

//   $clearBoard.on('click', function(){
//     for (var i = 0; i < $redToken.length; i++) {
//       $redToken.remove('#red-token');
//          console.log('I clicked the clear button'); // button is working
//     }
//
// })};
//
// $circleDiv.remove('#circle');




// var $redToken = $('#red-token');
//
// $clearBoard.on('click', function(){
//   for (var i = 0; i < $redToken.length; i++) {
//     $redToken.remove('#red-token');
//        console.log('I clicked the clear button'); // button is working
//   }
// });
