import React from "react";
import { FlexCard, FlexParent } from "./style";
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import profile4 from '../../assets/profile4.png'
import fbp from '../../assets/fbp.png'
import xp from '../../assets/xp.png'
import instap from '../../assets/instap.png'
import lindedinp from '../../assets/linkedinp.png'


const TeamCard = () => {


    const cardObj = [

        {
            id: 1,
            name: 'Sibtain Naqvi',
            occupation: 'CEO',
            profile: profile1,
            bg: '#F4F4F4'

        },
        {
            id: 2,
            name: 'Talmeed Naqvi',
            occupation: 'Co-Founder',
            profile: profile2,
            bg: '#FFE2AE'
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            occupation: 'Content Writer @Company',
            profile: profile3,
            bg: '#F4F4F4'
        },
        {
            id: 4,
            name: 'Leslie Alexander',
            occupation: 'Content Writer @Company',
            profile: profile4,
            bg: '#F4F4F4'
        }
    ]

    return (
        <>
            <FlexParent>
                <h1>
                    <span className="styledblack">Our </span>{" "}
                    <span className="styledYellow"> Team</span>
                </h1>
                {cardObj.map((e) => {
                    return (
                        <div key={e.id}  >
                            <FlexCard style={{ backgroundColor: e.bg }}>
                                <img className="profileimg" src={e.profile} alt="profile1" />
                                <h2>{e.name}</h2>
                                <p>{e.occupation}</p>
                                <div>
                                    <div className="fleximg">
                                        <img src={fbp} alt="fbp" />
                                        <img src={lindedinp} alt="lindedinp" />
                                        <img src={instap} alt="instap" />
                                        <img src={xp} alt="xp" />
                                    </div>
                                </div>
                            </FlexCard>
                        </div >
                    )
                })}

            </FlexParent >
        </>
    )
}
export default TeamCard;