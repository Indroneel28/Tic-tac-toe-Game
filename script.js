console.log("Welcome to Tic Tac Toe")

let music= new Audio("./Music/music.mp3");
let audioturn= new Audio("./Music/ting.mp3");
let gameOver= new Audio("./Music/draw.mp3");
let turn= "X";
let over= false;
let count= 0;

//Function to change the turn
const changeTurn= ()=>{
    return turn==="X" ? "0" : "X";
}

//Function to check for a win
const checkWin=()=>{
    let boxtext= document.getElementsByClassName("botext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!='')){
            document.querySelector(".info").innerText= boxtext[e[0]].innerText+" Won"
            over=true;

            document.querySelector(".image img").style.display="inline-block";
            music.play();
            check= false;
        }
    })
}

//Our Game Logic
// music.play();
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector(".botext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            count++;
            boxtext.innerText= turn;
            turn= changeTurn();
            audioturn.play();
            checkWin();
            if(!over){
                document.getElementsByClassName("info")[0].innerText= "Turn for "+turn;
            }   
            if(count==9 && !over){
                document.querySelector(".info").innerHTML= "It's a Draw!";
                over= true;
                gameOver.play();
            }
        }
    })
})


//Reset Button
document.getElementById("reset").addEventListener('click', ()=>{
    const botextElements = document.getElementsByClassName("botext");
    for (let i = 0; i < botextElements.length; i++) {
        botextElements[i].innerText = '';
    }
    turn = "X";
    over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".image img").style.display = "none";
    music.pause();
    music.currentTime= 0; //Next time it will start from the beginning
    count=0;
})