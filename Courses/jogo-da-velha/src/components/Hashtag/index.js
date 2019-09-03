import React from 'react';
import Card from  '../../objects/Cards/index'
import Player from '../../objects/Player/index';
import  './style.css'

const Hashtag = () => (
    <Card>
    <ul className='hashtag'>    
     <li className='item'>  <Player player="x"/></li>
     <li className='item'>  <Player player="x"/> </li>
     <li className='item'>  <Player player="o"/></li>
      
     <li className='item'><Player player="x"/></li>
     <li className='item'><Player player="x"/></li>
     <li className='item'><Player player="o"/></li>

     <li className='item'><Player player="o"/></li>
     <li className='item'>  <Player player="x"/></li>
     <li className='item'> <Player player="o"/></li>
    </ul>
    
    </Card>
);

export default Hashtag;