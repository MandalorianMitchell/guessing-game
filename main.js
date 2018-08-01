function beginGame() {
  var name = prompt('Before we get started, please enter your name:');
  while ((name == '') || (name == null))  {
    name = prompt('Please enter a valid name:');
  }

  alert('Hello ' + name + ', and welcome to my Guessing Game!');
  console.log('Username: ' + name);
}

var counter = 0;
function firstQuestion() {
  var questionOne = confirm('Question 1: ' + 'Was I born in Oregon?');
  if (questionOne) {
    alert('Wrong! I was born in California.');
    console.log(questionOne + ': Wrong');
  }  else {
    alert('Correct! I was not born in Oregon.');
    console.log(questionOne + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  }
}

function secondQuestion() {
  var questionTwo = prompt('Question 2: ' + 'How many cats do I have?');
  if (questionTwo == 2) {
    alert('Hey! You got it!');
    console.log(questionTwo + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  } else if (questionTwo > 2) {
    alert('Sorry, that wasn\'t the right answer!');
    console.log(questionTwo + ': Wrong');
  }  else if (questionTwo < 2) {
    alert('Nope, sorry!');
    console.log(questionTwo + ': Wrong');
  }
}

function thirdQuestion() {
  var questionThree = confirm('Question 3: ' + 'Is my favorite color yellow?');
  if (questionThree) {
    alert('Yeah! You got it right!');
    console.log(questionThree + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  } else {
    alert('You got it wrong, bummer!');
    console.log(questionThree + ': Wrong');
  }
}

function fourthQuestion() {
  var bonusQuestion = prompt('Bonus Question: ' + 'What is my favorite number? (Less than 20)');
  if (bonusQuestion == 14) {
    alert('You guessed it! That was super impressive!');
    console.log(bonusQuestion + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  } else if (bonusQuestion < 14) {
    alert('Sorry, that answer was too low!');
    console.log(bonusQuestion + ': Wrong - answer too low!');
  } else if (bonusQuestion > 14) {
    alert('Sorry, that answer was too high!');
    console.log(bonusQuestion + ': Wrong - answer too high!');
  }
}

function gameScore(firstQuestion, secodQuestion, thirdQuestion, fourthQuestion) {
  alert('You scored ' + counter + ' out of 4 Questions Correctly');

}

function fifthQuestion() {
  var questionFive = prompt('Bonus-BONUS Question! What number am I thinking of? (Less than 50)');
  while ((questionFive == '') || (questionFive != 38)) {
    questionFive = prompt('Sorry, that answer was wrong. Please try again.');
  }
}
