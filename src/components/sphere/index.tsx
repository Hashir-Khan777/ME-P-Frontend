import React from 'react';
import { FlexChild, FlexParent } from './style';


const Sphere = () => {

    return (
        <>
            <FlexParent>
                <FlexChild>
                    <h1>
                        Join our team to be a part and start your business
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button>Sign Up</button>
                </FlexChild>
            </FlexParent>
        </>
    )
}

export default Sphere;