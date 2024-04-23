const cards = [
    
  ]; 
  let flippedCards = [];
  let matchedCards = [];
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function createCard(card) {
    const div = document.createElement('div');
    div.classList.add('card');
    const img = document.createElement('img');
    img.src = card;
    div.appendChild(img);
    div.addEventListener('click', () => flipCard(div));
    return div;
  }
  
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
      }, 1000);
    }
  }
  
  function startGame() {
    const shuffledCards = shuffle(cards.concat(cards)); 
    const gameBoard = document.getElementById('board');
    shuffledCards.forEach(card => {
      gameBoard.appendChild(createCard(card));
    });
  }
  
  startGame();
  
