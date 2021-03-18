import React, { useState } from 'react';
import Game from './components/game';
import gameData from './models/dt.json';

const MAX_MATCH = 2;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function App() {
  const [pair, updatePair] = useState([]);
  const [cards, updateCards] = useState(shuffle(gameData.cards));

  function refreshCardState(currentCards, tuple, state){
    return [...currentCards.map(card => {
      tuple.forEach(item => {
        if(item.id === card.id){
          card.state =state;
        }
      });
      return card;
    })];
  }
  
  const flipCard = (id) => {
    let currentPair = pair;
    let currentCards = cards;
    let currentCard = currentCards.find(card => card.id === id);

    if(currentCard.state!=="hidden"){
      return;
    }

    if(currentPair.length === MAX_MATCH){
      currentCards = refreshCardState(currentCards,pair,"hidden");
      currentPair = [];
    }

    let tempPair = [...currentPair,currentCard];
    if(currentPair.length < MAX_MATCH) {
      if(currentCard.state === "hidden"){
        currentCards = refreshCardState(currentCards, tempPair,`show${tempPair.length === MAX_MATCH?" max":""}`);
        currentPair = tempPair;
      }
        
      if(tempPair.length === MAX_MATCH) {
        const [first,second] = tempPair;
        if(first.matchid === second.matchid){
          currentCards = refreshCardState(currentCards, tempPair,"matched");
          currentPair = [];
        }
          // else{
          //   const timer = setTimeout(() => {
          //   currentCards = refreshCardState(currentCards,pair,"hidden");
          //     updatePair([]);
          //   }, gameData.flipSpeed);
          //   return () => clearTimeout(timer);
          // }
      }
    }
    updatePair(currentPair);
    updateCards(currentCards);
  }

  return (
    <div className="App">
      <Game name={gameData.name} folder={gameData.folder} rows={gameData.rows} cards={cards} flipCard={flipCard} />
    </div>
  );
}

export default App;
