let grid=[
    ["","",""],
    ["","",""],
    ["","",""]
]; //x,y
let turn="X";
let wins=[
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[2,0],[1,1],[0,2]]]

function place(x,y){
    grid[x][y]=turn;
    turn=(turn=="X"?"O":"X");
    console.log(detectWin());
}
function detectWin(){
    for (let i=0;i<8;i++){
        let c=wins[i];
        if (grid[c[0][0]][c[0][1]]==grid[c[1][0]][c[1][1]] && grid[c[1][0]][c[1][1]]==grid[c[2][0]][c[2][1]] && (grid[c[2][0]][c[2][1]]=="X" || grid[c[2][0]][c[2][1]]=="O")){
            return true;
        }
    }
    return false;
}