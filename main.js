function beginGame() {
  var userName = prompt('Before we get started, please enter your name:');
  while ((userName == '') || (userName == null))  {
    userName = prompt('Please enter a valid name:');
  }

  var iKnowYou = document.getElementById('who-are-you-?');
  iKnowYou.innerHTML = 'Hello ' + userName + ', let\'s get started!';
  console.log('Username: ' + userName);
}

var counter = 0;
function askQuestion(question, correctAnswer, elementId, correctResponse, wrongResponse) {
  var userAnswer = confirm(question);
  var p = document.getElementById(elementId);
  if (userAnswer === correctAnswer) {
    p.innerHTML = correctResponse;
    console.log(userAnswer + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  } else {
    document.getElementById(elementId);
    p.innerHTML = wrongResponse;
    console.log(userAnswer + ': Wrong');
  }
}

function oregonBorn() {
  askQuestion('Was I born in Oregon?', false, 'birth-place',
   'Correct! I was not born in Oregon.' +
   '<br><br><img src="./Images/Thumbs-up.jpg" alt="John Rambo" width="200px">',
   'Wrong! I was born in California.' +
   '<br><br><img src="./Images/Thumbs-down.jpg" alt="Thumbs down guy" width="200px">');
}

function lotsOfCats(meow) {
  var questionTwo = prompt(meow);
  var q = document.getElementById('pet-count');
  if (questionTwo == 2) {
    q.innerHTML = 'Hey! You got it!' +
    '<br><br><img src="./Images/JCVD-Thumbs-up.jpg" alt="JCVD" width="200px">';
    console.log(meow + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  } else {
    q.innerHTML = 'Sorry, that wasn\'t the right answer!';
    console.log(meow + ': Wrong');
  }
}

function faveColor() {
  askQuestion('Is my favorite color Yellow?', true, 'i-like-this-color',
   'Yeah! You got it right!' +
   '<br><br><img src="./Images/Thumbs-up.jpg" alt="Borat" width="200px">',
   'You got it wrong, bummer!');
}

function coolNumber(number) {
  var bonusQuestion = prompt(number);
  var s = document.getElementById('this-number-is-rad');
  if (bonusQuestion == 14) {
    s.innerHTML = 'You guessed it! That was super impressive!' +
    '<br><br><img src="./Images/Arnold-Thumbs-up.jpg" alt="Terminator thumbs up" width="200px">';
    console.log(number + ': Correct');
    counter++;
    console.log('Score: ' + counter);
  } else if (bonusQuestion < 14) {
    s.innerHTML = 'Sorry, that answer was too low!';
    console.log(number + ': Wrong - answer too low!');
  } else if (bonusQuestion > 14) {
    s.innerHTML = 'Sorry, that answer was too high!';
    console.log(number + ': Wrong - answer too high!');
  }
}

function mindReader(psychic) {
  var questionFive = prompt(psychic);
  var t = document.getElementById('try-and-guess');
  while ((questionFive == '') || (questionFive != 38)) {
    questionFive = prompt('Sorry, that answer was wrong. Please try again.');
    console.log(psychic + ': Wrong answer! Keep Trying!');
  }

  if (questionFive) {
    t.innerHTML = 'You guessed it! Awesome!' +
    '<br><br><img src="./Images/Hasselhoff-Thumbs-up.jpg" alt="David Hasselhoff" width="200px">';
    console.log(psychic + ': Correct - great guess!');
    counter++;
    console.log('Score: ' + counter);
  }
}

function gameScore() {
  alert('You scored ' + counter + '/5 Questions Correctly');

}
