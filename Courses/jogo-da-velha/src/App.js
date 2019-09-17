import React from 'react';
import './App.css';

import './setting/colors.css';
import './setting/sizes.css';

import Header from './components/Header/index';
import Hashtag from './components/Hashtag/index';
import Checkbox from './objects/Checkbox';


const App = () =>  (
    <main className="app">      
      <Header /> 
      <Hashtag />  
      <Checkbox id="show" value="show" content ="mostrar eventos"/>          
      
    </main>
   );

export default App;
