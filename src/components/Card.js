import React from 'react';

const Card = (card) => {
    const { name, company, avatar, onDelete, login } = card
    return (
        <div className="card">
            <div className="image">
                <img src={avatar} alt={name} />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="meta">{company}</div>
            </div>
            <button onClick={(e) => onDelete(e, login)} >Delete</button>
        </div>
    );

}
export default Card;