// variables
const ANSWER = "pizza";
let letter = "";
let attempts = 6;
let found = false;
let used = new Set();

const display = new Array(ANSWER.length).fill("_");

function gameStatus(display, attempts) {
  const newDisplay = display.join("");
  if (newDisplay === ANSWER) {
    console.log("Won");
    return true;
  } else if (attempts > 0) {
    console.log("In Progress");
  } else {
    console.log("Lost");
  }
}

// while attempts left
while (attempts > 0) {
  letter = prompt("Choose a letter: ");

  for (let i = 0; i < ANSWER.length; i++) {
    if (letter === ANSWER[i]) {
      // while there are more of the same letter left
      for (let j = i; j < ANSWER.length; j++) {
        if (letter === ANSWER[j]) {
          display[j] = letter;
        }
      }
      display[i] = letter;
      found = true;

      break;
    } else {
      found = false;
    }
  }

  if (!used.has(letter)) {
    used.add(letter);
  } else if (used.has(letter)) {
    console.log("this letter has already been used");
    found = true;
  }

  if (found === false) {
    attempts -= 1;
  }

  console.log(display);
  console.log(attempts);
  if (gameStatus(display, attempts) === true) {
    break;
  }
}
