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
