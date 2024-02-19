import React from 'react';
import { FlexParent } from './style';

const ContactHeading = ()=>{

    return(
        <>
        <FlexParent>
            <div><p className='fontweight'><b>CONTACT US</b></p></div>
            <div><h1 >
              <b>Let's Start a <span className="styledyellow"><b> Conversation</b></span></b>
            </h1></div>
            <div><p className='styledGrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p></div>
        </FlexParent>
        </>
    )
}

export default ContactHeading