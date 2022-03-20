import React from 'react';
import Dial from '../Dial/Dial';

const Displasy = (props) => {
    return (
        <div style={{ border: '2px solid black', margin: '10px', backgroundColor: 'tomato' }}>
            <h2>name:{props.name}</h2>
            ,<p>so far steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Displasy;