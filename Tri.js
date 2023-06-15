import React, { useState } from 'react';
import ImagemTri from './triplice.png';

const Tri = () => {
    const [imageVisible, setImageVisible] = useState(false);
  
    const handleClick = () => {
      setImageVisible(!imageVisible);
    };
  

  return (
    <div>
      <h5 onClick={handleClick}>TRÍPLICE<br/>VIRAL</h5>
      {imageVisible && (
        <img
          src={ImagemTri}
        />
      )}
    </div>
  );
};

export default Tri;


