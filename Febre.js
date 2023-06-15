import React, { useState } from 'react';
import ImagemFebre from './febre amarela.png';

const Febre = () => {
    const [imageVisible, setImageVisible] = useState(false);
  
    const handleClick = () => {
      setImageVisible(!imageVisible);
    };
  

  return (
    <div>
      <h1 onClick={handleClick}>FEBRE<br/>AMARELA</h1>
      {imageVisible && (
        <img
          src={ImagemFebre}
        />
      )}
    </div>
  );
};

export default Febre;


