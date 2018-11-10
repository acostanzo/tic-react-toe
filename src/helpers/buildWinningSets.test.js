import buildWinningSets from './buildWinningSets'

describe('buildWinningSets', () =>{
  it('generates an array of winning sets for a default dimension of 3', () => {
    expect(buildWinningSets()).toEqual([
      // Horizontal Wins
      [0,1,2],
      [3,4,5],
      [6,7,8],


      // Vertical Wins
      [0,3,6],
      [1,4,7],
      [2,5,8],

      // Diagonal Wins
      [0,4,8],
      [6,4,2],
    ])
  })

  it('generates an array of winning sets for a given dimension', () => {
    expect(buildWinningSets(4)).toEqual([
      // Horizontal Wins
      [0,1,2,3],
      [4,5,6,7],
      [8,9,10,11],
      [12,13,14,15],

      // Vertical Wins
      [0,4,8,12],
      [1,5,9,13],
      [2,6,10,14],
      [3,7,11,15],

      // Diagonal Wins
      [0,5,10,15],
      [12,9,6,3],
    ])
  })
})
