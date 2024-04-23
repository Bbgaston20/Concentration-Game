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
  const renderBoard = () => {
    board.innerHTML = '';
    cards.forEach((_, index) => {
      cards= document.createElement('div');
      cards.classList.add('card');
      cards.dataset.index = index;
      cards.textContent = cards[index] || '';
      cards.addEventListener('click', handleCardClick);
      board.appendChild(cards);
    });
  };
  
  // const handleCardClick = (event) => {
  //   const clickedCard = event.target;
  //   const index = clickedCard.dataset.index;
  //   if ()
  // }

  function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
      card.classList.add('flipped');
      flippedCards.push(card);
      if (flippedCards.length === 2) {
        checkForMatch();
      }
    }
  }
  
  function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.firstChild.src === card2.firstChild.src) {
      matchedCards.push(card1, card2);
      flippedCards = [];
      if (matchedCards.length === cards.length) {
        return('Congratulations! You win!');
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 300);
    }
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
}