import React, { useState } from 'react';
import Card from '../Card/Card';
import "./Deck.css"

const Deck = (props) => {
    const [deck, setDeck] = useState([]);

    let array = [];
    
    function shuffleArray(array) {
        let curId = array.length;
        // There remain elements to shuffle
        while (0 !== curId) {
          // Pick a remaining element
          let randId = Math.floor(Math.random() * curId);
          curId -= 1;
          // Swap it with the current element.
          let tmp = array[curId];
          array[curId] = array[randId];
          array[randId] = tmp;
        }
        return array;
    }

    const generateShuffledDeck = () => {
        for (let i=1; i<53; i++) {
            array.push(i);
        }
        shuffleArray(array);
        setDeck(array);
    }

    const cardConversionObject = {
      1: "2_of_clubs",
      2: "2_of_diamonds",
      3: "2_of_hearts",
      4: "2_of_spades",
      5: "3_of_clubs",
      6: "3_of_diamonds",
      7: "3_of_hearts",
      8: "3_of_spades",
      9: "4_of_clubs",
      10: "4_of_diamonds",
      11: "4_of_hearts",
      12: "4_of_spades",
      13: "5_of_clubs",
      14: "5_of_diamonds",
      15: "5_of_hearts",
      16: "5_of_spades",
      17: "6_of_clubs",
      18: "6_of_diamonds",
      19: "6_of_hearts",
      20: "6_of_spades",
      21: "7_of_clubs",
      22: "7_of_diamonds",
      23: "7_of_hearts",
      24: "7_of_spades",
      25: "8_of_clubs",
      26: "8_of_diamonds",
      27: "8_of_hearts",
      28: "8_of_spades",
      29: "9_of_clubs",
      30: "9_of_diamonds",
      31: "9_of_hearts",
      32: "9_of_spades",
      33: "10_of_clubs",
      34: "10_of_diamonds",
      35: "10_of_hearts",
      36: "10_of_spades",
      37: "ace_of_clubs",
      38: "ace_of_diamonds",
      39: "ace_of_hearts",
      40: "ace_of_spades",
      41: "jack_of_clubs",
      42: "jack_of_diamonds",
      43: "jack_of_hearts",
      44: "jack_of_spades",
      45: "queen_of_clubs",
      46: "queen_of_diamonds",
      47: "queen_of_hearts",
      48: "queen_of_spades",
      49: "king_of_clubs",
      50: "king_of_diamonds",
      51: "king_of_hearts",
      52: "king_of_spades",
    };

    return (
        <div>
            <button onClick={generateShuffledDeck}>Shuffle</button>
            <div className="deckCardsContainer">
                {deck.map((cardNumber) => {
                    return <Card name={cardConversionObject[cardNumber]} key={cardNumber} />
                })}
            </div>
        </div>
    )
}

export default Deck