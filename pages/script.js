

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

const selectTopic = document.querySelectorAll(".selectBtn");
selectTopic.forEach(function(e) { // Loop to add events to each selection button.
    e.addEventListener("click", (event) => {
        
        let hideSelection = document.getElementById("select-btn");
        
        hideSelection.style.display = "none";

        /* Conditions when select/click on each topic */
        if (e.innerHTML == "Animals") {
            /* Change background color */
            let toPink = document.getElementById("body");
            toPink.style.backgroundColor = "#FFDFF5";

            /* Call function to get a random word */
            let getRandomWord = randomWord(animalArr);
            console.log(String(getRandomWord));
        }
        else if (e.innerHTML == "Science") {
            /* Change background color */
            let toBlue = document.getElementById("body");
            toBlue.style.backgroundColor = "#DFE6F3";

            /* Call function to get a random word */
            let getRandomWord = randomWord(scienceArr);
            console.log(String(getRandomWord));
        }
        else if (e.innerHTML == "Activities") {
            /* Change background color */
            let toOrange = document.getElementById("body");
            toOrange.style.backgroundColor = "#FFE4CA";

            /* Call function to get a random word */
            let getRandomWord = randomWord(activitiesArr);
            console.log(String(getRandomWord));
        }
        else if (e.innerHTML == "Nature") {
            /* Change background color */
            let toGreen = document.getElementById("body");
            toGreen.style.backgroundColor = "#D7FFE2";

            /* Call function to get a random word */
            let getRandomWord = randomWord(natureArr);  
            console.log(String(getRandomWord));
        }
    })  
});

/* Get random word from each array */
function randomWord(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomWord = array[randomIndex];
    return randomWord;
}