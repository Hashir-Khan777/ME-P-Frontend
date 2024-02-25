import React from 'react';
import { ChildFlex, ParentFLex } from './style';
import pattren from '../../assets/Pattern.png'

const OverView = ()=>{

    return(
        <>
        <ParentFLex>
            <ChildFlex>
                <div><h1>1k+</h1>
                <p>Sold Vehicles</p>
                </div>
                <div><h1>7k+</h1>
                <p>Available Vehicles</p>
                </div>
                <div><h1>30k+</h1>
                <p>Total active Users</p>
                </div>
            </ChildFlex>
            <div className='bar'><img src={pattren} alt="pattren" /></div>
        </ParentFLex>
        </>
    )
}

export default OverView;