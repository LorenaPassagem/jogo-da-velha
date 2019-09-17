import React from 'react';
import './style.css';

import Input from '../Input/index';
import MostrarEventos from '../Eventos/index';

const Checkbox = ({id ='', value ='', content =''}) => (
<>
   <Input id={id} type='checkbox' value={value} content={content}/>
   <MostrarEventos  htmlFor={id} content={content} />
</>
);

export default Checkbox;