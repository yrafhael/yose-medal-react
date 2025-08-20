import React, { useState } from 'react';

function Country() {
  const [name] = useState('United States');
  const [gold, setGold] = useState(0);

  const handleClick = () => setGold(gold + 1);

  return (
    <div className="country-card">
      <h2 className="country-title">{name}</h2>
      <p className="country-medals">Gold medals: {gold}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Country;