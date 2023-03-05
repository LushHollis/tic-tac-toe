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
    [3,5,7]]

function place(x){
    grid[x]=turn;
    turn=(turn=="X"?"O":"X");
    print();
    console.log(detectWin());
}
function detectWin(){
    for (let i=0;i<8;i++){
        let c=wins[i];
        if (grid[c[0]]==grid[c[1]] && grid[c[1]]==grid[c[2]] && (grid[c[2]]=="X" || grid[c[2]]=="O")){
            return true;
        }
    }
    return false;
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