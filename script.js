
/************VARIABLES*******************/
/* Delare and assign arrays of words available */
const animalArr = ["hippopotamus", "seahorse", "golden retriever", 
                    "antellop", "sparrow", "silverback gorilla", 
                    "hummingbird", "armadillo", "rattlesnake",
                    "kingfisher", "platypus"];
const scienceArr = ["electricity", "photosynthesis", "precipitation", "oxidation",
                    "photoelectric", "chemosynthesis", "algorithm", "cryptography"]
const activitiesArr = ["photography", "paragliding", "snowboarding", "scuba diving",
                    "bungee jumping", "mountain biking", "rock climbing",
                    "horseback riding", "skateboarding "];
const natureArr = ["volcano", "earthquake", "hurricane", "atmosphere",
                    "tropical rainforest", "renewable energy", "wildlife habitat", 
                    "natural resources", "carbon footprint"];

/* Global variables*/
let getWord = ""; // Randomly chosen word assigned here!
let hiddenArray = [];    // Array the word's letters.
let keyPressed = "";    // Register and assign letter selected by player.
let wrongCount = 0;    // Keep track of wrong guesses.
let rightCount = 0;   // Keep track of right guesses.
let correctArray = [];
let gameFinished = false;

/**************ENDS*****************/

function initializeGame() {
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
}

/* Player select different topics */
function gameStart() {

    initializeGame();

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
                
                changeBColor.style.backgroundColor = "#F3DCDE";
                getTopic.innerHTML = "Animals category";
                
                let getRandomWord = randomWord(animalArr);  /* Call function to get a random word */
                getWord = getRandomWord;

                guessLetter(getWord);
                fillArray(getWord);
                playGame(getWord, wrongCount, rightCount, correctArray, hiddenArray, gameFinished);
            }
            else if (e.innerHTML == "Science") {
                
                changeBColor.style.backgroundColor = "#DFE6F3"; 
                getTopic.innerHTML = "Science category";
                
                let getRandomWord = randomWord(scienceArr); /* Call function to get a random word */
                getWord = getRandomWord;

                guessLetter(getWord);
                fillArray(getWord);
                playGame(getWord, wrongCount, rightCount, correctArray, hiddenArray, gameFinished);
            }

            else if (e.innerHTML == "Activities") {

                changeBColor.style.backgroundColor = "#FFE4CA";
                getTopic.innerHTML = "Activities category";
                
                let getRandomWord = randomWord(activitiesArr);  /* Call function to get a random word */
                getWord = getRandomWord;

                guessLetter(getWord);
                fillArray(getWord);
                playGame(getWord, wrongCount, rightCount, correctArray, hiddenArray, gameFinished);
            }
            else if (e.innerHTML == "Nature") {

                
                changeBColor.style.backgroundColor = "#D7FFE2";
                getTopic.innerHTML = "Nature category";
                
                let getRandomWord = randomWord(natureArr); /* Call function to get a random word */
                getWord = getRandomWord;

                guessLetter(getWord);
                fillArray(getWord);
                playGame(getWord, wrongCount, rightCount, correctArray, hiddenArray, gameFinished);
            }
        });
    });
}

gameStart(); // Begin playing

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

/* Reveal word */
function revealWord(getWord) {
    let revealLetters = document.querySelectorAll(".boxes");
        revealLetters.forEach(function(reveal, index) {
                reveal.innerHTML = getWord.charAt(index); 
        });
}

/* Assign the random word to the variable on top (for testing) */
function guessLetter(getWord) {
    const showWord = document.getElementById("topic");
    let changeText = document.getElementById("selectText");
    showWord.style.display = "block";
    changeText.innerHTML = "The word has " + getWord.length + " letters";
}

