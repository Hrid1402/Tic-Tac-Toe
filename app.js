const btns = document.querySelectorAll(".nb");
const playAgainBTN = document.querySelector("#playAgain");
const mainText = document.querySelector("#mainText");
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector("#closeDialog");
const input1 = document.querySelector("#inputP1");
const input2 = document.querySelector("#inputP2");

const winColor = "#0e4e7e"
const textWinColor = "white";
closeBtn.addEventListener("click", () =>{
    if(input1.value == "" || input2.value == "")
    {
        alert("Complete the spaces");
    }else{
        dialog.close();
        player1 = player(input1.value, "x");
        player2 = player(input2.value, "o");
        
        board.newGame();
    }
    
});

dialog.showModal();
playAgainBTN.addEventListener("click",() =>{
    console.log("xd");
    board.newGame();
});


const btn0 = document.querySelector("#btn0");
let pOneTurn = true;
btn0.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(0), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(0), player2);
        board.checkGame(player2);
    }
    
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(1), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(1), player2);
        board.checkGame(player2);
    }
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(2), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(2), player2);
        board.checkGame(player2);
    }
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(3), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(3), player2);
        board.checkGame(player2);
    }
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(4), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(4), player2);
        board.checkGame(player2);
    }
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(5), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(5), player2);
        board.checkGame(player2);
    }
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(6), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(6), player2);
        board.checkGame(player2);
    }
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(7), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(7), player2);
        board.checkGame(player2);
    }
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(8), player1);
        board.checkGame(player1);
    }
    else{
        board.play(player2.play(8), player2);
        board.checkGame(player2);
    }
});



function gameBoard(){
    let gameBoard = [".",".",".",
                ".",".","."
                ,".",".", "."];
    const play = (position, player) => {

        gameBoard[Number(position)] = player.simbol;
        btns[Number(position)].textContent = player.simbol;
        btns[Number(position)].disabled = true;

        console.log("___________");
        console.log(gameBoard[0] +" | "+ gameBoard[1] + " | "+ gameBoard[2]);

        console.log(gameBoard[3] +" | "+ gameBoard[4] + " | "+ gameBoard[5]);
                
        console.log(gameBoard[6] +" | "+ gameBoard[7] + " | "+ gameBoard[8]);

        
        if(pOneTurn){
            mainText.textContent = player2.name + " turn";
            pOneTurn = false;
        }
        else{
            mainText.textContent = player1.name + " turn";
            pOneTurn = true;
        }
        
        
    };
    const newGame = () => {
        playAgainBTN.style.opacity = "100";
        pOneTurn = true;
        mainText.textContent = player1.name + " turn";
        gameBoard = [".",".",".",
                ".",".","."
                ,".",".", "."];
        btns.forEach(button => {
            button.textContent = "";
            button.disabled = false;
            button.style.backgroundColor = "#c0e2fd";
            button.style.color = "#182c53";
        });
        console.log(gameBoard[0] +" | "+ gameBoard[1] + " | "+ gameBoard[2]);

        console.log(gameBoard[3] +" | "+ gameBoard[4] + " | "+ gameBoard[5]);
                
        console.log(gameBoard[6] +" | "+ gameBoard[7] + " | "+ gameBoard[8]);
        
    }
    const checkGame = (player) => {
        if (
            //row 1   __
            (gameBoard[0] == player.simbol && gameBoard[1] == player.simbol && gameBoard[2] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });
            btns[0].style.backgroundColor = winColor;
            btns[1].style.backgroundColor = winColor;
            btns[2].style.backgroundColor = winColor;

            btns[0].style.color = textWinColor;
            btns[1].style.color = textWinColor;
            btns[2].style.color = textWinColor;


        } else if (
            //row 2   __
            (gameBoard[3] == player.simbol && gameBoard[4] == player.simbol && gameBoard[5] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });
            btns[3].style.backgroundColor = winColor;
            btns[4].style.backgroundColor = winColor;
            btns[5].style.backgroundColor = winColor;

            btns[3].style.color = textWinColor;
            btns[4].style.color = textWinColor;
            btns[5].style.color = textWinColor;


        } else if (
            //row 3   __
            (gameBoard[6] == player.simbol && gameBoard[7] == player.simbol && gameBoard[8] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });

            btns[6].style.backgroundColor = winColor;
            btns[7].style.backgroundColor = winColor;
            btns[8].style.backgroundColor = winColor;

            btns[6].style.color = textWinColor;
            btns[7].style.color = textWinColor;
            btns[8].style.color = textWinColor;

        } else if (
            //column 1  |
            (gameBoard[0] == player.simbol && gameBoard[3] == player.simbol && gameBoard[6] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });

            btns[0].style.backgroundColor = winColor;
            btns[3].style.backgroundColor = winColor;
            btns[6].style.backgroundColor = winColor;

            btns[0].style.color = textWinColor;
            btns[3].style.color = textWinColor;
            btns[6].style.color = textWinColor;

        } else if (
            //column 2     |
            (gameBoard[1] == player.simbol && gameBoard[4] == player.simbol && gameBoard[7] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });

            btns[1].style.backgroundColor = winColor;
            btns[4].style.backgroundColor = winColor;
            btns[7].style.backgroundColor = winColor;

            btns[1].style.color = textWinColor;
            btns[4].style.color = textWinColor;
            btns[7].style.color = textWinColor;

        } else if (
            //column 3        |
            (gameBoard[2] == player.simbol && gameBoard[5] == player.simbol && gameBoard[8] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });

            btns[2].style.backgroundColor = winColor;
            btns[5].style.backgroundColor = winColor;
            btns[8].style.backgroundColor = winColor;

            btns[2].style.color = textWinColor;
            btns[5].style.color = textWinColor;
            btns[8].style.color = textWinColor;

        } else if (
            //diagonal 1   \
            (gameBoard[0] == player.simbol && gameBoard[4] == player.simbol && gameBoard[8] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });

            btns[0].style.backgroundColor = winColor;
            btns[4].style.backgroundColor = winColor;
            btns[8].style.backgroundColor = winColor;

            btns[0].style.color = textWinColor;
            btns[4].style.color = textWinColor;
            btns[8].style.color = textWinColor;

        } else if (
            //diagonal 2    /
            (gameBoard[6] == player.simbol && gameBoard[4] == player.simbol && gameBoard[2] == player.simbol)
        ) {
            mainText.textContent = player.name + " WINS!!!";
            btns.forEach(button => {
                button.disabled = true;
            });

            btns[6].style.backgroundColor = winColor;
            btns[4].style.backgroundColor = winColor;
            btns[2].style.backgroundColor = winColor;

            btns[6].style.color = textWinColor;
            btns[4].style.color = textWinColor;
            btns[2].style.color = textWinColor;

        }
        ///////////////////////        
        else if(!gameBoard.includes(".")){
            mainText.textContent = "Draw";
            btns.forEach(button => {
                button.disabled = true;
            });
            
        }
    }
    return {play, newGame, checkGame}
}

function player(name, simbol){
    const play = (position) =>{
        return position;
    };
    return {name, simbol, play}
}

board = gameBoard();









