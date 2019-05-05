// board:   array with n elements;
//          each element will hold number of row containing queen;
//
// n:       number of queens left;
//
// totalCols: total number of columns;
////////////////////////////////////////////////////////////////////////////////


function attacked(board) {
  let last = board[board.length - 1];


  for (let i = 0; i < (board.length - 1); i++) {

    let rowDiff = Math.abs(last-board[i]);
    let colDiff = Math.abs((board.length - 1) - i);

    if (last == board[i]){
      return true;
    }
    else if (rowDiff == colDiff) {
      return true;
    }
  }
  return false;
}


function nextQueen(totalCols, n, board) {
  board = board || [];
  if (board.length == totalCols && !attacked(board)) {
    return board;
  }
  if (n == 0) {
    return board
  }

  for (let i = 0; i < totalCols; i++) {
    board.push(i);

    if (!attacked(board) && nextQueen(totalCols, n-1, board)) {

      return board;
    }
    board.pop();
  }
  return null;
}
