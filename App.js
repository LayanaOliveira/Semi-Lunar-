
import logo from './logo.svg';
import './App.css';
import IMCCalculator from './Form';
import ChatbotForm from './servidor';
import Curtir from './Curtir';
import Hepatite from './Hb';
import Dtpa from './Dtpa';
import Hpv from './Hpv';
import Febre from './Febre';
import Tri from './Tri';
import Dupla from './Dt';

function App() {
  return (
    <>
    <div className="App">
        <header className="App-header">
          <div className='Index'>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "286.1111%",
                paddingBottom: 0,
                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                marginTop: "1.6em",
                marginBottom: "0.9em",
                overflow: "hidden",
                borderRadius: 8,
                willChange: "transform"
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                  padding: 0,
                  margin: 0
                }}
                src="https://www.canva.com/design/DAFii6Mz5VM/view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
            <a
              href="https://www.canva.com/design/DAFii6Mz5VM/view?utm_content=DAFii6Mz5VM&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
              target="_blank"
              rel="noopener"
            >
            </a>
            <IMCCalculator />

            <div className='msm'>
              <ChatbotForm />
            </div>
            <div className='text'>
              <a href='https://t.me/Semilunar_bot'>Clique aqui e visite a Semi-Lunar no Telegram.</a>
            </div>

            <div className='curtir'>
              <Curtir />
            </div>

            <div className='quiz'>
              <a href='https://www.fyrebox.com/bot/ve1daze3nyqw3vdrr6'>
                <button>Responder</button>
              </a>
            </div>
            
            <Hepatite/>
            <Dtpa/>
            <Hpv/>
            <Febre/>
            <Tri/>
            <Dupla/>
            
          </div>
        </header>
      </div></>
  
  );
}

export default App;
