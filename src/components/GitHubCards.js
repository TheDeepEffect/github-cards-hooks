import React, { useState } from 'react';
import Input from './Input';
import Card from './Card';

const GitHubCards = () => {
    const [cardList, setCardList] = useState([]);

    const addCard = card => {
        setCardList([...cardList, card]);
        console.log(cardList)
    };
    const removeCard = (e, login) => {
        e.preventDefault()
        // console.log(login)
        setCardList(cardList.filter(item => item.login !== login));
        // console.log(cardList)
    };
    return (
        <div className="github-cards">
            <Input addCard={addCard} />
            <div className="ui cards">
                {cardList.map(({ id, avatar_url, name, company, login }) => (
                    <Card
                        key={id}
                        avatar={avatar_url}
                        name={name}
                        company={company}
                        login={login}
                        onDelete={removeCard} />
                ))}
            </div>
        </div>
    );
};
export default GitHubCards;
