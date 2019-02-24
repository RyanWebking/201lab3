'use strict';



//used this to get the user's name. rwebking
var black = prompt('Hey, What is your name?');
console.log('user\'s name is ' + black + '.');


//asked the user if he wanted to play a game. rwebking
var game = prompt(black + ', Do you wanna play a game? (in creepy Jig Saw voice.)');
game.toLocaleLowerCase;

console.log('user confirmed ' + game + 'to wanting to play a game.');

if (game === 'yes') {
  alert('Great');
} else {
  alert('Too Bad!');
}


function ryan() {

  var counter = 0;

  var questions = [
    'Do I have a dog?',
    'I am getting a tattoo sleeve soon, Can you guess the theme?',
    'Do I work for an airline?',
    'Do you want free flights?',
    'Do I like Hawaii or Mexico?',
    'How many countries have I visited?',
    'Who is one of my favorite characters in Friends?'
  ];

  var mypossibleAnswers = [
    ['yes', 'YES', 'y', 'Y', 'Yes', 'no', 'NO', 'No', 'N', 'n'],
    ['Harry Potter', 'HARRY POTTER', 'harry potter'],
    ['yes', 'YES', 'y', 'Y', 'Yes', 'no', 'NO', 'No', 'N', 'n'],
    ['yes', 'YES', 'y', 'Y', 'Yes', 'no', 'NO', 'No', 'N', 'n'],
    ['Hawaii', 'hawaii', 'HAWAII', 'Mexico', 'mexico', 'MEXICO'],
    ['1', '2', '3', '4', '5', '6', '7,', '8', '9', '10'],
    ['Ross', 'ross', 'Phoebe', 'phoebe', 'Rachel', 'rachel', 'Chandler', 'chandler', 'Mrs. Chanandler Bong', 'Joey', 'joey', 'Monica', 'monica']
  ];

  var mycorrectAnswers = [
    ['yes', 'YES', 'Yes'],
    ['Harry Potter', 'HARRY POTTER', 'harry potter'],
    ['yes', 'YES', 'y', 'Y', 'Yes'],
    ['yes', 'YES', 'y', 'Y', 'Yes', 'no', 'NO', 'No', 'N', 'n'],
    ['Mexico', 'mexico', 'MEXICO'],
    ['5'],
    ['Ross', 'ross', 'Rachel', 'rachel', 'Joey', 'joey']
  ];

  var tries = [1, 1, 1, 1, 1, 4, 6];

  var responses = [];


  for (var turnIndex = 0; turnIndex < questions.length; turnIndex++) {
    for (var tryIndex = 0; tryIndex < tries[turnIndex]; tryIndex++) {
      var response = '';
      while (!mypossibleAnswers[turnIndex].includes(response)) {
        response = prompt(questions[turnIndex]);
      }
      responses.push(response);
      console.log(response);

      // Check to see if the response is correct
      if (mycorrectAnswers[turnIndex].includes(response)) {
        alert('Correct!');
        counter++;
        break;
        // If they're on "how many countries?":
      } else if (turnIndex === 5) {
        if (response > 5) {
          alert('Too High.');
        } else if (response < 5) {
          alert('Too Low.');
        }

        // If they're on their last try:
      } else if (tryIndex === tries[turnIndex] - 1) {
        alert('Incorrect.');
        // If they have more tries left:
      } else {
        alert('Incorrect. You have ' + (tries[turnIndex] - tryIndex - 1) + ' left.');
      }
    }
  }

  alert(black + ', you got ' + counter + ' out of ' +
    questions.length + ' correct.');
}

ryan();








// //asked user if i have a dog. rwebking
// var dog = prompt('Do I have a dog?');
// console.log('user answered' + dog + 'to if i ahave a dog or not.');

// if (dog === 'yes') {
//   alert(' Yes, I do have a dog his name is Gryffindor.');
// } else {
//   alert('I do have a dog, His name is Gryffindor.');
// }


// //asked the used the theme of my tattoo theme. clue is in the last
// //question. rwebking
// var harryPotter = prompt('I am getting a tattoo sleeve soon, Can you guess the theme?');
// console.log('user answered' + harryPotter + 'to the theme of the tattoo sleeve I am geeting.');

// if (harryPotter == 'Harry Potter') {
//   alert('That is correct!');
// } else {
//   alert('It is going to be Harry Potter themed.');
// }



// var airline = prompt('Do I work for an airline?')
//   .toUpperCase();
// console.log('user answered' + airline + 'to if i work for an airline.');

// if (airline === 'YES') {
//   alert('That is correct');
// } else {
//   alert('I actully work for Alaska Airlines.');
// }


// // this is always going to tigger the else condition. rwebking
// var haha = prompt('Do you want free flights?')
//   .toLowerCase();
// console.log('user answered' + haha + ' to wanting free flights.');

// if (haha === 'YES') {
//   alert('Not gunna happen.');
// } else {
//   alert('Weird, usually everyone wants free flights');
// }


// //this is always going to trigger the else condition. rwebking
// var gotcha = prompt('Are you sure you did not mean ' + haha +
//   ' for the last question?').toUpperCase();
// console.log('user answered' + gotcha + 'to making sure they did not want free flights.');

// if (gotcha === 'yes') {
//   alert('okay! lets go to mexico. I will pay for everything.');
// } else {
//   alert('You must not like flying.');
// }

// //This is my fancy sixthith question with a for loop.

// var sixth = prompt('How many countries have I visited?');
// console.log('user guessed' + sixth + 'to how many countries I have visited.');

// if (sixth === '5') {
//   alert('That is correct');
// } else if (sixth === '6' || sixth === '7' || sixth === '8' || sixth === '9' || sixth === '10'){
//   alert('Too High');
// } else if (sixth === '4' || sixth === '3' || sixth === '2' || sixth === '1'){
//   alert('Too low');
// } else {
//   alert('Try numbers between 1 and 10.');
// }
