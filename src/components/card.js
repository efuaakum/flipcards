import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card, ...props}) => {
 
    return (
      <div className={`card ${card.state}`} onClick={() => props.flipCard(card.id)}>
        <div className="inner">
          <div className="front"></div>
          <div className="back">
            {card.hasOwnProperty("img")?
            <img src={`/img/${card.img}`} className={`card-img`} alt={card.img}/>:
            <div className={`card-txt`}>{card.txt}</div>}
          </div>
        </div>
      </div>
    );
}

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired
}
