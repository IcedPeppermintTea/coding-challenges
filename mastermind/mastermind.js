// variables
const ANSWER = "blue";
let attempt = new Array(ANSWER.length).fill("_");
let attemptCount = 6;
let userGuess = "";

// while guesses left
while (attemptCount > 0) {
  userGuess = prompt(`Guess the word: ${attempt}`);
  attemptCount -= 1;

  for (let i = 0; i < userGuess.length; i++) {
    if (userGuess[i].toLowerCase() === ANSWER[i]) {
      attempt[i] = userGuess[i];
    }
  }

  console.log(attempt);

  if (userGuess.toLowerCase() === ANSWER) {
    console.log("You Won!");
    break;
  } else {
    console.log(`Wrong! Try again`);
    console.log(`Attempts left: ${attemptCount}`);
  }
}
