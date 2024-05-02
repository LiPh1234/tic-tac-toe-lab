//1) Define the required variables used to track the state of the game.

let board = ["", "", "", "", "o", "", "", "", "x"]
let turn = "x"
let winner = false
let tie = false

//2) Store cached element references.

let squareEls = document.querySelectorAll(".board div")
//console.log(squareEls)

const messageEl = document.querySelector("#message")
//console.log(messageEl)

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

function init(gameState) {
    //console.log("gameState")
    render()
}

init()

//4) The state of the game should be rendered to the user.

function render() {

}



function updateBoard() {
    board.forEach((boardCell, boardCellidx) => {
        // console.log(boardCellidx)
        if (boardCell === "x") {
            //console.log ("x", squareEls[boardCellidx]) 
            squareEls[boardCellidx].innerText = boardCell
        } else if (boardCell === "o") {
            //console.log ("o", squareEls[boardCellidx])    
            squareEls[boardCellidx].innerText = boardCell
        }
        render()
    })

}

updateBoard()

function updateMessage() {
    if (winner === false && tie === false) {
        //console.log ("It is",turn,"'s turn")
        messageEl.innerText = "It is " + turn + "'s turn"
    } else if (winner === false && tie === true) {
        //console.log ("Its a tie!")
        messageEl.innerText = "It's a tie!"
    } else { //console.log (turn, "won!")
        messageEl.innerText = "turn" + " won!"
    }
    render()
}

updateMessage()

//5) Define the required constants.

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]


//6) Handle a player clicking a square with a `handleClick` function.


squareEls.forEach((squareEl) => {
    //console.log(squareEl)
    squareEl.addEventListener('click', handleClick)
})

function placePiece(index) {
    return board[index] = turn
}

//console.log (placePiece(3))
console.log(board)

function handleClick(event) {
    //console.log(event.target.id)
    const squareIndex = Number(event.target.id)
    //console.log(squareIndex)
    placePiece(squareIndex)
    if (board[squareIndex] === "x" || board[squareIndex] === "o" || winner === true) {
        return
    }

}


//function(checkForWinner)



//7) Create Reset functionality 