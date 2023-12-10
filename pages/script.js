

/*  */
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

/* Assign random word here */
let getWord = "";
let hiddenArray = [];



const selectTopic = document.querySelectorAll(".selectBtn");
selectTopic.forEach(function(e) { // Loop to add events to each selection button.
    e.addEventListener("click", (event) => {
        
        let hideSelection = document.getElementById("select-btn");
        let showKeys = document.getElementById("keyboard");
        let showMain = document.getElementById("main-content");

        hideSelection.style.display = "none";
        showKeys.style.display = "flex";
        showMain.style.display = "flex";
        /* Conditions when select/click on each topic */
        if (e.innerHTML == "Animals") {
            /* Change background color */
            let toPink = document.getElementById("body");
            toPink.style.backgroundColor = "#FFDFF5";

            /* Call function to get a random word */
            let getRandomWord = randomWord(animalArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            fillArray(getWord);
            console.log(String(getRandomWord));
            console.log(getWord);
        }
        else if (e.innerHTML == "Science") {
            /* Change background color */
            let toBlue = document.getElementById("body");
            toBlue.style.backgroundColor = "#DFE6F3";

            /* Call function to get a random word */
            let getRandomWord = randomWord(scienceArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            console.log(String(getRandomWord));
        }
        else if (e.innerHTML == "Activities") {
            /* Change background color */
            let toOrange = document.getElementById("body");
            toOrange.style.backgroundColor = "#FFE4CA";

            /* Call function to get a random word */
            let getRandomWord = randomWord(activitiesArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            console.log(String(getRandomWord));
        }
        else if (e.innerHTML == "Nature") {
            /* Change background color */
            let toGreen = document.getElementById("body");
            toGreen.style.backgroundColor = "#D7FFE2";

            /* Call function to get a random word */
            let getRandomWord = randomWord(natureArr);
            getWord = getRandomWord;
            guessLetter(getWord);
            console.log(String(getRandomWord));
        }
    })
});


/* Slice and push each letter to empty array */
function fillArray (getWord) {
    for (i = 0; i < getWord.length; i++) {
        let char = getWord.charAt(i);
        hiddenArray.push(char);
    }
    console.log(hiddenArray);
}


/* Get random word from each array */
function randomWord(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomWord = array[randomIndex];
    return randomWord;
}

function guessLetter(getWord) {
    const showWord = document.getElementById("random-word");
    let changeText = document.getElementById("selectText");

    showWord.style.display = "block";
    showWord.innerHTML = getWord;

    changeText.innerHTML = "The word is: ";
}

function hideWord(getWord) {
    const showWord = document.getElementById("random-word");
    let changeText = document.getElementById("selectText");

}
