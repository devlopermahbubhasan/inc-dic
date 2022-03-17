import React, { useState } from 'react';
import './IncDic.css';
const IncDic = () => {
    const [count, setCount] = useState(0);
    const incr = () =>{
        setCount( count + 1);
    }
const dicr = () =>{
    if (count > 0) {
        setCount( count - 1);
    }
    else{
        alert("sorry , zero not reach")
        setCount(0)
    };
    
}
    return (
        <div>
            <div className='background'>
                <div className='center'>
                    <br />
                    <br />
                    <div className='count'>
                        <h1>{count}</h1>
                    </div>
                    <div className='btn-section'>
                        <button className='btn-INC' onClick={incr}>Increase</button>
                        <button className='btn-DiC' onClick={dicr}>Dicrease</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncDic;