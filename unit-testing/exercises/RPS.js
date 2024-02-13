function whoWon(player1,player2){
  let rps = ['rock','paper','scissors']
   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }

   if(!rps.includes(player1) && !rps.includes(player2)){
    return 'Invalid input'
   }
 
   return 'Player 1 wins!';
 }

 module.exports = whoWon;