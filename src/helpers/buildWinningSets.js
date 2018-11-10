function winSetBuilder(dimension=3) {
  return [
    ...getHorizontalWins(dimension),
    ...getVerticalWins(dimension),
    ...getDiagonalWins(dimension)
  ]
}

function getHorizontalWins(dimension) {
  const cells = [...Array(dimension*dimension).keys()]
  const wins = []

  while (cells.length) {
    wins.push(cells.splice(0,dimension))
  }

  return wins
}

function getVerticalWins(dimension) {
  const horizontalWins = getHorizontalWins(dimension)
  const verticalWins = []

  for (let i=0; i<dimension; i++) {
    verticalWins.push(horizontalWins.map(win => win[i]))
  }

  return verticalWins
}

function getDiagonalWins(dimension) {
  const horizontalWins = getHorizontalWins(dimension)
  const verticalWins = getVerticalWins(dimension)
  const diagonalWins = []

  diagonalWins.push(horizontalWins.reduce((memo, horizontalWin, i) => {
    return memo.concat(
      horizontalWin.filter(cell => verticalWins[i].indexOf(cell) >= 0)
    )
  }, []))

  diagonalWins.push(horizontalWins.reverse().reduce((memo, horizontalWin, i) => {
    return memo.concat(
      horizontalWin.filter(cell => verticalWins[i].indexOf(cell) >= 0)
    )
  }, []))

  return diagonalWins
}

export default winSetBuilder
