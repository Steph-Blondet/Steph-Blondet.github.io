console.log('testing connect four file');

$(function() {

// SELECTING ELEMENTS
  var $board = $('#board'); // grabbing the board id

  var $clearButton = $('#clear-board'); // grapbbing the clear-board id

  var $nextTurn = $('p'); // grabbing p tag from index

  var $toggle = true; // global variable set to true

  var $circleClass = $('.circle'); // grabbing the circle class

  var $tileNmbr; // --?

  var $red, $black; // --?


// SWITCH TURNS [X]
  var $toggleFunction = function() {
    console.log('testing toggleFunction'); // click listener is working

    if ($toggle) {
        $(this).attr('id', 'red-token'); // gave attribute of redToken to the $newBoardDiv created below
        $nextTurn.text("It's Black's turn"); // when red token is added to the div, the p tag will change to black's turn
      } else {
        $(this).attr('id', 'black-token'); // gave attribute of blackToken to $newBoardDiv created below
        $nextTurn.text("It's Red's turn"); // when black token is added to the div, the p tag will change to red's turn
      };
        $toggle = !$toggle; // alternates the turns between red and black

      // a player should not be able to mark a space that has already been played
      if ($('#red-token') || $('#black-token')) {
        $(this).off('click', $toggleFunction); // turning off the toggle function so users can't click again
      }

    };


  // MOUSEOVER
  // var $columnMouseover = function() {
  //   // var $circleClass = $('.circle');
  //
  //   var $
  //
  //   $circleClass.mouseover(function() {
  //     $circleClass.css('background', 'yellow');
  //   })
  // };
  // $columnMouseover();



// CREATING COLUMNS ARRAYS  ---?
    var column1 = ["35", "28", "21", "14", "7", 0];
    var column2 = ["36", "29", "22", "15", "8", "1"];
    var column3 = ["37", "30", "23", "16", "9", "2"];
    var column4 = ["38", "31", "24", "17", "10", "3"];
    var column5 = ["39", "32", "25", "18", "11", "4"];
    var column6 = ["40", "33", "26", "19", "12", "5"];
    var column7 = ["41", "34", "27", "20", "13", "6"];

    // WINNING TILES ---?
    var $winning = [
      [35, 36, 37, 38] , [36, 37, 38, 39]
    ];


    if (0 === $('#red-token')) {
      console.log('testing 0');
    };  // ---> not working ???


// WINNING CONDITIONS ---?

// var $checkWin = function() {
// 	$tileNmbr++;
// 	var $circleClass = $('.circle');
//
// 	if ($checkTiles($red)) {
// 		for (var i=0; i < $circleClass.length; i++) {
// 			$circleClass[i].text("red won!");
// 		}
// 	} else if ($checkTiles($black)) {
// 		for (var j=0; j < $circleClass.length; j++) {
// 			$circleClass.text("black won!");
// 		}
// 	} else if ($tileNmbr == 42) {
// 		$board.text("tie!");
// 	}
// }



// CHECK TILES ---?

// var $checkTiles = function ($tokenPositions) {
//   for (var i = 0; i < $winning.length; i++) {
//     var $wins = 0;
//     for (var j = 0; j < $winning[i].length; j++) {
//       for (var k = 0; k < $tokenPositions.length; k++) {
//         if ($tokenPositions[i][j] == $tokenPositions[k]) {
//           $wins++;
//         }
//       }
//     }
//     if (wins == 3) {
//       return true
//     }
//   }
//   return false
// };


// CREATING CONNECT FOUR BOARD [X]
  for (var i = 0; i < 42; i++) { // iterating 42 times
    var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
      $newBoardDiv.addClass('circle'); // adding the class circle to the new board div
      $newBoardDiv.attr('tile', i); // adding ids to the circles
      $board.append($newBoardDiv); // appending the new board div that goes inside the board div

      $newBoardDiv.on('click', $toggleFunction); // on click, the square will...

};


// BUTTON / RESET BOARD [X]
  $clearButton.on('click', function(){

    var $circleClass = $('.circle'); // grabbing the circle class

    for (var i = 0; i < $circleClass.length; i++) {
      $circleClass.removeAttr('id'); // when the $clearButton is clicked, it will remove the id red-token or black-token
      toggle = true;
      $circleClass.on('click', $toggleFunction);

      $nextTurn.text("It's Red's turn"); // when the clear button is clicked, the p tag will show that it is red's turn
    }
  });




});//---> end of code, do not change!





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

// 1. write the numbers of tiles as strings in the columns arrays from bottom to top
//        ---> if strings don't work try tile and number
// 2. create a function that checks the tile number
  // 3. create a function that checks if the tile is red/black
  // 4. create a function that checks the player's turn



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
// if ($toggle === '#red-token' || $toggle === '#black-token') {
//   //do nothing
// } else if ($toggle == true) { // this will make the red token to start first
//     $(this).attr('id', 'red-token'); // gave attribute of redToken to the $newBoardDiv created below
//     $nextTurn.text("It's Black's turn"); // when red token is added to the div, the p tag will change to black's turn
//   } else {
//     $(this).attr('id', 'black-token'); // gave attribute of blackToken to $newBoardDiv created below
//     $nextTurn.text("It's Red's turn"); // when black token is added to the div, the p tag will change to red's turn
//   };
//     $toggle = !$toggle; // alternates the turns between red and black
//
//   // a player should not be able to mark a space that has already been played
//   if ($('#red-token') || $('#black-token')) {
//     $(this).off('click', $toggleFunction); // turning off the toggle function so users can't click again
//   }
//
// };

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




//// TRY
// var $winningOptions = function(){
//   if ([ column[0], column[1], column[2], column[3], column[4], column[5] ] === $('#red-token')) {
//     console.log('testing win');
//   };
//
//   console.log($winningOptions);

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


// $clearBoard.on('click', function(){
//   $('.circle').removeAttr('id');
//   console.log('I clicked the clear button'); // button is working
//
//   $clearBoard.on('click', $createBoard); // on click, the square will...
//
// });
// // $createBoard();


// MY CODE
// var $toggleFunction = function() {
//   console.log('testing toggleFunction'); // click listener is working
//
//   if ($toggle) { // this will make the red token to start first
//       $(this).attr('id', 'red-token'); // gave attribute of redToken to the $newBoardDiv created below
//       $nextTurn.text("It's Black's turn"); // when red token is added to the div, the p tag will change to black's turn
//     } else {
//       $(this).attr('id', 'black-token'); // gave attribute of blackToken to $newBoardDiv created below
//       $nextTurn.text("It's Red's turn"); // when black token is added to the div, the p tag will change to red's turn
//     };
//       $toggle = !$toggle; // alternates the turns between red and black
//
//   // a player should not be able to mark a space that has already been played
//   if ($('#red-token') || $('#black-token')) {
//      $(this).off('click', $toggleFunction); // turning off the toggle function so users can't click again
//   }
//
// };
