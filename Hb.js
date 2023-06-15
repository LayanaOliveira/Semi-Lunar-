import React, { useState } from 'react';
import ImagemHepatite from './hepatite b.png';

const Hepatite = () => {
    const [imageVisible, setImageVisible] = useState(false);
  
    const handleClick = () => {
      setImageVisible(!imageVisible);
    };
  

  return (
    <div>
      <h2 onClick={handleClick}>HEPATITE B</h2>
      {imageVisible && (
        <img
          src={ImagemHepatite}
        />
      )}
    </div>
  );
};

export default Hepatite;


