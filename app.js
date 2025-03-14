let userSequence = [] ;
let gameSequence = [] ;

let level = 0 ; 
let gameStarted = false ;

let h2 = document.querySelector("h2");
// let p = document.querySelector("p");

let btns = ["pink","orange","teal","blue"];

let highestScore = 0 ;

document.addEventListener("keypress" , function(){
    if(gameStarted == false)
    {
        console.log("Game started!");
        gameStarted = true ;
    }
    levelUp();
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },250);
}

function levelUp()
{
    userSequence = [] ;
    level ++;
    highestScore = level ; 
    
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn =  document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    gameFlash(randomBtn);
}

function checkSequence(idx)
{
    // console.log("Current level : ", level);
    // let idx = level - 1 ;
    if(userSequence[idx] === gameSequence[idx])
    {
        if(userSequence.length == gameSequence.length)
        {
            setTimeout(levelUp,1000);
            
        }
        // console.log("same value");
    }
    else
    {
        console.log("Lost the game..");
        let p = document.createElement("p");
        document.querySelector("body").append(p);
        p.innerHTML = `Your highest score is <b>${highestScore}</b>`;
        h2.innerHTML = `Game Over! Your score was ${level} . <br> Press any key to start`;
        h2.style.color = "red";
        reset();
    }
}

function btnPress()
{
    // console.log(this);
    let btn = this ;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);
    console.log(userSequence);
    checkSequence(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started = false ; 
    gameSequence = [] ;
    userSequence = [] ;
    level = 0 ;
    highestScore = 0 ;
}