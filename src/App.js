import React, { useState, useEffect } from 'react';
import './App.css';
import Bliss from './bliss.jpg'
import xplogo from './xp-logo.png';
import { Container, Linha, Coluna } from './componentes/grid/gridArea';
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    function clock() {
      setData(new Date().toLocaleTimeString('pt-BR', { hour12: true }))
      setTimeout(clock, 1000);
    }
    clock()
  }, [data]);
  return (
    <Container>
      <Linha width={100} height={95}>
        <img src={Bliss} style={{ width: '100%', height: '100%', zIndex: '-1' }} alt="bliss" />
      </Linha>
      <Linha width={100} height={5} flex="flex-start">
        <Coluna width={10} height={100} style={{ zIndex: '1', background: '#428ade', minWidth: '140px' }}>
          <div className="iniciar" >
            <img src={xplogo} alt="xplogo" />
            <div>Iniciar</div>
          </div>
        </Coluna>
        <Coluna width={80} height={100} >
          <div className="barra">
          </div>
        </Coluna>
        <Coluna width={10} height={100} style={{ minWidth: '140px' }}  >
          <div className="relogio">
            {data}
          </div>
        </Coluna>
      </Linha>
    </Container >
  );
}

export default App;
