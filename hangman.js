import readline from 'readline';

export const MAX_GUESSES = 10;

export const displayHangedMan = (numGuesses) => {
    switch (numGuesses) {
        case 0:
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            break;
        case 1:
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("            ");
            console.log("-----       ");
            break;
        case 2:
            console.log("            ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 3:
            console.log("  ________  ");
            console.log("  |/        ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 4:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 5:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |      O  ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 6:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |      O  ");
            console.log("  |      |  ");
            console.log("  |      |  ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 7:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |      O  ");
            console.log("  |     \\|  ");
            console.log("  |      |  ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 8:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |      O  ");
            console.log("  |     \\|/ ");
            console.log("  |      |  ");
            console.log("  |         ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        case 9:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |      O  ");
            console.log("  |     \\|/ ");
            console.log("  |      |  ");
            console.log("  |     /   ");
            console.log("  |         ");
            console.log("-----       ");
            break;
        default:
            console.log("  ________  ");
            console.log("  |/     |  ");
            console.log("  |      $  ");
            console.log("  |      O  ");
            console.log("  |     \\|/ ");
            console.log("  |      |  ");
            console.log("  |     / \\ ");
            console.log("  |         ");
            console.log("-----       ");
            break;
    }
}

export const displayGuesses = (guesses) => {
    let guessesText = ""
    for (const letter of guesses) {
        guessesText += letter + " ";
    }

    console.log("Guesses:\n" + guessesText);
}

export const displayWord = (word, guesses) => {
    let displayWord = "";
    for (const letter of word) {
        if (guesses.includes(letter)) {
            displayWord += letter + " ";
        } else {
            displayWord += "_ "
        }
    }

    console.log(displayWord)
}

export const display = (word, guesses) => {
    const incorrectGuesses = guesses.filter((letter) => !Array.from(word).includes(letter)).length
    displayHangedMan(incorrectGuesses);
    console.log("");
    displayWord(word, guesses);
    console.log("");
    displayGuesses(guesses);
    console.log("");
}