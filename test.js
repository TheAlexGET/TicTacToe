// const person = Object.create({}, {
//     name:{
//         value: 'Alex',
//         enumerable: true, // It will be visible in cicles and other functions
//         writable: true, // now we can change name
//         configurable: true, //now we can delete keys from objects
//     },
//     birthYear:{
//         value: 2006,
//         enumerable: false,
//         writable: false,
//         configurable: false,
//     },
//     age:{
//         get(){
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value){
//             console.log(true)
//         },
//     }
// })

// console.log(person.age)

// person.age = 10

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
    board: document.querySelectorAll("button"),
  };

  //creating Player
  let i = 0;
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

  const player1 = Player("Alex");
  const player2 = Player("Alisa");

  //game status checking

  let gameStatus = {
    turn: 1
  }
  console.log(gameStatus.turn += 1)
  //render function

  const render = ((player1, player2) => {
    for (i = 0; i < Gameboard.board.length; i++) { //not done yet
      let num = i;
      let turn = gameStatus.turn
      Gameboard.board[i].onclick = function(){
          Gameboard.board[num].textContent = 'X'
      }
    }
  })();
};
