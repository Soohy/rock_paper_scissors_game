let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#Comp");


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You kicked the ass of your opponent!( your ${userChoice} beats ${compChoice})`;
        msg.style.backgroundColor="#E54B4B";

    }
    else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You Messed up, your luck is in gutter! (${compChoice} beats your ${userChoice})`;
        msg.style.backgroundColor="#4EA699";
    }
};

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
   const rIdx = Math.floor(Math.random()*3);
   return option[rIdx];
};

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor="#FFA987";
};
const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);

    const compChoice = genCompChoice();
    console.log("computer choice:",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
         let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
};




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);


    })
});