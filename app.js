let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newContainer=document.querySelector(".newContainer")
let newBtn=document.querySelector(".newBtn")
let msg=document.querySelector("#msg")
const winnerPattern=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [3,4,5]
];

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`
    newContainer.classList.remove("hide");
}

const disableBtn=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
}

const enableBtn=()=>{
    for(let box of boxes){
    box.disabled=false;
     box.innerText="";
    }
 }

let turnO=true;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        
        winnerCheck();
    });
    
});

const winnerCheck=()=>{
    for(let pattern of winnerPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!="" ){
            if(val1===val2 && val2===val3){
                console.log("winner",val1)
                showWinner(val1);
                disableBtn();
            }
        }
    }
   
    
}

reset.addEventListener("click",()=>{
    turnO=true;
    enableBtn();
    newContainer.classList.add("hide");
})

newBtn.addEventListener("click",()=>{
    turnO=true;
    enableBtn();
    newContainer.classList.add("hide");
})