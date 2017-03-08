console.log('testing connect four file');

$(function() {

// SELECTING ELEMENTS
  var $board = $('#board'); // grabbing the board id

  var $clearButton = $('#clear-board'); // grabbing the clear-board id

  var $nextTurn = $('p'); // grabbing p tag from the html

  var toggle = true; // global variable set to true

  var $circleClass = $('.circle'); // grabbing the circle class


// 3. SWITCH TURNS [X]
  var toggleFunction = function(column) {
    console.log('testing toggleFunction'); // click listener is working

    if (toggle) {
      $(column).addClass('teal-token'); // if toggle is true, it will add the class of teal-token to the $newBoardDiv created below
      $(column).removeClass('shadow'); // removing the shadow class
      $nextTurn.text("It's Blue's turn"); // when teal-token is added to the div, the p tag will change to blue's turn
      $nextTurn.css('color', '#0054A6'); // changing the color of the p tag to blue
    } else {
      $(column).addClass('blue-token'); // if toggle is false, it will add the class of blue-token to the $newBoardDiv created below
      $(column).removeClass('shadow'); // removing the shadow class
      $nextTurn.text("It's Teal's turn"); // when blue-token is added to the div, the p tag will change to teal's turn
      $nextTurn.css('color', '#1cbbba'); // changing the color of the p tag to teal
    };

      toggle = !toggle; // alternates the turns between teal and blue

      checkingWins(); // calls the checkingWins function to see who has won

  };// --> closing toggleFunction function



// 1. CREATING CONNECT FOUR BOARD [X]
  var createBoard = function() {
    for (var i = 0; i < 42; i++) { // I want to create 42 white circles that when clicked will change to teal/blue
      var $newBoardDiv = $('<div>'); // creating a new div that goes below the div board
        $newBoardDiv.addClass('circle'); // adding the class circle to the new board div
        $newBoardDiv.addClass('shadow'); // adding the class shadow to the new board div
        $newBoardDiv.attr('id', i); // adding ids with numbers to the circles
        $board.append($newBoardDiv); // appending the $newBoardDiv that goes inside the board div
      };
  }; // --> closing createBoard function

  createBoard(); // calling createBoard to create the board when the page loads



// 2. MAKING THE PLAY HERE BUTTONS CLICKABLE [X]
// creating arrays for the columns
  var column1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  var column2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  var column3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  var column4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  var column5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  var column6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
  var column7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];


// grabbing the 'play here' buttons from the html
  var $button1Id = $('#button1');
  var $button2Id = $('#button2');
  var $button3Id = $('#button3');
  var $button4Id = $('#button4');
  var $button5Id = $('#button5');
  var $button6Id = $('#button6');
  var $button7Id = $('#button7');


// creating a function to make the 'play here' buttons clickable
  var clickButtons = function () {

    $button1Id.on('click', function(){ // when I click on this button, the for loop will run
      for (var i = 0; i < column1.length; i++) {
        if ($(column1[i]).hasClass('teal-token') || column1[i].hasClass('blue-token')) { // if it has a teal or blue token, do nothing
        } else { // else, run the toggleFunction which will switch from teal/blue token
          toggleFunction(column1[i]); // this makes the token start teal because toggle is set to true
          break; // this will stop the column to be filled out completely
        }
      }
    }); // --> $button1Id click function ends

    $button2Id.on('click', function(){
      for (var i = 0; i < column2.length; i++) {
        if (column2[i].hasClass('teal-token') || column2[i].hasClass('blue-token')) {
        } else {
          toggleFunction(column2[i]);
          break;
        }
      }
    }); // --> $button2Id click function ends

    $button3Id.on('click', function(){
      for (var i = 0; i < column3.length; i++) {
        if (column3[i].hasClass('teal-token') || column3[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column3[i]);
          break;
        }
      }
    }); // --> $button3Id click function ends

    $button4Id.on('click', function(){
      for (var i = 0; i < column4.length; i++) {
        if (column4[i].hasClass('teal-token') || column4[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column4[i]);
          break;
        }
      }
    }); // --> $button4Id click function ends

    $button5Id.on('click', function(){
      for (var i = 0; i < column5.length; i++) {
        if (column5[i].hasClass('teal-token') || column5[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column5[i]);
          break;
        }
      }
    }); // --> $button5Id click function ends

    $button6Id.on('click', function(){
      for (var i = 0; i < column6.length; i++) {
        if (column6[i].hasClass('teal-token') || column6[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column6[i]);
          break;
        }
      }
    }); // --> $button6Id click function ends

    $button7Id.on('click', function(){
      for (var i = 0; i < column7.length; i++) {
        if (column7[i].hasClass('teal-token') || column7[i].hasClass('blue-token')) {
          console.log('space is taken');
        } else {
          toggleFunction(column7[i]);
          break;
        }
      }
    }); // --> $button7Id click function ends

  }; // --> clickButtons function ends

  clickButtons(); // calling the clickButtons function so the user can click the 'play here' buttons when the page loads



// 4. WINNING TIMEEEEEEEEEEE [X]
//array with all the winning conditions
var winningConditions = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4 ,5], [3, 4, 5, 6],
[7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [14, 15, 16, 17],
[15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], [22, 23, 24, 25],
[23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33],
[31, 32, 33, 34], [$('#35'), $('#36'), $('#37'), $('#38')], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
[0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29],
[15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24],
[10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
[5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34],
[20, 27, 34, 41], [3, 9, 15, 21], [4, 10, 16, 22], [10, 16, 22, 28], [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [13, 19, 25, 31], [19, 25, 31, 37], [20, 26, 32, 38], [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [3, 11, 19, 27]];

//function that iterates over the winningConditions array
var checkingWins = function(tokenColor) {
    for (var i = 0; i < winningConditions.length; i++) {
        var matches = 0;
        for (var j = 0; j < winningConditions[i]; j++) {
            for (var k = 0; k < tokenColor; k++) {
                if (winningConditions[i][j] == tokenColor[k]) {
                    matches ++;
                }
            }
        }
    }
    if (matches == 4) {
      return true;
    }
    return false;
};

//function that checks who won
var checkWinner = function() {
    var reset = $('#clear-board');
    reset.on('click', resetBoard);

    if (checkingWins(teal) == true) {
        $nextTurn.text("Teal Wins!");
        $nextTurn.css('color', 'white');
        $nextTurn.addClass('teal-wins');
        $board.append(reset);

    } else if (checkingWins(blue) == true) {
        $nextTurn.text("Teal Wins!");
        $nextTurn.css('color', 'white');
        $nextTurn.addClass('blue-wins');
        $board.append(reset);

    }
    // else if (turn == 42) {
    //     gameBoard.html('<h1>DRAW</h1>');
    //     gameBoard.append(reset);
    // }
    // var reset = $('button');
    // reset.on('click', resetGame);
}


// 5. CLEAR BOARD [X]
 $clearButton.on('click', function() {
   $board.empty(); // this will reset the board after I click the clearButton and will stop it from creating 42 circles again
   createBoard(); // this will run the createBoard again
   $nextTurn.remove('p'); // removing the p tag after the new game button is clicked.
 }); // --> end clear button function




});//---> end of code, do not change!




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
  // 3. create a function that checks if the tile is teal/blue
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


// if ($('#teal-token') || $('#teal-token')) {
//   $('#teal-token').unbind('click', $toggleFunction);
// }


// var $tealToken = $('#circle'); // getting circle id
// $tealToken.addClass('teal-token'); // adding the teal-token class to the circle id

// } else if ($toggle == true) {
//   $circleDiv.remove('#circle');
//   $circleDiv.addClass('.teal-token');
// } else {
//   $circleDiv.remove('#circle');
//   $circleDiv.addClass('.blue-token');
// };


// var $tealToken = $('<div>'); // creating a new div that goes below the new board div
//   $tealToken.attr('id', 'teal-token'); // gave attribute of tealToken to the new div
//   $newBoardDiv.append($tealToken); // appending the tealToken div to the newBoardDiv (squares)
//
// var $blueToken = $('<div>'); // creating a new div that goes below the new board div
//   $blueToken.attr('id', 'blue-token'); // gave attribute of blueToken to the new div
//   $newBoardDiv.append($blueToken); // appending the blueToken div to the newBoardDiv (squares)


// WORKING
// if ($toggle === '#teal-token' || $toggle === '#blue-token') {
//   //do nothing
// } else if ($toggle == true) { // this will make the teal token to start first
//     $(this).attr('id', 'teal-token'); // gave attribute of tealToken to the $newBoardDiv created below
//     $nextTurn.text("It's blue's turn"); // when teal token is added to the div, the p tag will change to blue's turn
//   } else {
//     $(this).attr('id', 'blue-token'); // gave attribute of blueToken to $newBoardDiv created below
//     $nextTurn.text("It's teal's turn"); // when blue token is added to the div, the p tag will change to teal's turn
//   };
//     $toggle = !$toggle; // alternates the turns between teal and blue
//
//   // a player should not be able to mark a space that has already been played
//   if ($('#teal-token') || $('#blue-token')) {
//     $(this).off('click', $toggleFunction); // turning off the toggle function so users can't click again
//   }
//
// };

// for (var i = 0; i < column1.length; i++) {
//     console.log((column1.push(i) == 5));
// }


// if (['tile 0', 'tile 7', 'tile 14', 'tile 21', 'tile 28', 'tile 35'] === '#teal-token')



////////////////// MY FUNCTIONS!!!! /////////////////////////////

// var $toggleFunction = function(div) {
//   console.log(div); // click listener is working
//   if ($toggle === '#teal-token' || $toggle === '#blue-token') {
//     } else if ($toggle == true) {
//       $circleDiv.attr('id', 'teal-token'); // gave attribute of tealToken to the circle div
//     } else {
//       $circleDiv.attr('id', 'blue-token'); // gave attribute of blueToken to the circle div
//     };
//       $toggle = !$toggle;
//     // if ($('#teal-token') || $('#teal-token')) {
//     //   $('#teal-token').unbind('click', $toggleFunction);
//     // }
// }

// if ($toggle === '#teal-token' || $toggle === '#blue-token') {
//     //do nothing//
//   } else if ($toggle == true) {
//     $circleDiv.attr('id', 'teal-token'); // gave attribute of tealToken to the $circleDiv created below
//   } else {
//     $circleDiv.attr('id', 'blue-token'); // gave attribute of blueToken to $circleDiv created below
//   };
//     $toggle = !$toggle;



// // SWITCH TURNS
//   var $toggleFunction = function() {
//     console.log('testing toggleFunction'); // click listener is working
//
//     if ($toggle === 'teal-token' || $toggle === 'blue-token') {
//         //do nothing//
//       } else if ($toggle == true) {
//         $secondDiv.addClass('teal-token'); // gave attribute of tealToken to the $circleDiv created below
//       } else {
//         $secondDiv.addClass('blue-token'); // gave attribute of blueToken to $circleDiv created below
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
//     for (var i = 0; i < $tealToken.length; i++) {
//       $tealToken.remove('#teal-token');
//          console.log('I clicked the clear button'); // button is working
//     }
//
// })};
//
// $circleDiv.remove('#circle');


// var $tealToken = $('#teal-token');
//
// $clearBoard.on('click', function(){
//   for (var i = 0; i < $tealToken.length; i++) {
//     $tealToken.remove('#teal-token');
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
//   if ([ column[0], column[1], column[2], column[3], column[4], column[5] ] === $('#teal-token')) {
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
//   if ($toggle) { // this will make the teal token to start first
//       $(this).attr('id', 'teal-token'); // gave attribute of tealToken to the $newBoardDiv created below
//       $nextTurn.text("It's blue's turn"); // when teal token is added to the div, the p tag will change to blue's turn
//     } else {
//       $(this).attr('id', 'blue-token'); // gave attribute of blueToken to $newBoardDiv created below
//       $nextTurn.text("It's teal's turn"); // when blue token is added to the div, the p tag will change to teal's turn
//     };
//       $toggle = !$toggle; // alternates the turns between teal and blue
//
//   // a player should not be able to mark a space that has already been played
//   if ($('#teal-token') || $('#blue-token')) {
//      $(this).off('click', $toggleFunction); // turning off the toggle function so users can't click again
//   }
//
// };



/// KEEP WORKING ON THIS AFTER I FIGURE OUT THE CLEAR BUTTON PROBLEM
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


// // CREATING COLUMNS ARRAYS  ---?
//     var column1 = ["35", "28", "21", "14", "7", 0];
//     var column2 = ["36", "29", "22", "15", "8", "1"];
//     var column3 = ["37", "30", "23", "16", "9", "2"];
//     var column4 = ["38", "31", "24", "17", "10", "3"];
//     var column5 = ["39", "32", "25", "18", "11", "4"];
//     var column6 = ["40", "33", "26", "19", "12", "5"];
//     var column7 = ["41", "34", "27", "20", "13", "6"];
//
//     // WINNING TILES ---?
//     var $winning = [
//       [35, 36, 37, 38] , [35, 28, 21, 14], [35, 29, 23, 17]
//     ];
//
//
//     if (0 === $('#teal-token')) {
//       console.log('testing 0');
//     };  // ---> not working - why?!?!?


// WINNING CONDITIONS ---?

// var $checkWin = function() {
// 	$tileNmbr++;
// 	var $circleClass = $('.circle');
//
// 	if ($checkTiles($teal)) {
// 		for (var i=0; i < $circleClass.length; i++) {
// 			$circleClass[i].text("teal won!");
// 		}
// 	} else if ($checkTiles($blue)) {
// 		for (var j=0; j < $circleClass.length; j++) {
// 			$circleClass.text("blue won!");
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

    // var clearBoard = function() {
    //
    //   var $newBoardDiv = $('div');
    //
    //     $newBoardDiv.children(toggleFunction);
    //     console.log($newBoardDiv);
    //     toggle = true;
    //     $newBoardDiv.removeAttr('id'); // when the clear board is clicked, it will remove the id teal-token or blue-token
    //
    //   };

    // var $newBoardDiv = $('div');
    // $newBoardDiv.off('click', toggleFunction);


// CREATING COLUMNS ARRAYS
  //  var column1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  //  var column2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  //  var column3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  //  var column4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  //  var column5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  //  var column6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
  //  var column7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];
  // console.log(column1[4]); // I wrote the array correctly! :)

  // var checking = function (){
  //   for (var i = 0; i < column1.length; i++) {
  //     array[i]
  //   }
// };


// var accessingObjects = function() {
//   for (var i = 0; i < buttonColumns.button1.length; i++) {
//     console.log(buttonColumns.button1[i]); // printing every element in the button1 key
//
//
//   }
// };
//
// accessingObjects(); // calling the function



// if ($button1Id == $('.circle')) {
// console.log('testing');
// }


// PLAY HERE BUTTON
// var buttonColumns = {
//   button1: [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')],
//   button2: [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')],
//   button3: [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')],
//   button4: [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')],
//   button5: [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')],
//   button6: [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')],
//   button7: [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')]
// }
// console.log(buttonColumns.button1[0]); // this is working




//    else if (!column1[i].hasClass('teal-token')) {
//    toggle = false;
//    toggleFunction(column1[i]);
//    break;
//  }


//  else if (column1[i].hasClass('teal-token') && column1[i].hasClass('blue-token')) {
//    toggleFunction(column1[i]);
//   }


//  else if (!column1[i].hasClass('blue-token')) {
//    toggle = true;
//  }
//  else if (('.teal-token') || ('.blue-token')){
//      toggle = true; // this makes the token blue
//   }



// $button1Id.on('click', function(){
//
//   for (var i = 0; i < column1.length; i++) {
//    if (column1[i].hasClass('circle')) {
//       if (!column1[i].hasClass('teal-token')) {
//         toggleFunction(column1[i]); // this makes the token teal
//         break; // this will stop the column to be filled out completely
//       } // --> if teal ends
//
//        toggle = !toggle; // alternates the turns between teal and blue
//      } // --> if circle ends
//    } // --> for loop ends
// }); // --> function ends


// // a player should not be able to mark a space that has already been played
// if ($('.teal-token') || $('.blue-token')) {
//   $(this).off('click', toggleFunction); // turning off the toggle function so users can't click on the same token again
// };


// USE THIS! THIS IS WORKING!
// // GRABBING PLAY HERE BUTTONS FROM THE HTML
//   var $button1Id = $('#button1');
//   var $button2Id = $('#button2');
//   var $button3Id = $('#button3');
//   var $button4Id = $('#button4');
//   var $button5Id = $('#button5');
//   var $button6Id = $('#button6');
//   var $button7Id = $('#button7');
//    console.log($button1Id); // checked all the buttonIds and they work!
//
// // click buttons is putting a color in an empty space.
// var clickButtons = function () {
//   $button1Id.on('click', function(){
//     for (var i = 0; i < column1.length; i++) {
//       if (column1[i].hasClass('teal-token') || column1[i].hasClass('blue-token')) {
//         console.log('space is taken');
//       } else {
//         toggleFunction(column1[i]); // this makes the token teal
//         break; // this will stop the column to be filled out completely
//       }
//     }
//   }); // --> click function ends
// }; // --> function ends

// working too
// // CREATING COLUMNS ARRAYS
//   var column1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
//   var column2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
//   var column3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
//   var column4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
//   var column5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
//   var column6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
//   var column7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];
//   console.log(column1[2]); // I wrote the array correctly! :)
//
// // GRABBING PLAY HERE BUTTONS FROM THE HTML
//   var $button1Id = $('#button1');
//   var $button2Id = $('#button2');
//   var $button3Id = $('#button3');
//   var $button4Id = $('#button4');
//   var $button5Id = $('#button5');
//   var $button6Id = $('#button6');
//   var $button7Id = $('#button7');
//    console.log($button1Id); // checked all the buttonIds and they work!
//
// // click buttons is putting a color in an empty space.
// var clickButtons = function () {
//   $button1Id.on('click', function(){
//     for (var i = 0; i < column1.length; i++) {
//       if (column1[i].hasClass('teal-token') || column1[i].hasClass('blue-token')) {
//         console.log('space is taken');
//       } else {
//         toggleFunction(column1[i]); // this makes the token teal
//         break; // this will stop the column to be filled out completely
//       }
//     }
//   }); // --> click function ends
//
//   $button2Id.on('click', function(){
//     for (var i = 0; i < column2.length; i++) {
//       if (column2[i].hasClass('teal-token') || column1[i].hasClass('blue-token')) {
//         console.log('space is taken');
//       } else {
//         toggleFunction(column2[i]); // this makes the token teal
//         break; // this will stop the column to be filled out completely
//       }
//     }
//   }); // --> click function ends
//
// }; // --> function ends
//
// clickButtons();

// --> if button1id is clicked go to #35 and check if it only has the class circle, if so add the teal token, else add the blue token. if button1id is clicked again, go to #28 and check if it only has the class circle, if so add the teal token, else add the blue token.

  // $button2Id.on('click', function(){
  //   // for (var i = 0; i < column2.length; i++) {
  //   //   if (!column2[i].hasClass('teal-token')) {
  //   //   toggleFunction(column2[i]);
  //   //   break;
  //   //   }
  //   // };
  //   console.log('I clicked button2');
  // });
  //
  // $button3Id.on('click', function(){
  //   console.log('I clicked button3');
  // });
  //
  // $button4Id.on('click', function(){
  //   console.log('I clicked button4');
  // });
  //
  // $button5Id.on('click', function(){
  //   console.log('I clicked button5');
  // });
  //
  // $button6Id.on('click', function(){
  //   console.log('I clicked button6');
  // });
  //
  // $button7Id.on('click', function(){
  //   console.log('I clicked button7');
  // });

  //********************* ORIGINAL CODE
  // if ($toggle == true) { // this will make the teal token to start first
  //   var $tokenIds = $('#circles');
  //     $(this).attr('id', 'teal-token'); // gave attribute of tealToken to the $circleDiv created below
  //     // var $circleDiv = $('div');
  //     // $circleDiv.remove('#circle');
  //     $(this).remove('#circle');
  //   } else {
  //     $(this).attr('id', 'blue-token'); // gave attribute of blueToken to $circleDiv created below
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

  // var $checkingWins = function() {
  //   for (var i = 0; i < $winsArray.length; i++) {
  //     if ($winsArray[i].hasClass('teal-token')) {
  //   } else if () {
  //
  //   }
  // };
  //
  // $checkingWins();

  // var checkingWins = function() {
  //   for (var i = 0; i < winsArray.length; i++) {
  //     // for (var j = 0; j < winsArray.length; j++) {
  //       // for (var k = 0; k < $winsArray.length; k++) {
  //       //   console.log($winsArray[i][j][k]);
  //       // }
  //       console.log(winsArray[i]);
  //     // }
  //   }
  // }; // --> end $checkingWins function
  //
  // checkingWins();

  // var winsArray = [
  //     ['#35', '#36', '#37', '#38'], // horizontal
  //     ['#35', '#28', '#21', '#14'], // vertical
  //     ['#21', '#15', '#9', '#3'], // diagonal
  //     ['#28', '#22', '#16', '#10'], // diagonal
  // ];


  // var checkingWins = function() {
  //   var $circleClass = $('.circle');
  //   for (var i = 0; i < winsArray.length; i++) {
  //   console.log(winsArray[i]);
  //     if (winsArray[i].hasClass('teal-token')) {
  //       // if (winsArray[i].hasClass('teal-token')) {
  //       //   if (winsArray[i].hasClass('teal-token')) {
  //       //     if (winsArray[i].hasClass('teal-token')) {
  //             console.log('you won!');
  //       //     }
  //       //   }
  //       // }
  //     }
  //   }
  // }; // --> end checkingWins function
  //
  // checkingWins();


  // WINNING PSEUDOCODE
  // I want to go to the first array and check if the token is teal
  // if true, go to the next space in the same array and check if it's teal
  // if true, go to the third space in the same array and check if it's teal
  // if true, go to the fourth space in the same array and check if it's teal
  // if false, go to the next array
  // ---> look into nested loops?



  // var checkingWins = function() {
  //   var tealWin = 0;
  //   var blueWin = 0;
  //
  //   for (var i = 0; i < $winsArray.length; i++) {
  //     for (var j = 0; j < $winsArray[i].length; j++) {
  //       if ($winsArray[i][j].hasClass('teal-token')) {
  //         tealWin = j;
  //         if (tealWin == 3) {
  //           console.log('teal player wins');
  //           tealWin = 0;
  //           break;
  //         }
  //       } else if ($winsArray[i][j].hasClass('blue-token')) {
  //         blueWin = j;
  //         if (blueWin == 3) {
  //           console.log('blue player wins');
  //           blueWin = 0;
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }; // --> end $checkingWins function
  // checkingWins();


  // var $winsArray = [
  //   [$('#35'), $('#36'), $('#37'), $('#38')],
  //   // [$('#36'), $('#37'), $('#38'), $('#39')], [$('#37'), $('#38'), $('#39'), $('#40')],
  //   // [$('#38'), $('#39'), $('#40'), $('#41')], [$('#28'), $('#29'), $('#30'), $('#31')], [$('#29'), $('#30'), $('#31'), $('#32')],
  //   // [$('#30'), $('#31'), $('#32'), $('#33')], [$('#31'), $('#32'), $('#33'), $('#34')], [$('#21'), $('#22'), $('#23'), $('#24')],
  //   // [$('#22'), $('#23'), $('#24'), $('#25')], [$('#23'), $('#24'), $('#25'), $('#26')], [$('#24'), $('#25'), $('#26'), $('#27')],
  //   // [$('#14'), $('#15'), $('#16'), $('#17')], [$('#15'), $('#16'), $('#17'), $('#18')], [$('#16'), $('#17'), $('#18'), $('#19')],
  //   // [$('#17'), $('#18'), $('#19'), $('#20')], [$('#7'), $('#8'), $('#9'), $('#10')], [$('#8'), $('#9'), $('#10'), $('#11')],
  //   // [$('#9'), $('#10'), $('#11'), $('#12')], [$('#10'), $('#11'), $('#12'), $('#13')], [$('#0'), $('#1'), $('#2'), $('#3')],
  //   // [$('#1'), $('#2'), $('#3'), $('#4')], [$('#2'), $('#3'), $('#4'), $('#5')], [$('#3'), $('#4'), $('#5'), $('#6')],
  //   // [$('#35'), $('#28'), $('#21'), $('#14')], [$('#28'), $('#21'), $('#14'), $('#7')], [$('#21'), $('#14'), $('#7'), $('#0')],
  //   // [$('#36'), $('#29'), $('#22'), $('#15')], [$('#29'), $('#22'), $('#15'), $('#8')], [$('#22'), $('#15'), $('#8'), $('#1')],
  //   // [$('#37'), $('#30'), $('#23'), $('#16')], [$('#30'), $('#23'), $('#16'), $('#9')], [$('#23'), $('#16'), $('#9'), $('#2')],
  //   // [$('#38'), $('#31'), $('#24'), $('#17')], [$('#31'), $('#24'), $('#17'), $('#10')], [$('#24'), $('#17'), $('#10'), $('#3')],
  //   // [$('#39'), $('#32'), $('#25'), $('#18')], [$('#32'), $('#25'), $('#18'), $('#11')], [$('#25'), $('#18'), $('#11'), $('#4')],
  //   // [$('#40'), $('#33'), $('#26'), $('#19')], [$('#33'), $('#26'), $('#19'), $('#12')], [$('#26'), $('#19'), $('#12'), $('#5')],
  //   // [$('#41'), $('#34'), $('#27'), $('#20')], [$('#34'), $('#27'), $('#20'), $('#13')], [$('#27'), $('#20'), $('#13'), $('#6')],
  // ];



  // var checkingWins = function() {
  //   var tealWin = 0;
  //   var blueWin = 0;
  //
  //   for (var i = 0; i < $winsArray.length; i++) {
  //     for (var j = 0; j < $winsArray[i].length; j++) {
  //       if ($winsArray[i][j].hasClass('teal-token')) {
  //         tealWin = j;
  //         if (tealWin == 3) {
  //           console.log('teal player wins');
  //           tealWin = 0;
  //           break;
  //         }
  //       } else if ($winsArray[i][j].hasClass('blue-token')) {
  //         blueWin = j;
  //         if (blueWin == 3) {
  //           console.log('blue player wins');
  //           blueWin = 0;
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }; // --> end $checkingWins function
  // checkingWins();







  // 5. CLEAR BOARD  --> can't play again anymore!!!! ugghhhhhh
  //  $clearButton.on('click', createBoard); // when I click on the 'new game' button, it will run the createBoard again but it will reset the board so I can play again
  //  $clearButton.on('click', function() {
    //  $board.empty(); // this will reset the board after I click the clearButton
    //  createBoard();
    //  $removingPTag();
    //  $nextTurn.remove('.blue-wins');
    //  $nextTurn.remove('.teal-wins');
    //  toggle = !toggle;
    //  toggleFunction();
    //  clickButtons();
  //  }); // --> end clear button function


  // // 4. WINNING TIMEEEEEEEEEEE
  //   // I really, really, really want to make this DRY! I know there is a way, but haven't figure it out yet. The for loop and if statement I wrote before doesn't work on all the arrays.
  //
  //   var $winsArray = [
  //     [$('#35'), $('#36'), $('#37'), $('#38')], [$('#36'), $('#37'), $('#38'), $('#39')], [$('#37'), $('#38'), $('#39'), $('#40')],
  //     [$('#38'), $('#39'), $('#40'), $('#41')], [$('#28'), $('#29'), $('#30'), $('#31')], [$('#29'), $('#30'), $('#31'), $('#32')],
  //     [$('#30'), $('#31'), $('#32'), $('#33')], [$('#31'), $('#32'), $('#33'), $('#34')], [$('#21'), $('#22'), $('#23'), $('#24')],
  //     [$('#22'), $('#23'), $('#24'), $('#25')], [$('#23'), $('#24'), $('#25'), $('#26')], [$('#24'), $('#25'), $('#26'), $('#27')],
  //     [$('#14'), $('#15'), $('#16'), $('#17')], [$('#15'), $('#16'), $('#17'), $('#18')], [$('#16'), $('#17'), $('#18'), $('#19')],
  //     [$('#17'), $('#18'), $('#19'), $('#20')], [$('#7'), $('#8'), $('#9'), $('#10')], [$('#8'), $('#9'), $('#10'), $('#11')],
  //     [$('#9'), $('#10'), $('#11'), $('#12')], [$('#10'), $('#11'), $('#12'), $('#13')], [$('#0'), $('#1'), $('#2'), $('#3')],
  //     [$('#1'), $('#2'), $('#3'), $('#4')], [$('#2'), $('#3'), $('#4'), $('#5')], [$('#3'), $('#4'), $('#5'), $('#6')],
  //     [$('#35'), $('#28'), $('#21'), $('#14')], [$('#28'), $('#21'), $('#14'), $('#7')], [$('#21'), $('#14'), $('#7'), $('#0')],
  //     [$('#36'), $('#29'), $('#22'), $('#15')], [$('#29'), $('#22'), $('#15'), $('#8')], [$('#22'), $('#15'), $('#8'), $('#1')],
  //     [$('#37'), $('#30'), $('#23'), $('#16')], [$('#30'), $('#23'), $('#16'), $('#9')], [$('#23'), $('#16'), $('#9'), $('#2')],
  //     [$('#38'), $('#31'), $('#24'), $('#17')], [$('#31'), $('#24'), $('#17'), $('#10')], [$('#24'), $('#17'), $('#10'), $('#3')],
  //     [$('#39'), $('#32'), $('#25'), $('#18')], [$('#32'), $('#25'), $('#18'), $('#11')], [$('#25'), $('#18'), $('#11'), $('#4')],
  //     [$('#40'), $('#33'), $('#26'), $('#19')], [$('#33'), $('#26'), $('#19'), $('#12')], [$('#26'), $('#19'), $('#12'), $('#5')],
  //     [$('#41'), $('#34'), $('#27'), $('#20')], [$('#34'), $('#27'), $('#20'), $('#13')], [$('#27'), $('#20'), $('#13'), $('#6')],
  //   ];
  //
  //   var checkingWins = function(checkingColor) {
  //     for (var i = 0; i < $winsArray.length; i++) {
  //       var match = 0;
  //
  //       for (var j = 0; j < $winsArray[i].length; j++) { // something is not working here
  //         for (var k = 0; k < checkingColor.length; k++) {
  //
  //           if ($winsArray[i][j] == checkingColor[k]) {
  //             match++;
  //           }
  //
  //         }
  //       }
  //
  //       if (match == 4) {
  //         return true;
  //       }
  //     }
  //     return false;
  //  }; // --> end $checkingWins function
  //   // checkingWins();
  //
  //
  //   var whosTheWinner = function() {
  //     if (whosTheWinner(teal) == true) {
  //       $nextTurn.text("Teal Wins!");
  //       $nextTurn.css('color', 'white');
  //       $nextTurn.addClass('teal-wins');
  //     } else if (whosTheWinner(blue) == true) {
  //       $nextTurn.text("Blue Wins!");
  //       $nextTurn.css('color', 'white');
  //       $nextTurn.addClass('blue-wins');
  //     } else if (turn == 42) {
  //       $nextTurn.text("It is a tie!");
  //     }
  //   }; // --> end whosTheWinner function
  //   whosTheWinner();
