const btnPlay = document.getElementById("btnPlay");

const numbersContainer = document.querySelector(".numbers-container");


btnPlay.addEventListener("click", createPlayGround)

function createPlayGround(){
  const generatedNumbers = verifyRandomNumber(numbersContainer);
  for(let i = 0; i < generatedNumbers.length; i++){
    numbersContainer.innerHTML +=`
    <span>${generatedNumbers[i]}</span>
    `
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
