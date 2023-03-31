const btnPlay = document.getElementById("btnPlay");

const numbersContainer = document.querySelector(".numbers-container");

const inputContainer = document.querySelector(".input-container");

btnPlay.addEventListener("click", createPlayGround)

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