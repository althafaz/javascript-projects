const whoWon = require('../RPS');

describe('Check who won', () => { 
    it('Check Player 2 wins!',()=>{
        expect(whoWon('rock','paper')).toBe('Player 2 wins!');
        expect(whoWon('paper','scissors')).toBe('Player 2 wins!');
        expect(whoWon('scissors','rock')).toBe('Player 2 wins!');
     });

     it('If Ties',()=>{
        expect(whoWon('rock','rock')).toBe('TIE!');
        expect(whoWon('paper','paper')).toBe('TIE!');
        expect(whoWon('scissors','scissors')).toBe('TIE!');
     });

     it('Check Player 1 wins!',()=>{
        expect(whoWon('paper','rock')).toBe('Player 1 wins!');
        expect(whoWon('scissors','paper')).toBe('Player 1 wins!');
        expect(whoWon('rock','scissors')).toBe('Player 1 wins!');
     });

     it('Invalid input',()=>{
        expect(whoWon('hello','world')).toBe('Invalid input');
     });
});