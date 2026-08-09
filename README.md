# coding-challenges

## Table of Contents

## Features

### Hangman

Requirements:

A function that takes a secret word and a guessed letter, and returns whether the guess is correct
Track which letters have been guessed so far (no double-counting a repeat guess)
A function that returns the current display state of the word
Track remaining incorrect guesses (start at 6) — decrement only on a wrong guess
A function that returns the game status: "won", "lost", or "in progress"

Constraints:
No external libraries
Assume the secret word is lowercase, no spaces
Handle a guess of a letter that isn't in the alphabet gracefully (don't crash)

### Mastermind

Requirements:

A function that takes a secret word and a guessed word, and returns whether the guess is correct
Track which letters have been guessed so far (no double-counting a repeat guess)
A function that returns the current display state of the word
Track remaining incorrect guesses (start at 6) — decrement only on a wrong guess

Constraints:
No external libraries
Assume the secret word is lowercase, no spaces
Handle a guess of a letter that isn't in the alphabet gracefully (don't crash)
