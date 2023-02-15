"use strict" // Строгий режим.

// Таймер.

// Получение элемента в константу.

const timeCount = document.querySelector('.timeCount');

// Присваивание временных значений.

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
timeCount.innerHTML = hours + ':' + minutes;

// Функции:

// Функция корректного значения времени и отображения его в элементе.

function timer() {
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    return timeCount.innerHTML = hours + ':' + minutes;
}

// Функция задержки.

async function delay(ms) {
  return new Promise(resolve =>
  setTimeout(resolve, ms));
}

// Цикличная функция динамического отображения значений времени.

async function showNowTime() {
  while (true) {
    timer();
    await delay(1000);
  }
}
showNowTime();

// Код игры:

// Получение элементов переменные/константы.

   const areaGame = document.querySelector('.areaGame');
   const titleOver = document.querySelector('.titleOver');
   const probablyResult = document.querySelector('.probablyResult');
   const winning = document.querySelector('.winning');
   const winningSum = document.querySelector('.winningSum');
   const downGame = document.querySelector('.downGame');
   const startBtn = document.querySelector('.startBtn');
   const counterSessions = document.querySelector('.counterSessions');
   let balance = document.querySelector('.balance');
   balance.innerHTML = 100;
   let numbersX = document.querySelector('.numbersX');
   let putBet = document.querySelector('.putBet');

// Присваивание значений переменным с игровыми данными.

  putBet.value = putBet.innerHTML;
  numbersX.value = numbersX.innerHTML;

// Делегирование событий игры.

startBtn.addEventListener("click", openGame);

// Функции:  

// Функция расчёта шанса игры.

   function getProbably(chance) {
     return Math.floor(Math.random() * 1000) < chance;
   }

// Функция проверки шанса и возвращение резульата.

   function showProbably() {
      if (getProbably(1)) {
        areaGame.style.background = "repeating-radial-gradient(#8040ff, #0f5330 100px)";
        areaGame.style.color = "#8040ff";
        probablyResult.innerHTML = "X1000";
        probablyResult.value = 1000;
      }
      else if (getProbably(10)) {
        areaGame.style.background = "repeating-radial-gradient(#fb37ff, #0f5330 100px)";
        areaGame.style.color = "#fb37ff";
        probablyResult.innerHTML = "X100";
        probablyResult.value = 100;
      }
      else if (getProbably(25)) {
        areaGame.style.background = "repeating-radial-gradient(#00ffad, #0f5330 100px)";
        areaGame.style.color = "#00ffad";
        probablyResult.innerHTML = "X50";
        probablyResult.value = 50;
      }
      else if (getProbably(100)) {
        areaGame.style.background = "repeating-radial-gradient(#33ff00, #0f5330 100px)";
        areaGame.style.color = "#33ff00";
        probablyResult.innerHTML = "X10";
        probablyResult.value = 10;
      }
      else if (getProbably(200)) {
        areaGame.style.background = "repeating-radial-gradient(#ff4f48, #0f5330 100px)";
        areaGame.style.color = "#ff4f48";
        probablyResult.innerHTML = "X5";
        probablyResult.value = 5;
      }
      else if (getProbably(500)) {
        areaGame.style.background = "repeating-radial-gradient(#fff700, #0f5330 100px)";
        areaGame.style.color = "#fff700";
        probablyResult.innerHTML = "X3";
        probablyResult.value = 3;
      }
      else if (getProbably(1000)) {
        areaGame.style.background = "repeating-radial-gradient(#4072ff, #0f5330 100px)";
        areaGame.style.color = "#4072ff";
        probablyResult.innerHTML = "X2";
        probablyResult.value = 2;
      }
      else {
        putBet.value *= 1;
        probablyResult.innerHTML = "Ошибка 803";
      }
   }

// Функция проверки аргументов игры (Ставка: сумма; Выбор коэфицента: Х;).

   function checkValues() {
     if (+putBet.value < 10) {
        alert('Минимальная сумма - 10!');
        titleOver.innerHTML = "Игра приостановлена:"
        probablyResult.innerHTML = "Ошибка 705";
        areaGame.style.background = "repeating-radial-gradient(#1bff00a8, #0f5330 100px)";
        areaGame.style.color = "#fff";
        balance.innerHTML = +balance.innerHTML + +putBet.value;
        return;
      }
      else if (+putBet.innerHTML > +balance.innerHTML) {
        alert('Недостаточно средств!');
        titleOver.innerHTML = "Игра приостановлена:"
        probablyResult.innerHTML = "Ошибка 705";
        areaGame.style.background = "repeating-radial-gradient(#1bff00a8, #0f5330 100px)";
        areaGame.style.color = "#fff";
        balance.innerHTML = +balance.innerHTML + +putBet.value;
        return;
      }
      else if (numbersX.value === 'Выбор X' || numbersX.value === '') {
        alert('Коэффициент не определён/не выбран!');
        titleOver.innerHTML = "Игра приостановлена:";
        probablyResult.innerHTML = "Ошибка 705";
        areaGame.style.background = "repeating-radial-gradient(#1bff00a8, #0f5330 100px)";
        areaGame.style.color = "#fff";
        balance.innerHTML = +balance.innerHTML + +putBet.value;
        return;
      }
      else {
        counterSessions.innerHTML = ++counterSessions.innerHTML;
      }
   }

// Функция расчёта коэфицента с результатом и умножения ставку на выигрыш.

   function getResultGame() {
     if (numbersX.value === probablyResult.innerHTML) {
         balance.innerHTML = putBet.value * probablyResult.value + +balance.innerHTML;
         winning.style.visibility = "visible";
         winningSum.style.visibility = "visible";
         winningSum.innerHTML = putBet.value * probablyResult.value + ' очков.';
     }
   }

// Функция старта игры.

    function openGame() {
      balance.innerHTML = balance.innerHTML - putBet.value;
      winning.style.visibility = "hidden";
      winningSum.style.visibility = "hidden";
      titleOver.innerHTML = "Вам выпало:";
      getProbably();
      showProbably();
      checkValues();
      getResultGame();
    }


