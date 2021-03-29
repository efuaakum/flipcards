import React from 'react'
import Card from './card'
import PropTypes from 'prop-types'

const Game = ({ cards, ...props }) => {
  return (
    <div className='game'>
      <h1>{props.name}</h1>
      <div className='game-container'>
        {
        (cards.length === 0)
          ? (<div className='empty'>No cards...</div>)
          : (cards
              .map((card, index) => (<Card key={card.id} count={index} card={card} {...props} />)
              )
            )
      }
      </div>
    </div>
  )
}

Game.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Game
