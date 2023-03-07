let grid=["","","","","","","","",""];
//x,y
let turn="X";
let wins=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]];
let message=document.getElementById('message');
let gameOver=false;

function place(x){
    if (gameOver==false){
        grid[x]=turn;
        turn=(turn=="X"?"O":"X");
        message.innerHTML=`Turn: ${turn}`;
        print();
        detectWin();
    }
}
function detectWin(){
    for (let i=0;i<8;i++){
        let c=wins[i];
        if (grid[c[0]-1]==grid[c[1]-1] && grid[c[1]-1]==grid[c[2]-1] && grid[c[2]-1]=="X"){
            message.innerHTML=`X won!`;
            gameOver=true;
            console.log('yes');
        }
        else if (grid[c[0]-1]==grid[c[1]-1] && grid[c[1]-1]==grid[c[2]-1] && (grid[c[2]-1]=="O")){
            message.innerHTML="O won!";
            gameOver=true;
            console.log('yes');
        }
    }
    if(grid.every(e=>e!="")){
        message.innerHTML="Draw!";
        gameOver=true;
        console.log('draw :(');
    }
    console.log('not yet');
}

function print(){
    for (let i=0;i<9;i++){
        if (grid[i]!=""){
            document.getElementsByClassName("item")[i].innerHTML=grid[i];
        }
        else{
            document.getElementsByClassName("item")[i].innerHTML=`<button onclick='place(${i})'></button>`;
        }
    }
}

print();