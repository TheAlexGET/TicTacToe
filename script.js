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
window.onload = function () {
  //code here
  let gameBoard = (() => {
    return document.querySelectorAll("button");
  })();
  let congrat = document.querySelector("#congrat");
  const displayController = (() => {
    let i = 0;
    const render = function () {
      gameBoard[0].onclick = function () {
        if (i === 0) {
          if (gameBoard[0].textContent == "") {
            gameBoard[0].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[0].textContent == "") {
            gameBoard[0].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[0].textContent == gameBoard[1].textContent &&
            gameBoard[1].textContent == gameBoard[2].textContent) ||
          (gameBoard[0].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[8].textContent) ||
          (gameBoard[0].textContent == gameBoard[3].textContent &&
            gameBoard[3].textContent == gameBoard[6].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[0].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[1].onclick = function () {
        if (i === 0) {
          if (gameBoard[1].textContent == "") {
            gameBoard[1].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[1].textContent == "") {
            gameBoard[1].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[0].textContent == gameBoard[1].textContent &&
            gameBoard[1].textContent == gameBoard[2].textContent) ||
          (gameBoard[1].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[7].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[1].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[2].onclick = function () {
        if (i === 0) {
          if (gameBoard[2].textContent == "") {
            gameBoard[2].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[2].textContent == "") {
            gameBoard[2].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[0].textContent == gameBoard[1].textContent &&
            gameBoard[1].textContent == gameBoard[2].textContent) ||
          (gameBoard[2].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[6].textContent) ||
          (gameBoard[2].textContent == gameBoard[5].textContent &&
            gameBoard[5].textContent == gameBoard[8].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[2].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[3].onclick = function () {
        if (i === 0) {
          if (gameBoard[3].textContent == "") {
            gameBoard[3].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[3].textContent == "") {
            gameBoard[3].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[0].textContent == gameBoard[3].textContent &&
            gameBoard[3].textContent == gameBoard[6].textContent) ||
          (gameBoard[3].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[5].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[3].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[4].onclick = function () {
        if (i === 0) {
          if (gameBoard[4].textContent == "") {
            gameBoard[4].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[4].textContent == "") {
            gameBoard[4].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[0].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[8].textContent) ||
          (gameBoard[1].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[7].textContent) ||
          (gameBoard[2].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[6].textContent) ||
          (gameBoard[3].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[5].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[4].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[5].onclick = function () {
        if (i === 0) {
          if (gameBoard[5].textContent == "") {
            gameBoard[5].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[5].textContent == "") {
            gameBoard[5].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[2].textContent == gameBoard[5].textContent &&
            gameBoard[5].textContent == gameBoard[8].textContent) ||
          (gameBoard[3].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[5].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[5].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[6].onclick = function () {
        if (i === 0) {
          if (gameBoard[6].textContent == "") {
            gameBoard[6].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[6].textContent == "") {
            gameBoard[6].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[0].textContent == gameBoard[3].textContent &&
            gameBoard[3].textContent == gameBoard[6].textContent) ||
          (gameBoard[6].textContent == gameBoard[7].textContent &&
            gameBoard[7].textContent == gameBoard[8].textContent) ||
          (gameBoard[2].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[6].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[6].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[7].onclick = function () {
        if (i === 0) {
          if (gameBoard[7].textContent == "") {
            gameBoard[7].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[7].textContent == "") {
            gameBoard[7].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[6].textContent == gameBoard[7].textContent &&
            gameBoard[7].textContent == gameBoard[8].textContent) ||
          (gameBoard[1].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[7].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[7].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
      gameBoard[8].onclick = function () {
        if (i === 0) {
          if (gameBoard[8].textContent == "") {
            gameBoard[8].textContent = "X";
            i++;
          }
        } else {
          if (gameBoard[8].textContent == "") {
            gameBoard[8].textContent = "O";
            i--;
          }
        }
        if (
          (gameBoard[6].textContent == gameBoard[7].textContent &&
            gameBoard[7].textContent == gameBoard[8].textContent) ||
          (gameBoard[0].textContent == gameBoard[4].textContent &&
            gameBoard[4].textContent == gameBoard[8].textContent) ||
          (gameBoard[2].textContent == gameBoard[5].textContent &&
            gameBoard[5].textContent == gameBoard[8].textContent)
        ) {
          //ITS working
          congrat.textContent = `Player ${gameBoard[8].textContent} a castigat!!!`;
          gameBoard.forEach((key) => {return key.disabled = true})
        }
      };
    };
    return render();
  })();
};