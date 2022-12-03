
/*
Создайте проект с файлами HTML, CSS и Javascript и настройте репозиторий Git. (done)

Вы представите игровую доску как массив внутри объекта Gameboard. Информация о игроках также будет храниться в объектах... и вы, вероятно создадите объект, который 
будет контролировать ход самой игры.

Ваша главная задача - иметь как можно меньше глобального кода. Попробуйте спрятать все внутри модуля или фабрики. Закономерность: если вам нужно что-то в ЕДИНСТВЕННОМ экземпляре 
(gameBoard, displayController), используйте модуль. Если вам нужно что-то многократно (игроки к примеру!), созавайте их с помощью фабрики.
Добавьте HTML и напишите функцию JavaScript, которая будет отображать содержимое массива игровой доски на веб-страницу (сейчас вы можете просто вручную заполнить массив X и O).

Создайте функции, позволяющие игрокам добавлять отметку в определенное место на доске (привязать к DOM). Не забудьте сделать проверку, которая мешает игрокам ставить маркер в местах,
которые уже заняты!

Тщательно продумайте, где должен находиться каждый кусочек логики вашей программы. Каждый кусочек функциональности должен уместиться в объектах игры, игрока или игрового поля...
Важно поместить их в логичные места. Потратив немного времени на мозговой штурм, вы можете значительно облегчить себе жизнь!
Добавьте логику, которая проверяет, когда игра окончена! Первый, выстроивший в ряд 3 своих фигуры по вертикали, горизонтали или диагонали, выигрывает.

Позвольт
е игрокам ввести свои имена, добавьте кнопку для запуска / перезапуска игры и элемент отображения, который поздравляет победившего игрока!
*/

//creating gameBoard
window.onload = function () {
  const Gameboard = {
    board: function () {
      return document.querySelectorAll("button");
    },
  };

  //creating Player
  let i = 1;
  let playerSign = "X";
  const Player = (playerName) => {
    if (i === 0) {
      i++;
      playerSign = "O";
      return { playerName, playerSign };
    } else if (i === 1) {
      i--;
      playerSign = "X";
      return { playerName, playerSign };
    }
  };

  const player1 = Player(prompt('Player1 insert your name :)'));
  const player2 = Player(prompt('Player2 insert your name :)'));

  //game status checking

  let gameStatus = {
    turn: 1,
  };

  //future

  //render function
  const render = (() => {
    for (i = 0; i < Gameboard.board().length; i++) {
      //done
      let num = i;
      Gameboard.board()[i].onclick = function () {
        if (gameStatus.turn === 1) {
          if (Gameboard.board()[num].textContent != "") {
            //check function if sign isnt added yet
            return;
          }
          Gameboard.board()[num].textContent = player1.playerSign;
          gameStatus.turn -= 1;
        } else if (gameStatus.turn === 0) {
          if (Gameboard.board()[num].textContent != "") {
            //check function if sign isnt added yet
            return;
          }
          Gameboard.board()[num].textContent = player2.playerSign;
          gameStatus.turn += 1;
        }
        let matches = [
          //0, 1, 2
          `${Gameboard.board()[0].textContent}${
            Gameboard.board()[1].textContent
          }${Gameboard.board()[2].textContent}`,
          //0, 3, 6
          `${Gameboard.board()[0].textContent}${
            Gameboard.board()[3].textContent
          }${Gameboard.board()[6].textContent}`,
          //0, 4, 8
          `${Gameboard.board()[0].textContent}${
            Gameboard.board()[4].textContent
          }${Gameboard.board()[8].textContent}`,
          //3, 4, 5
          `${Gameboard.board()[3].textContent}${
            Gameboard.board()[4].textContent
          }${Gameboard.board()[5].textContent}`,
          //6, 7, 8
          `${Gameboard.board()[6].textContent}${
            Gameboard.board()[7].textContent
          }${Gameboard.board()[8].textContent}`,
          //1, 4, 7
          `${Gameboard.board()[1].textContent}${
            Gameboard.board()[4].textContent
          }${Gameboard.board()[7].textContent}`,
          //2, 4, 6
          `${Gameboard.board()[2].textContent}${
            Gameboard.board()[4].textContent
          }${Gameboard.board()[6].textContent}`,
        ];
        if (
          matches[0] == "XXX" ||
          matches[0] == "OOO" ||
          matches[1] == "XXX" ||
          matches[1] == "OOO" ||
          matches[2] == "XXX" ||
          matches[2] == "OOO" ||
          matches[3] == "XXX" ||
          matches[3] == "OOO" ||
          matches[4] == "XXX" ||
          matches[4] == "OOO" ||
          matches[5] == "XXX" ||
          matches[5] == "OOO" ||
          matches[6] == "XXX" ||
          matches[6] == "OOO" ||
          matches[7] == "XXX" ||
          matches[7] == "OOO" ||
          matches[8] == "XXX" ||
          matches[8] == "OOO"
        ) {
          Gameboard.board().forEach((key) => {return key.disabled = true})
          if(gameStatus.turn == 0){
            document.querySelector('#congrat').textContent = `A castigat: ${player1.playerName}!`
          }
          else if(gameStatus.turn == 1){document.querySelector('#congrat').textContent = `A castigat: ${player2.playerName}!`}
        }
      };
    }
  })();
};
