const generatedBoard = function (wQ, bQ) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let boardInner = [];
    for (let j = 0; j < 8; j++) {
      if ((wQ[0] === i && wQ[1] === j) || (bQ[0] === i && bQ[1] === j)) {
        boardInner.push(1);
      } else {
        boardInner.push(0);
      }
    }
    board.push(boardInner);
  }
  return board;
};

const queenThreat = function(generatedBoard) {
  if ((wQ[0] === bQ[0]) || (wQ[1] === bQ[1]) || (Math.abs(wQ[0]-bQ[0]) === (Math.abs(wQ[1]-bQ[1])))) {
    return true;
  } else {
    return false;
  }
};

let wQ = [0, 5];
let bQ = [5, 0];
console.log(generatedBoard(wQ,bQ));
console.log(queenThreat(generatedBoard));






