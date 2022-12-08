/*
Создайте проект с файлами HTML, CSS и Javascript и настройте репозиторий Git. (done)

Вы представите игровую доску как массив внутри объекта Game. Информация о игроках также будет храниться в объектах... и вы, вероятно создадите объект, который 
будет контролировать ход самой игры.

Ваша главная задача - иметь как можно меньше глобального кода. Попробуйте спрятать все внутри модуля или фабрики. Закономерность: если вам нужно что-то в ЕДИНСТВЕННОМ экземпляре 
(game, displayController), используйте модуль. Если вам нужно что-то многократно (игроки к примеру!), созавайте их с помощью фабрики.
Добавьте HTML и напишите функцию JavaScript, которая будет отображать содержимое массива игровой доски на веб-страницу (сейчас вы можете просто вручную заполнить массив X и O).

Создайте функции, позволяющие игрокам добавлять отметку в определенное место на доске (привязать к DOM). Не забудьте сделать проверку, которая мешает игрокам ставить маркер в местах,
которые уже заняты!

Тщательно продумайте, где должен находиться каждый кусочек логики вашей программы. Каждый кусочек функциональности должен уместиться в объектах игры, игрока или игрового поля...
Важно поместить их в логичные места. Потратив немного времени на мозговой штурм, вы можете значительно облегчить себе жизнь!
Добавьте логику, которая проверяет, когда игра окончена! Первый, выстроивший в ряд 3 своих фигуры по вертикали, горизонтали или диагонали, выигрывает.

Позвольт
е игрокам ввести свои имена, добавьте кнопку для запуска / перезапуска игры и элемент отображения, который поздравляет победившего игрока!
*/

//creating game
window.onload = function () {
  let player1 = null;
  let player2 = null;
  let Game = {
    board: function () {
      return document.querySelectorAll("button");
    },
  };

  //creating Player
  const Player = (playerName, playerSign) => {
    return { playerName, playerSign };
  };
  //future // init players when player click the button
  document.querySelector("#newPlayer").onclick = function () {
    player1 = Player(prompt("Player1 insert your name:"), "X");
    player2 = Player(prompt("Player2 insert your name:"), "O");
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
        let board = [
          [
            Game.board()[0].textContent,
            Game.board()[1].textContent,
            Game.board()[2].textContent,
          ],
          [
            Game.board()[3].textContent,
            Game.board()[4].textContent,
            Game.board()[5].textContent,
          ],
          [
            Game.board()[6].textContent,
            Game.board()[7].textContent,
            Game.board()[8].textContent,
          ],
        ];
        if (player1 == null) {
          return alert("Create new Players please ;)");
        }
        if (gameStatus.turn === 1) {
          if (Game.board()[num].textContent != "") {
            //check function if sign isnt added yet
            return;
          }
          Game.board()[num].textContent = player1.playerSign;
          gameStatus.turn -= 1;
        } else if (gameStatus.turn === 0) {
          if (Game.board()[num].textContent != "") {
            //check function if sign isnt added yet
            return;
          }
          Game.board()[num].textContent = player2.playerSign;
          gameStatus.turn += 1;
        }
        for(i = 0; i < 7; i += 3) {
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
            } else if (Game.board()[i].textContent == "O") {
              document.querySelector(
                "h1"
              ).textContent = `A castigat: ${player2.playerName}!!!`;
              Game.board().forEach((key) => {
                return (key.disabled = true);
              });
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
            } else if (Game.board()[i].textContent == "O") {
              document.querySelector(
                "h1"
              ).textContent = `A castigat: ${player2.playerName}!!!`;
              Game.board().forEach((key) => {
                return (key.disabled = true);
              });
            }
          }
        }
        if(Game.board()[0].textContent == Game.board()[4].textContent && Game.board()[4].textContent == Game.board()[8].textContent){
          if (Game.board()[0].textContent == "X") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player1.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
          } else if (Game.board()[0].textContent == "O") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player2.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
          }
        }
        if(Game.board()[2].textContent == Game.board()[4].textContent && Game.board()[4].textContent == Game.board()[6].textContent){
          if (Game.board()[2].textContent == "X") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player1.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
          } else if (Game.board()[2].textContent == "O") {
            document.querySelector(
              "h1"
            ).textContent = `A castigat: ${player2.playerName}!!!`;
            Game.board().forEach((key) => {
              return (key.disabled = true);
            });
          }
        }
      };
    }
  })();
};
