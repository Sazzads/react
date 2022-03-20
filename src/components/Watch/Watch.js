import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Displasy from '../Displasy/Displasy';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ border: ' 2px solid black ', margin: '20px' }}>
            <h2>this is my watch </h2>
            <h3>My current steps {steps}</h3>
            <button onClick={increseSteps}>De Dourr...</button>
            <Displasy name='garmin' steps={steps}></Displasy>

        </div>
    );
};

export default Watch;