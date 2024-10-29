import React, { useState, useRef, useEffect } from "react";

function GameContainer() {
    const cardsAnimationRef = useRef(null);
    const [cards, setCards] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ]);

    useEffect(() => {
        const cardsElements = cardsAnimationRef.current.querySelectorAll(".card");
        cardsElements.forEach((cardElement) => {
            cardElement.addEventListener("click", () => {
                const cardIndex = cards.findIndex((card) => card.id === cardElement.id);
                const updatedCards = [...cards];
                updatedCards[cardIndex].decision =
                    updatedCards[cardIndex].decision === "keep" ? "discard" : "keep";
                setCards(updatedCards);
            });
        });
    }, [cards]);

    const handleStartDistribution = () => {
        const cardsElements = cardsAnimationRef.current.querySelectorAll(".card");
        cardsElements.forEach((cardElement) => {
            cardElement.classList.toggle("distribute");
            setTimeout(() => {
                cardElement.classList.add("decision-mode", "discard");
            }, 2900);
        });
    };

    const handleDiscardCards = () => {
        const cardsElements = cardsAnimationRef.current.querySelectorAll(".card");
        cardsElements.forEach((cardElement) => {
            if (cardElement.classList.contains("discard")) {
                cardElement.classList.add("discard-to-igloo");
            }
        });
    };

    return (
        <div className="mainBg">
            <div className="cardContainer">
                <div className="cards-animation" ref={cardsAnimationRef}>
                    <div className="card cardItem">
                        <div className="cardBg">
                            <img
                                src="../images/6Club.png"
                            />
                        </div>
                        <div className="decision">{cards[0].decision}</div>
                    </div>
                    <div className="card cardItem">
                        <div className="cardBg">
                            <img
                                src="../images/8Diamond.png"
                            />
                        </div>
                        <div className="decision">{cards[1].decision}</div>
                    </div>
                    <div className="card cardItem">
                        <div className="cardBg">
                            <img
                                src="../images/QClub.png"
                            />
                        </div>
                        <div className="decision">{cards[2].decision}</div>
                    </div>
                    <div className="card cardItem">
                        <div className="cardBg">
                            <img
                                src="../images/JDiamond.png"
                            />
                        </div>
                        <div className="decision">{cards[3].decision}</div>
                    </div>
                    <div className="card cardItem">
                        <div className="cardBg">
                            <img
                                src="../images/JSpades.png"
                            />
                        </div>
                        <div className="decision">{cards[4].decision}</div>
                    </div>
                </div>
            </div>

            <div className="controls">
                <button className="btn ready" onClick={handleStartDistribution}>
                    Start Distribution
                </button>
                <button className="btn ready" onClick={handleDiscardCards}>
                    Discard Cards
                </button>
                {/* <button className="btn" onClick={toggleCSSClass('#cards-animation .card', 'decision-mode')}>Toggle Decision</button> */}
            </div>
        </div>
    );
}

export default GameContainer;
