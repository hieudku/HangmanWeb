

/* Add event to click to play button, initialize the program */
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", (event) => {

    let selectText = document.getElementById("selectText");
    let title = document.getElementById("title");
    let selection = document.getElementById("select-btn");

    title.style.display = "none";
    startBtn.style.display = "none";
    selection.style.display = "flex";
    selectText.style.display = "block";
    
});

/* Delare and assign arrays of words available */
const animalArr = ["hippopotamus", "seahorse", "antellop", "sparrow"];
const scienceArr = ["jupiter", "photosynthesis", "precipitation", "oxidation"]
const activitiesArr = ["bouldering", "football", "swimming", "camping"];
const natureArr = ["volcano", "earthquake", "hurricane", "atmosphere"];

/* Global variables*/
let getWord = ""; // Randomly chosen word assigned here!
let hiddenArray = [];    // Array the word's letters.
let keyPressed = "";    // Register and assign letter selected by player.
let wrongCount = 0;    // Keep track of wrong guesses.
let rightCount = 0;   // Keep track of right guesses.

/* Player select different topics */
const selectTopic = document.querySelectorAll(".selectBtn");
selectTopic.forEach(function(e) { // Loop to add events to each selection button.
    e.addEventListener("click", (event) => {
        
        let hideSelection = document.getElementById("select-btn");
        let showKeys = document.getElementById("keyboard");
        let showMain = document.getElementById("main-content");
        let getTopic = document.getElementById("topic");
        let changeBColor = document.getElementById("body");

        hideSelection.style.display = "none";
        showKeys.style.display = "flex";
        showMain.style.display = "flex";
        /* Conditions when select/click on each topic */
        if (e.innerHTML == "Animals") {
            /* Change background color */
            changeBColor.style.backgroundColor = "#FFDFF5";
            getTopic.innerHTML = "Animals category";
            /* Call function to get a random word */
            let getRandomWord = randomWord(animalArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            fillArray(getWord);
            playGame(getWord, wrongCount, rightCount);
        }
        else if (e.innerHTML == "Science") {
            /* Change background color */
            changeBColor.style.backgroundColor = "#DFE6F3";
            getTopic.innerHTML = "Science category";
            /* Call function to get a random word */
            let getRandomWord = randomWord(scienceArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            fillArray(getWord);
            playGame(getWord, wrongCount, rightCount);
        }
        else if (e.innerHTML == "Activities") {
            /* Change background color */
            changeBColor.style.backgroundColor = "#FFE4CA";
            getTopic.innerHTML = "Activities category";
            /* Call function to get a random word */
            let getRandomWord = randomWord(activitiesArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            fillArray(getWord);
            playGame(getWord, wrongCount, rightCount);
        }
        else if (e.innerHTML == "Nature") {
            /* Change background color */
            changeBColor.style.backgroundColor = "#D7FFE2";
            getTopic.innerHTML = "Nature category";
            /* Call function to get a random word */
            let getRandomWord = randomWord(natureArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            fillArray(getWord);
            playGame(getWord, wrongCount, rightCount);
        }
    });
});

/* Slice and push each letter to empty array */
function fillArray (getWord) {
    for (i = 0; i < getWord.length; i++) {
        let char = getWord.charAt(i);
        hiddenArray.push(char);
    }
    console.log(hiddenArray);
    showLetterBox(getWord); // Call function to show letter boxes.
}

/* Get random word from each array */
function randomWord(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomWord = array[randomIndex];
    return randomWord;
}

/* Show number of empty boxes based on the word's length */
function showLetterBox(getWord) {
    for (i = 0; i < getWord.length; i++) {
        let addBoxes = document.createElement("div");
        addBoxes.setAttribute("class", "boxes"); // Create number of boxes and classes based on the letter count.
        let showBoxes = document.getElementById("box-container");
        showBoxes.appendChild(addBoxes);
        
        /* Fill each box with a letter of its original position */
        let getLetter = document.querySelectorAll(".boxes");
        for (let j = 0; j < getWord.length; j++) {
            getLetter.forEach(function(letter, index){
                if (!letter.innerHTML) {
                    letter.innerHTML = "_"; // Can be edited so boxes show all letters in a word.
                }
            });
        }
    }

    let showBoxes = document.getElementById("box-container");
    showBoxes.style.display = "flex";
}

/* Assign the random word to the variable on top (for testing) */
function guessLetter(getWord) {
    const showWord = document.getElementById("topic");
    let changeText = document.getElementById("selectText");

    showWord.style.display = "block";


    changeText.innerHTML = "The word has " + getWord.length + " letters";
}

/* Register the keys user presses and compare to each letter of the word */
function playGame(getWord, wrongCount, rightCount) {

    let keyList = document.querySelectorAll(".keys");
    let getKey = document.querySelectorAll(".boxes");

    let keyPressed = "";
    keyList.forEach(function(e){
        e.addEventListener("click", (event) => {

            /* Register the key pressed */
            keyPressed = e.innerHTML;
            e.style.backgroundColor = "#9E9999"
            console.log("keyPressed:", keyPressed);
            console.log("getWord length:", getWord.length);

            let isCorrect = false; // false = wrong guess; true = right guess.

            /* Loop through each box to change its properties*/
            getKey.forEach(function(boxElement, index){
                    let char = getWord.charAt(index); 
                    if (keyPressed.toUpperCase() == char.toUpperCase()) {
                            boxElement.innerHTML = char;
                            isCorrect = true;
                    }
            });
            /* Keep count of the wrong guess by increment */
            if (isCorrect) {
                rightCount++;
                console.log("right guess");
                console.log("right count: " + rightCount);
            }
            if (!isCorrect) {
                console.log("wrong guess");
                wrongCount++;
                console.log("wrong count: " + wrongCount);
            if(wrongCount >= 5) {
                console.log("game over");
            }
            }
        });
    });
}

