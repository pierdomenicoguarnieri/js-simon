const btnPlay = document.getElementById("btnPlay");

const btnSend = document.getElementById("send");

const numbersContainer = document.querySelector(".numbers-container");

const inputContainer = document.querySelector(".input-container");

const outputContainer = document.querySelector(".output-container");

let generatedNumbers = [];

let guessedNumbers = 0;

btnPlay.addEventListener("click", createPlayGround);

btnSend.addEventListener("click", gameResult);

function createPlayGround(){
  const generatedNumbers = verifyRandomNumber(numbersContainer);
  for(let i = 0; i < generatedNumbers.length; i++){
    numbersContainer.innerHTML +=`
    <span>${generatedNumbers[i]}</span>
    `
  }

  setTimeout(numbersDisappear, 5000, numbersContainer);
  setTimeout(inputAppear, 5250, inputContainer);
}

function gameResult(){
  const inputArray = []
  for(let i = 0; i < 5; i++){
  const input = document.getElementById("input" + (i + 1));
  if(!inputArray.includes(parseInt(input.value)))inputArray.push(parseInt(input.value));
  }
  const outputMessage = document.createElement("h1");

  arrayCheck(inputArray, outputMessage)

  outputContainer.append(outputMessage);
}

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

function verifyRandomNumber(){
  let array = [];
  do{
    const number = getRandomNumber();
    if(!array.includes(number)) array.push(number)
  }while(array.length !== 5)
  return array;
}

function numbersDisappear(numbersContainer){
  numbersContainer.classList.add("opacity-0");
}

function inputAppear(inputAppear){
  inputAppear.classList.remove("opacity-0");
}