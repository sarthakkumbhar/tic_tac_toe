let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".winner-ctr");
let msg = document.querySelector("#msg");

let turnO = true;//player x, player o

const winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
]

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Button was clicked")
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if(pos0val != "" && pos1val != "" && pos2val != ""){
            if (pos0val===pos1val && pos1val===pos2val) {
                console.log("Winner", pos0val)
                showWinner(pos0val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);