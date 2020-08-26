import React from 'react';
import '../styles/App.css';
import FeeCalcurator from './FeeCalculator';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <FeeCalcurator />
      </main>
    </>
  );
}

export default App;
