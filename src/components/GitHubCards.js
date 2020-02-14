import React, { useState } from 'react';
import Input from './Input';
import Card from './Card';


const GitHubCards = () => {

    const [cardList, setCardList] = useState([]);

    const addCard = (card) => {
        setCardList([...cardList, card])
    }
    return (
        <div className="github-cards" >
            <Input addCard={addCard} />
            {cardList.map((item, i) => <Card key={i} />)}
        </div>
    );

}
export default GitHubCards;