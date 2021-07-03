import React from 'react';
import ComboItem from './ComboItem';

const Combo = (props) => {
  return (
    <div>
      <h1>Guajalocombo</h1>
      <p>Selecciona la torta que más te guste y disfruta de tu desayuno.</p>
      <ComboItem food={props.food} />
    </div>
  );
};

export default Combo;
