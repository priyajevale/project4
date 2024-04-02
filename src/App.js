import React from 'react';
import {CandyForm} from './components/CandyContext';
import CandyList from './components/CandyList';
import {CandyProvider}from './components/CandyContext';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    
    <CandyProvider>
      <div className="candy">
        <CandyForm />
        <CandyList />
        <div className='cart'>
        <Cart />
        </div>
        
      </div>
    </CandyProvider>
  );
}

export default App;
