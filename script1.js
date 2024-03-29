
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess(){
  var userGuess = Number(guessField.value);
  
  if (guessCount === 1){
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if(userGuess === randomNumber){
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent= " ";
      setGameOver();
    }

  else if(guessCount === 10){
    lastResult.textContent = "!!! GAME OVER !!!";
    lowOrHi.textContent = " ";
    setGameOver();
  }
  else{
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber){
      lowOrHi.textContent="Last guess was too low!";
    }
    else if (userGuess > randomNumber){
      lowOrHi.textContent = "Last guess was too high!";
    }
  }
  guessCount++;
  guessField.value=" ";
  guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);



function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.querySelector(".resetButton");
  resetButton.style.opacity = "1";
  resetButton.addEventListener('click', resetGame);
}

function resetGame(){
  guessCount = 1;
  var resetParas = document.querySelectorAll(".resultParas p");
  for(var i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = " ";
  }
  resetButton.style.opacity = "0";
  

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = " ";
  guessField.focus();

  lastResult.style.backgroundColor = "grey";
  randomNumber = Math.floor(Math.random() * 100) + 1;


}

