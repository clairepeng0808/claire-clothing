import React from 'react';
import Homepage from './pages/Homepage/index';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Homepage />
      </div>
    </>
  );
}

export default App;
