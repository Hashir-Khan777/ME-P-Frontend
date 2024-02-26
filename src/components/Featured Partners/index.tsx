import React from 'react'
import partners1 from '../../assets/partners1.png'
import partners2 from '../../assets/partners2.png'
import partners3 from '../../assets/partners3.png'
import partners4 from '../../assets/partners4.png'
import partners5 from '../../assets/partners5.png'
import { FlexParent } from './style'

const FeaturedPartners = () => {

    return (
        <>
            <FlexParent>
                <div className='heading'>
                    <h1>
                        <span className="styledblack">Featured </span>
                        <span className="styledYellow"> Partners</span>
                    </h1>
                </div>
                <div><img src={partners1} alt="" /></div>
                <div><img src={partners2} alt="" /></div>
                <div><img src={partners3} alt="" /></div>
                <div><img src={partners4} alt="" /></div>
                <div><img src={partners5} alt="" /></div>
            </FlexParent>
        </>
    )
}
export default FeaturedPartners;