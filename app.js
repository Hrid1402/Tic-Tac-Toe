const btns = document.querySelectorAll(".nb");
const playAgainBTN = document.querySelector("#playAgain");
playAgainBTN.addEventListener("click",() =>{
    console.log("xd");
    board.newGame();
});


const btn0 = document.querySelector("#btn0");
let pOneTurn = true;
btn0.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(0), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(0), player2.simbol);
        board.checkGame(player2.simbol);
    }
    
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(1), player1.simbol);
        board.checkGame(player2.simbol);
    }
    else{
        board.play(player2.play(1), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(2), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(2), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(3), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(3), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(4), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(4), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(5), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(5), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(6), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(6), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(7), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(7), player2.simbol);
        board.checkGame(player2.simbol);
    }
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click",() =>{
    if(pOneTurn){
        board.play(player1.play(8), player1.simbol);
        board.checkGame(player1.simbol);
    }
    else{
        board.play(player2.play(8), player2.simbol);
        board.checkGame(player2.simbol);
    }
});



function gameBoard(){
    let gameBoard = ["0","1","2",
                "3","4","5"
                ,"6","7", "8"];
    const play = (position, simbol) => {

        gameBoard[Number(position)] = simbol;
        btns[Number(position)].textContent = simbol;
        btns[Number(position)].disabled = true;

        console.log("___________");
        console.log(gameBoard[0] +" | "+ gameBoard[1] + " | "+ gameBoard[2]);

        console.log(gameBoard[3] +" | "+ gameBoard[4] + " | "+ gameBoard[5]);
                
        console.log(gameBoard[6] +" | "+ gameBoard[7] + " | "+ gameBoard[8]);

        
        if(pOneTurn){
            pOneTurn = false;
        }
        else{
            pOneTurn = true;
        }

        
    };
    const newGame = () => {
        gameBoard = ["0","1","2",
                "3","4","5"
                ,"6","7", "8"];
        btns.forEach(button => {
            button.textContent = "";
            button.disabled = false;
        });
        console.log(gameBoard[0] +" | "+ gameBoard[1] + " | "+ gameBoard[2]);

        console.log(gameBoard[3] +" | "+ gameBoard[4] + " | "+ gameBoard[5]);
                
        console.log(gameBoard[6] +" | "+ gameBoard[7] + " | "+ gameBoard[8]);
        
    }
    const checkGame = (simbol) => {
        if(
        //row 1   __
        (gameBoard[0] == simbol && gameBoard[1] == simbol && gameBoard[2] == simbol) || 
        //row 2   __
        (gameBoard[3] == simbol && gameBoard[4] == simbol && gameBoard[5] == simbol) ||
        //row 3   __
        (gameBoard[6] == simbol && gameBoard[7] == simbol && gameBoard[8] == simbol) ||
        //column 1  |
        (gameBoard[0] == simbol && gameBoard[3] == simbol && gameBoard[6] == simbol) ||
        //column 2     |
        (gameBoard[1] == simbol && gameBoard[4] == simbol && gameBoard[7] == simbol) ||
        //column 3        |
        (gameBoard[2] == simbol && gameBoard[5] == simbol && gameBoard[8] == simbol) ||
        //diagonal 1   \
        (gameBoard[0] == simbol && gameBoard[4] == simbol && gameBoard[8] == simbol) ||
        //diagonal 2    /
        (gameBoard[6] == simbol && gameBoard[4] == simbol && gameBoard[2] == simbol)
        ){
            alert("Winner");
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
player1 = player("p1", "x");
player2 = player("p2", "o");

board.newGame();






