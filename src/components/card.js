import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ card, ...props }) => {
  return (
    <div className={`card ${card.state}`} onClick={() => props.flipCard(card.id)}>
      <div className='inner'>
        <div className='front'><span className='count'>{(props.count + 1)}</span></div>
        <div className='back'>
          {Object.prototype.hasOwnProperty.call(card, 'img')
            ? <img src={`./img/${props.folder}/${card.img}`} className='card-img' alt={card.img} />
            : <div className='card-txt'><h2>{card.txt}</h2><p>{card.helpTxt}</p></div>}
        </div>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  card: PropTypes.object.isRequired
}
