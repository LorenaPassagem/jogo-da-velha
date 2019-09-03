import React from 'react';
import './App.css';
import './setting/colors.css';
import Header from './components/Header/index'
import Hashtag from './components/Hashtag/index'

const App = () =>  (
    <main className="app">      
      <Header /> 
      <Hashtag /> 
    </main>
   );

export default App;
