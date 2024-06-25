import { display, MAX_GUESSES } from "./hangman.js";
import { question } from "readline-sync";

const GameState = {
    Ongoing: "ongoing",
    Lost: "lost",
    Won: "won"
}

let word = "";
let guesses = [" "];

const wordGuessed = () => {
    return Array.from(word).every((letter) => guesses.includes(letter))
}

const incorrectGuesses = () => {
    let wordArr = Array.from(word)
    return guesses.filter((letter) => !wordArr.includes(letter)).length
}

const currentGameState = () => {
    if (incorrectGuesses() >= MAX_GUESSES) {
        return GameState.Lost
    } else if (wordGuessed()) {
        return GameState.Won
    } else {
        return GameState.Ongoing
    }
}

while (!word.length > 0) {
    console.clear();
    word = question("Enter a word to guess: ").toUpperCase()
}

while (currentGameState() == GameState.Ongoing) {
    let guess = '';
    while (guess.length != 1) {
        console.clear();
        display(word, guesses);
        guess = question("Enter a letter to guess: ")
    }

    if (!guesses.includes(guess)) {
        guesses.push(guess.toUpperCase())
    }
}

console.clear();
display(word, guesses);

if (currentGameState() == GameState.Lost) {
    console.log("You lost...");
} else if (currentGameState() == GameState.Won) {
    console.log("You won!!!");
}

console.log("The answer was: " + word);
console.log("");
console.log("Thank you for playing!");