import React from 'react';
import "./style.css"

const MostrarEventos = ({htmlFor, content}) => (
    <label htmlFor={htmlFor} className="showEvents"> {content}</label>
);

export default MostrarEventos;