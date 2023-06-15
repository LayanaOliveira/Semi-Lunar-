import React, { useState } from 'react';
import ImagemDupla from './dupla.png';

const Dupla = () => {
    const [imageVisible, setImageVisible] = useState(false);
  
    const handleClick = () => {
      setImageVisible(!imageVisible);
    };
  

  return (
    <div>
      <h3 onClick={handleClick}>DUPLA<br/>ADULTO</h3>
      {imageVisible && (
        <img
          src={ImagemDupla}
        />
      )}
    </div>
  );
};

export default Dupla;


