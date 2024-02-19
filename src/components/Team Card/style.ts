import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";



export const FlexParent = styled.div`

display: flex;
align-items: center;
width: 95%;
justify-content: space-around;
padding: 50px 0px;
flex-wrap: wrap;
margin-top: 50px;
gap: 20px;
margin: auto;


h1{
    font-size: 40px;
    letter-spacing: -2px;

}

${mobile`

h1{
    font-size: 20px;
letter-spacing: 0px;
}
`
}

.fullHeading{
    min-width: 100%;
    align-items: center;
    margin: auto;
    text-align: center;
}
.styledYellow{
    color: ${Theme.YELLOW};
}
.styledblack{
    color: ${Theme.CHANNEL_BLACK};
}


`



export const FlexCard = styled.div`

min-width: 230px;
max-width: 230px;
max-height: 270px;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 40px;
text-align: center;

margin: 10px 0px;
h2 {
    font-size: 28px;
    letter-spacing: -1px;
margin: 8px 0px;
color: ${Theme.CHANNEL_BLACK};
font-weight: 600;
}

${mobile`

h2{
    font-size: 14px;
    letter-spacing: 0px;
}
`
}
p {
margin: 3px 0px 10px 0px;
}

.profileimg{
    border-radius: 50%;
    max-width: 50%;
}



.fleximg{
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 50%;
    margin: auto;
    img{
        max-width: 14%;
    }
}

`