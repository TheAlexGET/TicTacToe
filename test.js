

//IDEA: add an localStorage so when you add new players or start game with AI
//the page is reloadig but data is saving, and delete data when player click on restart button


//creating game
window.onload = function () {
  class Move {
    constructor() {
      let id;
    }
  }
  let player1 = null;
  let player2 = null;
  let Game = {
    draw: function(board){
      for (i = 0; i < 9; i++) {
        if (board[i].textContent == "") {
          return false;
        }
      }
      return true;
    },
    evaluate: function (board) {
      for (i = 0; i < 7; i += 3) {
        if (
          board[i] == board[i + 1] &&
          board[i + 1] == board[i + 2]
        ) {
          if (board[i] == "X") {
            return +10;
          } else if (board[i] == "O") {
            return -10;
          }
        }
      }
      for (i = 0; i < 3; i++) {
        if (
          board[i] == board[i + 3] &&
          board[i + 3] == board[i + 6]
        ) {
          if (board[i] == "X") {
            return +10;
          } else if (board[i] == "O") {
            return -10;
          }
        }
      }
      if (
        board[0] == board[4] &&
        board[4] == board[8]
      ) {
        if (board[0] == "X") {
          return +10;
        } else if (board[0] == "O") {
        }
      }
      if (
        board[2] == board[4] &&
        board[4] == board[6]
      ) {
        if (board[2] == "X") {
          return +10;
        } else if (board[2] == "O") {
          return -10;
        }
    }
    return 0
    },

    board: function () {
      return document.querySelectorAll("button");
    },
     end: function () {
      for (i = 0; i < 7; i += 3) {
        if (
          Game.board()[i].textContent == Game.board()[i + 1].textContent &&
          Game.board()[i + 1].textContent == Game.board()[i + 2].textContent
        ) {
          if (Game.board()[i].textContent == "X") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player1.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
            return +10;
          } else if (Game.board()[i].textContent == "O") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player2.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
            return -10;
          }
        }
      }
      for (i = 0; i < 3; i++) {
        if (
          Game.board()[i].textContent == Game.board()[i + 3].textContent &&
          Game.board()[i + 3].textContent == Game.board()[i + 6].textContent
        ) {
          if (Game.board()[i].textContent == "X") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player1.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
            return +10;
          } else if (Game.board()[i].textContent == "O") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player2.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
            return -10;
          }
        }
      }
      if (
        Game.board()[0].textContent == Game.board()[4].textContent &&
        Game.board()[4].textContent == Game.board()[8].textContent
      ) {
        if (Game.board()[0].textContent == "X") {
          document.querySelector(
            "h1"
          ).textContent = `A castigat: ${player1.playerName}!!!`;
          Game.board().forEach((key) => {
            return (key.disabled = true);
          });
          return +10;
        } else if (Game.board()[0].textContent == "O") {
          document.querySelector(
            "h1"
          ).textContent = `A castigat: ${player2.playerName}!!!`;
          Game.board().forEach((key) => {
            return (key.disabled = true);
          });
          return -10;
        }
      }
      if (
        Game.board()[2].textContent == Game.board()[4].textContent &&
        Game.board()[4].textContent == Game.board()[6].textContent
      ) {
        if (Game.board()[2].textContent == "X") {
          document.querySelector(
            "h1"
          ).textContent = `A castigat: ${player1.playerName}!!!`;
          Game.board().forEach((key) => {
            return (key.disabled = true);
          });
          return +10;
        } else if (Game.board()[2].textContent == "O") {
          document.querySelector(
            "h1"
          ).textContent = `A castigat: ${player2.playerName}!!!`;
          Game.board().forEach((key) => {
            return (key.disabled = true);
          });
          return -10;
        }
      }
    },
    isMovesLeft: function (board) {
      for (i = 0; i < 9; i++) {
        if (board[i] == "") {
          return true;
        }
      }
      return false;
    },
  };

  //creating Player
  const Player = (playerName, playerSign) => {
    return { playerName, playerSign };
  };

  //BUTTONS
  //restart button
  document.querySelector("#restart").onclick = function () {
    return window.location.reload();
  };
  //AI button
  document.querySelector("#play_AI").onclick = function () {
    player1 = Player(prompt("Player1 insert your name:"), "X");
    player2 = Player("AI", "O");
    return (document.querySelector("#newPlayer").disabled = true);
  };
  //init players when player click the button
  document.querySelector("#newPlayer").onclick = function () {
    player1 = Player(prompt("Player1 insert your name:"), "X");
    player2 = Player(prompt("Player2 insert your name:"), "O");
    return (document.querySelector("#play_AI").disabled = true);
  };

  let gameStatus = {
    turn: 1,
  };

  //render function
  const render = (() => {
    for (i = 0; i < Game.board().length; i++) {
      //done
      let num = i;
      Game.board()[i].onclick = function () {
        if (player1 == null) {
          return alert("Create new Players please ;)");
        }
        if (gameStatus.turn === 1) {
          if (Game.board()[num].textContent != "") {
            //check function if sign isnt added yet
            return;
          }
          Game.board()[num].textContent = player1.playerSign;
          if(Game.draw(Game.board())){
            document.querySelector(
              "h1"
            ).textContent = `A castigat: Prietenia!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
            return
          }
          gameStatus.turn -= 1;
        } else if (
          gameStatus.turn === 0 &&
          document.querySelector("#newPlayer").disabled == false
        ) {
          if (Game.board()[num].textContent != "") {
            //check function if sign isnt added yet
            return;
          }
          Game.board()[num].textContent = player2.playerSign;
          gameStatus.turn += 1;
        }

        if (
          gameStatus.turn === 0 &&
          document.querySelector("#newPlayer").disabled == true
        ) {
          //Minimax
          function minimax(board, depth, isMax) {
            let score = Game.evaluate(board);
          
            if (score == 10) return score;
          
            if (score == -10) return score;
          
            if (Game.isMovesLeft(board) == false) {
              return 0;
            }
          
            if (isMax) {
              let best = -1000;
          
              for (let i = 0; i < 9; i++) {
                if (board[i] == "") {
                  board[i] = player1.playerSign;
          
                  best = Math.max(best, minimax(board,
                    depth + 1, !isMax));
          
                  board[i] = "";
                }
              }
              return best;
            } else {
              let best = 1000;
          
              for (let i = 0; i < 9; i++) {
                if (board[i] == "") {
                  board[i] = player2.playerSign;
          
                  best = Math.min(best, minimax(board,
                    depth + 1, !isMax));
          
                  board[i] = "";
                }
              }
              return best;
            }
          }

          function findBestMove() {
            let bestVal = 1000;
            let bestMove = new Move();
            bestMove.id = -1;
          
            for (let i = 0; i < 9; i++) {
              if (board[i] == "") {
                board[i] = player2.playerSign;
          
                let moveVal = minimax(board, 0, true);
          
                board[i] = "";
          
                if (moveVal < bestVal) {
                  bestMove.id = i;
                  bestVal = moveVal;
                }
              }
            }
            Game.board()[bestMove.id].textContent = 'O'
            Game.end()
            gameStatus.turn += 1;
          }
          //Minimax
          let board = [] //testing
          for(i = 0; i < 9; i++){
            board[i] = Game.board()[i].textContent
          }
          findBestMove(board); //testing
        }
        Game.end()
      };
    }
  })();
};
