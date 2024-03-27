const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const scoreBtn = document.querySelectorAll(".btn")
const onBtn = document.querySelector(".btn-on");
const mainBtn = document.querySelector("#main-btn");

mainBtn.addEventListener("click", gameStart);

scoreBtn.forEach(btn => btn.addEventListener('click',()=>{
    if(mainBtn.textContent !== "Start"){
        switch(btn.id){
            case "firstScoreAddOne": score1.value = parseInt(score1.value)+1;
            break;
            case "firstScoreAddTwo": score1.value = parseInt(score1.value)+2;
            break;
            case "firstScoreAddThree": score1.value = parseInt(score1.value)+3;
            break;
            case "secondScoreAddOne": score2.value = parseInt(score2.value)+1;
            break;
            case "secondScoreAddTwo": score2.value = parseInt(score2.value)+2;
            break;
            case "secondScoreAddThree": score2.value = parseInt(score2.value)+3;
            break;
        }
    }
}))

function gameStart(){
    if(mainBtn.textContent === "Start"){
        scoreBtn.forEach(btn => {
            btn.classList.remove("btn-off");
            btn.classList.add("btn-on")
        })
        mainBtn.style.backgroundColor = "#0EA5E9"
        mainBtn.textContent = "Restart";
    }
    else{
        score1.value = 0;
        score2.value = 0;    
    }
}