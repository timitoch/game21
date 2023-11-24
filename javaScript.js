// Створюємо масив з номіналами карт

  let cards = [
    {name: '6 черва', value: 6,  image: '6 черва.png'},
    {name: '7 черва', value: 7,  image: '7 черва.png'},
    {name: '8 черва', value: 8,  image: '8 черва.png'},
    {name: '9 черва', value: 9,  image: '9 черва.png'},
    {name: '10 черва', value: 10,  image: '10 черва.png'},
    {name: 'Валет черва', value: 2,  image: 'J черва.png'},
    {name: 'Дама черва', value: 3,  image: 'Q черва.png'},
    {name: 'Король черва', value: 4,  image: 'K черва.png'},
    {name: 'Туз черва', value: 11,  image: 'A черва.png'},
    {name: '6 бубни', value: 6,  image: '6 бубни.png'},
    {name: '7 бубни', value: 7,  image: '7 бубни.png'},
    {name: '8 бубни', value: 8,  image: '8 бубни.png'},
    {name: '9 бубни', value: 9,  image: '9 бубни.png'},
    {name: '10 бубни', value: 10,  image: '10 бубни.png'},
    {name: 'Валет бубни', value: 2,  image: 'J бубни.png'},
    {name: 'Дама бубни', value: 3,  image: 'Q бубни.png'},
    {name: 'Король бубни', value: 4,  image: 'K бубни.png'},
    {name: 'Туз бубни', value: 11,  image: 'A бубни.png'},
    {name: '6 піки', value: 6,  image: '6 піки.png'},
    {name: '7 піки', value: 7,  image: '7 піки.png'},
    {name: '8 піки', value: 8,  image: '8 піки.png'},
    {name: '9 піки', value: 9,  image: '9 піки.png'},
    {name: '10 піки', value: 10,  image: '10 піки.png'},
    {name: 'Валет піки', value: 2,  image: 'J піки.png'},
    {name: 'Дама піки', value: 3,  image: 'Q піки.png'},
    {name: 'Король піки', value: 4,  image: 'K піки.png'},
    {name: 'Туз піки', value: 11,  image: 'A піки.png'},
    {name: '6 трефи', value: 6,  image: '6 трефи.png'},
    {name: '7 трефи', value: 7,  image: '7 трефи.png'},
    {name: '8 трефи', value: 8,  image: '8 трефи.png'},
    {name: '9 трефи', value: 9,  image: '9 трефи.png'},
    {name: '10 трефи', value: 10,  image: '10 трефи.png'},
    {name: 'Валет трефи', value: 2,  image: 'J трефи.png'},
    {name: 'Дама трефи', value: 3,  image: 'Q трефи.png'},
    {name: 'Король трефи', value: 4,  image: 'K трефи.png'},
    {name: 'Туз трефи', value: 11,  image: 'A трефи.png'}
];

let userName = document.getElementById("userName");
// Запитуємо ім'я користувача
let inputName = prompt("Введіть ваше ім'я");
if (inputName) {
  userName.textContent = inputName;
} else {
  userName.textContent = "Гравець";
}

// Функція для отримання випадкової карти
function getRandomCard() {
  let randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

// Отримуємо елементи HTML, де ми хочемо відобразити результати
let userCardElement = document.getElementById("userCard");
let userScoreElement = document.getElementById("userScore");
let computerCardElement = document.getElementById("computerCard");
let computerScoreElement = document.getElementById("computerScore");
let whoWinElement = document.getElementById("whoWin");
let userCardImage = document.getElementById("userCardImage");
let computerCardImage = document.getElementById("computerCardImage");
let card = document.querySelector('.card');

let userScore = 0;
let computerScore = 0;
let gameEnded = false; // Прапорець, який вказує, чи закінчилася гра
let round = 0; // Додайте цей рядок в початок вашого коду

// Функція для гри
function playGame() {
  if (!gameEnded && round < 3) { // Додаємо обмеження на кількість раундів
    round++; // Збільшуємо кількість раундів

    let userCard = getRandomCard();
    let computerCard = getRandomCard();

    userCardImage.src = userCard.image;
    computerCardImage.src = computerCard.image;
  
    userScore += userCard.value;
    userScoreElement.textContent = userScore;
    
    computerScore += computerCard.value;
    computerScoreElement.textContent = computerScore;

    if(userScore > 21 && computerScore > 21) {
      gameEnded = true;
      whoWinElement.textContent = userScore < computerScore ? "Гравець переміг" : "Комп'ютер переміг";
      playButton.disabled = true; // Вимкнути кнопку "Грати"
    } else if(userScore > 21) {
      gameEnded = true;
      whoWinElement.textContent = "Комп'ютер переміг";
      playButton.disabled = true; // Вимкнути кнопку "Грати"
    } else if(computerScore > 21) {
      gameEnded = true;
      whoWinElement.textContent = "Гравець переміг";
      playButton.disabled = true; // Вимкнути кнопку "Грати"
    } else if(round == 3) {
      gameEnded = true;
      whoWinElement.textContent = userScore > computerScore ? "Гравець переміг" : "Комп'ютер переміг";
      playButton.disabled = true; // Вимкнути кнопку "Грати"
    }
  }
}

let resetButton = document.getElementById("resetButton");

function resetGame() {
  userScore = 0;
  computerScore = 0;
  gameEnded = false;
  round = 0;

  userCardElement.textContent = "";
  userScoreElement.textContent = "";
  computerCardElement.textContent = "";
  computerScoreElement.textContent = "";
  whoWinElement.textContent = "";
  userCardImage.src = "зад.png";
  computerCardImage.src = "зад.png";

  playButton.disabled = false; // Включити кнопку "Грати"
}

