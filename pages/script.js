const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", (event) => {
    let title = document.getElementById("title");
    let body = document.getElementById("body");
    startBtn.style.display = "none";
    title.style.display = "flex";
    body.style.display = "flex";
    
});