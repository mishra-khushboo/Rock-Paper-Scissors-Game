let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";

    }
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw.Play again.";
    msg.style.backgroundColor = "#081b31";

}

const genCompChoice = ()=>{
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }else {
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
 })