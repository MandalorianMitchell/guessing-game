var name = prompt('Before we get started, please enter your name:');
alert('Hello ' + name + ', and welcome to my Guessing Game!!!');
console.log('Username = ' + name);

function firstQuestion() {
  var questionOne = confirm('Question 1: ' + 'Was I born in Oregon?');
  if (questionOne) {
    alert('Wrong! I was born in California.');
    console.log(questionOne + ': Wrong');
  }  else {
    alert('Correct! I was not born in Oregon.');
    console.log(questionOne + ': Correct');
  }

  return firstQuestion;
};

function secondQuestion() {
  var questionTwo = prompt('Question 2: ' + 'How many cats do I have?');
  if (questionTwo == 2) {
    alert('Hey! You got it!');
    console.log(questionTwo + ': Correct');
  } else if (questionTwo > 2) {
    alert('Sorry, that wasn\'t the right answer!');
    console.log(questionTwo + ': Wrong');
  }  else if (questionTwo < 2) {
    alert('Nope, sorry!');
    console.log(questionTwo + ': Wrong');
  }

  return secondQuestion;
};

function thirdQuestion() {
  var questionThree = confirm('Question 3: ' + 'Is my favorite color yellow?');
  if (questionThree) {
    alert('Yeah! You got it right!');
    console.log(questionThree + ': Correct');
  } else {
    alert('You got it wrong, bummer!');
    console.log(questionThree + ': Wrong');
  }

  return thirdQuestion;
};

function fourthQuestion() {
  var bonusQuestion = prompt('Bonus Question: ' + 'What is my favorite number? (Less than 20)');
  if (bonusQuestion == 14) {
    alert('You guessed it! That was super impressive!');
    console.log(bonusQuestion + ': Correct');
  } else if (bonusQuestion < 14) {
    alert('Sorry, that answer was too low');
    console.log(bonusQuestion + ': Wrong - answer too low');
  } else if (bonusQuestion > 14) {
    alert('Sorry, that answer was too high');
    console.log(bonusQuestion + ': Wrong - answer too high');
  }

  return fourthQuestion;
};

function fifthQuestion() {
  var questionFive = prompt('Bonus-BONUS Question! What number am I thinking of? (Less than 50)');
  while ((questionFive == '') || (questionFive != 38)) {
    questionFive = prompt('Sorry, that answer was wrong. Please try again.');
  }

  return fifthQuestion;
};
