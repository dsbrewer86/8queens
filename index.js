function checkDiagonal(board, newCoord) {

  let newHorizontal = getNumberFromLetter(newCoord[0]);
  let newVertical = newCoord[1];
  let newDifference = newHorizontal - newVertical;
  console.log("newDiff: " + newDifference);

  for (let i = 0; i < board.length; i++) {
    let horizontal = board[i][0];
    let vertical = board[i][1];

    horizontal = getNumberFromLetter(horizontal);

    let difference = horizontal - vertical;

    console.log("diff: " + difference);

    if (newDifference == difference) {
      return true;
    }

  }
  return false;
}
function checkHorandVert(board, newCoord) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == newCoord[0] || board[i][1] == newCoord[1]) {
      return true;
    }

  }
  return false;
}
function getNumberFromLetter(letter) {
  switch(letter) {
    case 'a':
      return 1;
    break;
    case 'b':
      return 2;
    break;
    case 'c':
      return 3;
    break;
    case 'd':
      return 4;
    break;
    case 'e':
      return 5;
    break;
    case 'f':
      return 6;
    break;
    case 'g':
      return 7;
    break;
    case 'h':
      return 8;
    break;
    default:
      return 'error';

  }
}
