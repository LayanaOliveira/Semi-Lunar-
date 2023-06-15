
 //const token = '6222617519:AAETPKInm5xP-oJwLETLFyH0CcClKEkwY_E';

 import React, { useState } from 'react';

 const ChatbotForm = () => {
   const [inputText, setInputText] = useState('');
 
   const handleInputChange = (e) => {
     setInputText(e.target.value);
   };
 
   const handleSubmit = () => {
     const encodedMessage = encodeURIComponent(inputText);
     const chatbotURL = `https://t.me/Semilunar_bot?start=${encodedMessage}`;
     window.location.href = chatbotURL;
   };
 
   return (
     <div>
       <input type="text" value={inputText} onChange={handleInputChange}/> 
       <br/>
       <br/>
       <br/>
       <button onClick={handleSubmit}>Enviar</button>
     </div>

   );
 };
 
 export default ChatbotForm;
 
 