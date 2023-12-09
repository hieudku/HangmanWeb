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

const animalArr = ["hippopotamus", "seahorse", "antellop", "sparrow"];
const scienceArr = ["jupiter", "photosynthesis", "precipitation", "oxidation"]
const activitiesArr = ["bouldering", "football", "swimming", "camping"];
const natureArr = ["volcano", "earthquake", "hurricane", "atmosphere"];

const selectTopic = document.querySelectorAll(".selectBtn");
selectTopic.forEach(function(e) {
    e.addEventListener("click", (event) => {
        
        
        
        let toGreen = document.getElementById("body");
        let hideSelection = document.getElementById("select-btn");
        
        
        
        hideSelection.style.display = "none";



        if (e.innerHTML == "Animals") {
            let toPink = document.getElementById("body");
            toPink.style.backgroundColor = "#FFDFF5";
        }
        else if (e.innerHTML == "Science") {
            let toBlue = document.getElementById("body");
            toBlue.style.backgroundColor = "#DFE6F3";
        }
        else if (e.innerHTML == "Activities") {
            let toOrange = document.getElementById("body");
            toOrange.style.backgroundColor = "#FFE4CA";
        }
        else if (e.innerHTML == "Nature") {
            let toGreen = document.getElementById("body");
            toGreen.style.backgroundColor = "#D7FFE2";
        }
    })  
});