const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", (event) => {
    let mainContent = document.getElementById("main-content");
    let title = document.getElementById("title");
    title.style.display = "none";
    mainContent.style.display = "flex";
    startBtn.style.display = "none";
    body.style.display = "flex";
    
});