/* Register the keys user presses and compare to each letter of the word */
function playGame(getWord, wrongCount, rightCount, correctArray, hiddenArray, gameFinished) {

    let keyList = document.querySelectorAll(".keys");
    let getKey = document.querySelectorAll(".boxes");

    let keyPressed = "";
    keyList.forEach(function(e){
        e.addEventListener("click", (event) => {

            /* Register the key pressed */
            keyPressed = e.innerHTML;
            e.style.backgroundColor = "#F24545"
            console.log("keyPressed:", keyPressed);
            console.log("getWord length:", getWord.length);

            let isCorrect = false; // false = wrong guess; true = right guess.

            /* Loop through each box to change its properties*/
            getKey.forEach(function(boxElement, index){
                    let char = getWord.charAt(index); 

                    if (keyPressed.toUpperCase() == char.toUpperCase()) {
                            boxElement.innerHTML = char;
                            isCorrect = true;
                            correctArray.push(char);
                            console.log("correctArray: " + correctArray);
                            console.log("hiddenArray: " + hiddenArray);
                            e.style.backgroundColor = "#45F250";

                                if (correctArray.length == hiddenArray.length) {
                                    gameFinished = true;
                                    messageBox(gameFinished);
                                    
                                }
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
                    drawHangman(wrongCount);

                if(wrongCount >= 9) {
                    
                    revealWord(getWord);
                    gameFinished = true;
                    messageBox(gameFinished);
                }
            }
        });
    });
}

/* Prompt player to play again or not */
function messageBox(gameFinished) {
    let getPrompt = document.getElementById("finishPrompt");
    let playAgain = document.getElementById("yesBtn");

    if (gameFinished) {
        setTimeout(() =>{
            getPrompt.style.display = "flex";
        }, 1000)
    }
    playAgain.addEventListener("click", (event) => {
        getPrompt.style.display = "none";
        const startBtn = document.getElementById("start-btn");
        startBtn.addEventListener("click", (event) => {
        
            let selectText = document.getElementById("selectText");
            let title = document.getElementById("title");
            let selection = document.getElementById("select-btn");
        
            title.style.display = "none";
            startBtn.style.display = "none";
            selection.style.display = "flex";
            selectText.style.display = "block";
        })
    });
}


/* Draw hangman */
 // Function to draw the hangman
 function drawHangman(wrongCount) {
    const canvas = document.getElementById('hangmanCanvas');
    const ctx = canvas.getContext('2d');
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the scaffold
    ctx.beginPath();
    ctx.moveTo(20, 380);
    ctx.lineTo(120, 380);
    ctx.stroke();

    // Draw the horizontal bar
    if (wrongCount >= 1) {
      ctx.beginPath();
      ctx.moveTo(70, 380);
      ctx.lineTo(70, 80);
      ctx.stroke();
    }

    // Draw the vertical bar
    if (wrongCount >= 2) {
      ctx.beginPath();
      ctx.moveTo(70, 80);
      ctx.lineTo(220, 80);
      ctx.stroke();
    }

    // Draw the rope
    if (wrongCount >= 3) {
      ctx.beginPath();
      ctx.moveTo(220, 80);
      ctx.lineTo(220, 120);
      ctx.stroke();
    }

    // Draw the head
    if (wrongCount >= 4) {
      ctx.beginPath();
      ctx.arc(220, 150, 30, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw the body
    if (wrongCount >= 5) {
      ctx.beginPath();
      ctx.moveTo(220, 180);
      ctx.lineTo(220, 280);
      ctx.stroke();
    }

    // Draw the left arm
    if (wrongCount >= 6) {
      ctx.beginPath();
      ctx.moveTo(220, 200);
      ctx.lineTo(180, 220);
      ctx.stroke();
    }

    // Draw the right arm
    if (wrongCount >= 7) {
      ctx.beginPath();
      ctx.moveTo(220, 200);
      ctx.lineTo(260, 220);
      ctx.stroke();
    }

    // Draw the left leg
    if (wrongCount >= 8) {
      ctx.beginPath();
      ctx.moveTo(220, 280);
      ctx.lineTo(180, 330);
      ctx.stroke();
    }

    // Draw the right leg
    if (wrongCount >= 9) {
      ctx.beginPath();
      ctx.moveTo(220, 280);
      ctx.lineTo(260, 330);
      ctx.stroke();
    }

      // Additional decorative elements (customize as needed)
    ctx.fillStyle = '#000'; // Set fill color
    ctx.font = '36px Arial'; // Set font with increased size

    if (wrongCount === 9) {
        // Display a sad face if the hangman is fully drawn
        ctx.fillText('😞', 200, 50);
      } else if (wrongCount > 0) {
        // Display a sad face for each wrong attempt
        for (let i = 0; i < wrongCount; i++) {
          ctx.fillText('😢', 180 + i * 30, 50);
        }
      }
    }
