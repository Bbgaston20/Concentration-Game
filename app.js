const cards = [
    {matched: false, img: "../img/IMG_3877.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3877.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3878.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3878.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3879.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3879.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3880.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3880.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3881.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3881.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3882.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3882.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3883.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3883.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3884.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3884.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3885.JPG", showFront: false},
    {matched: false, img: "../img/IMG_3885.JPG", showFront: false},
  ]; 
  const backOfCard = "../img/vecteezy_flowers-clipart-design-illustration_9385587.jpg"
  let score;
  let shuffledCards;
  let card1;
  let card2;
  let winner;

  const boardEl = document.getElementById("board")
  boardEl.addEventListener("click", handleclick)
  
  function shuffle() {
    const gameCards = cards.map(card => {return{...card}})
    const shuffled = []; 
    while (gameCards.length > 0) {
      const randomNum = Math.floor(Math.random() * gameCards.length);
      const card = gameCards.splice(randomNum, 1)
      shuffled.push(card[0])
    }
    return shuffled;
  }
  
  function checkForMatch() {
    if (card1.img===card2.img)  {
      card1.matched = true 
      card2.matched = true
    }
    card1.showFront = false
    card2.showFront = false
    card1 = null
    card2 = null
    render()
      winner = checkForWinner()
    }
  
  function startGame() {
     shuffledCards = shuffle(); 
    render()
  }
  
  startGame();
  
function render() {
  shuffledCards.forEach((card, ind) => {
    const cardEl = document.getElementById(ind)
    if (card.matched || card.showFront) cardEl.innerHTML = `<img class = "front-img" src= "${card.img}"/>`
    else cardEl.innerHTML = `<img class= "back-img" src= "${backOfCard}"/>`
  });
 if(card1 && card2) {
  setTimeout(() => {
    checkForMatch()
     }, 3000)
}
}

function handleclick(event) {
  if (card1 && card2) return
  let index;
  if (event.target.tagName==="DIV")index = event.target.id
  if (event.target.tagName==="IMG")index = event.target.parentNode.id
  if (!card1){
    card1=shuffledCards[index]
    card1.showFront=true
  } else {
    card2=shuffledCards[index]
    card2.showFront=true
   
  }
  render()
}

function checkForWinner() {
  const isWinner = cards.every(card => card.matched);
  if (isWinner) {
    confirm("Congratulations! You won!")
  } 
}
checkForWinner();