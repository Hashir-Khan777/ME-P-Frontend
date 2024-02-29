import React from 'react';
import { FlexParent } from './style';

const ContactHeading = () => {

    return (
        <>
            <FlexParent>
                <div><h2 className='fontweight tracking-[2px]'><b>CONTACT US</b></h2></div>
                <div className='flex flex-row'>
                    <span className='font-bold tracking-[1px] text-[2rem] my-[5px] mx-0 '> Let's Start a <span className="styledyellow">Conversation</span> </span></div>
                <div>
                    <p className='styledGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </div>
            </FlexParent>
        </>
    )
}

export default ContactHeading