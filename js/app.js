'use strict';


//used this to get the user's name. rwebking
var black = prompt('Hey, What is your name?');
console.log('user answered' + black + 'to get the user\'s name.');


//asked the user if he wanted to play a game. rwebking
var game = prompt(black + ', Do you wanna play a game? (in creepy Jig Saw voice.)')
  .toLowerCase();
console.log('user answered' + game + ' on wanting to play a game.');

if (game === 'yes') {
  alert('Great');
} else {
  alert('Too Bad!');
}


//asked user if i have a dog. rwebking
var dog = prompt('Do I have a dog?');
console.log('user answered' + dog + 'to if i ahave a dog or not.');

if (dog === 'yes') {
  alert(' Yes, I do have a dog his name is Gryffindor.');
} else {
  alert('I do have a dog, His name is Gryffindor.');
}


//asked the used the theme of my tattoo theme. clue is in the last
//question. rwebking
var harryPotter = prompt('I am getting a tattoo sleeve soon, Can you guess the theme?');
console.log('user answered' + harryPotter + 'to the theme of the tattoo sleeve I am geeting.');

if (harryPotter == 'Harry Potter') {
  alert('That is correct!');
} else {
  alert('It is going to be Harry Potter themed.');
}



var airline = prompt('Do I work for an airline?')
  .toUpperCase();
console.log('user answered' + airline + 'to if i work for an airline.');

if (airline === 'YES') {
  alert('That is correct');
} else {
  alert('I actully work for Alaska Airlines.');
}


// this is always going to tigger the else condition. rwebking
var haha = prompt('Do you want free flights?')
  .toLowerCase();
console.log('user answered' + haha + ' to wanting free flights.');

if (haha === 'YES') {
  alert('Not gunna happen.');
} else {
  alert('Weird, usually everyone wants free flights');
}


//this is always going to trigger the else condintion. rwebking
var gotcha = prompt('Are you sure you did not mean ' + haha +
  ' for the last question?').toUpperCase();
console.log('user answered' + gotcha + 'to making sure they did not want free flights.');

if (gotcha === 'yes') {
  alert('okay! lets go to mexico. I will pay for everything.');
} else {
  alert('You must not like flying.');
}

//This is my fancy sixthith question with a for loop.

var sixth = prompt('How many countries have I visited?');
console.log('user guessed' + sixth + 'to how many countries I have visited.');

if (sixth === '5') {
  alert('That is correct');
} else if (sixth === '6' || sixth === '7' || sixth === '8' || sixth === '9' || sixth === '10'){
  alert('Too High');
} else if (sixth === '4' || sixth === '3' || sixth === '2' || sixth === '1'){
  alert('Too low');
} else {
  alert('Try numbers between 1 and 10.');
}

