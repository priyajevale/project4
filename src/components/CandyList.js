import React from 'react';
import { useCandyContext } from './CandyContext';




function CandyList() {
  const { candies, buyCandy } = useCandyContext();

  return (
    <div>
      {candies.map((candy, index) => (
        <div key={index}>
          <div>
            <strong>Name:</strong> {candy.candyName}<br />
            <strong>Description:</strong> {candy.description}<br />
            <strong>Price:</strong> ${candy.price}<br />
          </div>
          <button onClick={() => buyCandy(candy, 1)}>Buy 1</button>
          <button onClick={() => buyCandy(candy, 2)}>Buy 2</button>
          <button onClick={() => buyCandy(candy, 3)}>Buy 3</button>
        </div>
      ))}
    </div>
  );
}

export default CandyList;