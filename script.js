// // Username input and global myOutputValue
var Username = null;
var myOutputValue;
var user1Roll = [];
var user2Roll = [];
var user1ans = 0;
var user2ans = 0;

// // Global win/lose counter

var user1winCount = 0;
var user2winCount = 0;

// // Random Dice Generator (rollDice)
// define array combining 2 random throws
var rollDiceFunc = function () {
  var RNG1 = Math.floor(Math.random() * 6 + 1);
  var RNG2 = Math.floor(Math.random() * 6 + 1);
  var rollDice2times = [RNG1, RNG2];

  console.log("Dice Thrown");
  console.log(rollDice2times);

  return rollDice2times;
};

// // Beat That! Game
// 2 Users prompted input for Usernames first and starts gamemode 1st roll
var main = function (input) {
  // [] user or new game
  if (Username == [] && input.trim() == "") {
    myOutputValue = "Input Username to continue";
  }
  // first username input
  else if (Username == [] && !(input.trim() == "")) {
    Username = [];
    Username[0] = input;
    myOutputValue = `Welome ${Username[0]}. <br> Input 2nd Username`;
  }
  // null 2nd user input
  else if (!(Username[0] == []) && Username[1] == [] && input.trim() == "") {
    myOutputValue = `Welome ${Username[0]}. <br> Input 2nd Username`;
  }
  // both user input
  else if (!(Username[0] == []) && Username[1] == [] && !(input.trim() == "")) {
    Username[1] = input;
    myOutputValue = `Welome ${Username[0]}. <br> Welome ${Username[1]}. <br> Autobots let's roll~`;
  }
  // BOTH USERS BEGINS PLAY
  else if (!(Username[0] == []) && !(Username[1] == [])) {
    // User 1 rolls first
    if (user1Roll == []) {
      gameUser1(Username, input);
    } // Pending user 1 decision and auto rolls 2nd user dice
    else if (!(user1Roll == []) && user2Roll == []) {
      if (input == 1) {
        user1ans = user1Roll[0] * 10 + user1Roll[1];
        gameUser2(Username, input);
      } else if (input == 2) {
        user1ans = user1Roll[1] * 10 + user1Roll[0];
        gameUser2(Username, input);
      } else {
        myOutputValue = `${Username[0]}, you rolled. <br> Dice 1: ${user1Roll[0]} <br> Dice 2: ${user1Roll[1]}
    <br> Choose the order of the dice: <br>
Input "1" for Dice 1 to be first digit. <br>
Input "2" for Dice 2 to be the first digit.`;
      }
    }
    // Pending user 2 decision and game result
    else if (user2ans == 0) {
      if (input == 1) {
        user2ans = user2Roll[0] * 10 + user2Roll[1];
        userWin();
      } else if (input == 2) {
        user2ans = user2Roll[1] * 10 + user2Roll[0];
        userWin();
      } else {
        myOutputValue = `${Username[1]}, you rolled. <br> Dice 1: ${user2Roll[0]} <br> Dice 2: ${user2Roll[1]}
      <br> Choose the order of the dice: <br>
  Input "1" for Dice 1 to be first digit. <br>
  Input "2" for Dice 2 to be the first digit.`;
      }
    }
  } else {
    myOutputValue = `Autobots let's roll`;
  }

  return myOutputValue;
};

// Game function - User1 roll

var gameUser1 = function (Username, input) {
  //computer bot plays scizzorpaperstone randomly
  user1Roll = rollDiceFunc();

  console.log("User1 threw");
  console.log(user1Roll);

  // define user input (if all inputs fail) - input that is not Scissors/Paper/Stone
  myOutputValue = ` Rolling~ <br> ${Username[0]}, 
<br> You rolled. <br> Dice 1: ${user1Roll[0]} <br> Dice 2: ${user1Roll[1]}
<br> Choose the order of the dice: <br>
Input "1" for Dice 1 to be first digit. <br>
Input "2" for Dice 2 to be the first digit.`;
};

// Game function - User2 roll

var gameUser2 = function (Username, input) {
  //computer bot plays scizzorpaperstone randomly
  user2Roll = rollDiceFunc();

  console.log("User2 threw");
  console.log(user2Roll);

  // define user input (if all inputs fail) - input that is not Scissors/Paper/Stone
  myOutputValue = `${Username[0]} - You chose ${user1ans}. <br>
Rolling~ <br> ${Username[1]}, 
<br> You rolled. <br> Dice 1: ${user2Roll[0]} <br> Dice 2: ${user2Roll[1]}
<br> Choose the order of the dice: <br>
Input "1" for Dice 1 to be first digit. <br>
Input "2" for Dice 2 to be the first digit.`;
};

//define winning situation

var userWin = function () {
  if (user1ans > user2ans) {
    myOutputValue = `${Username[0]} chose ${user1ans}. <br> ${Username[1]} chose ${user2ans}. <br> ${Username[0]} Wins.`;
  } else if (user1ans == user2ans) {
    myOutputValue = `${Username[0]} chose ${user1ans}. <br> ${Username[1]} chose ${user2ans}. <br> Its a draw.`;
  } else {
    myOutputValue = `${Username[0]} chose ${user1ans}. <br> ${Username[1]} chose ${user2ans}. <br> ${Username[1]} Wins.`;
  }

  while (index % 2 == 0) {
    resultslog.push(user1ans);
    index = index + 1;
  }

  while (!(index % 2 == 0)) {
    resultslog.push(user2ans);
    index = index + 1;
  }
};

var index = 0;
var resultslog = [];
