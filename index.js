//have a section to display whose turns it
const changeTurn = document.getElementById('changeTurn');
const board = document.getElementById('board');
const resetButton = document.getElementById('resetButton');

//gameCells -s an array
const gameCells = document.querySelectorAll('.game-cell');
console.log("Game cells:", gameCells);



gameCells.forEach(

        (gameCell, index) => {
    console.log(index,"Game Cell:", gameCell.id);

    gameCell.addEventListener('click', () => {
    console.log("Game cell has been clicked!!");

    // gameCell.textContent = "x"
    gameCell.innerHTML = "x"
    })

        }
)




/* List of cells */
const cellOne = document.getElementById('1');
const cellTwo = document.getElementById('2');
const cellThree = document.getElementById('3');
const cellFour = document.getElementById('4');
const cellFive = document.getElementById('5');
const cellSix = document.getElementById('6');
const cellSeven = document.getElementById('7');
const cellEight = document.getElementById('8');
const cellNine = document.getElementById('9');



//player x goes first
//player o goes second


//