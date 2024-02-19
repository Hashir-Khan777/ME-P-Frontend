import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";



export const FlexParent = styled.div`

display: flex;
align-items: center;
max-width: 90%;
margin: auto;
text-align: center;
justify-content: space-around;
padding: 10px 0px;
flex-wrap: wrap;
margin-top: 50px;
gap: 20px;


${mobile`
max-width:100%;
justify-content: center;


`}



`



export const FlexCard = styled.div`

min-width: 378px;
max-width: 378px;
max-height: 294px;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
text-align: center;

margin: 10px auto;
h2 {
    font-size: 24px;
margin: 8px 0px;
color: ${Theme.CHANNEL_BLACK};
}


${mobile`

min-width:199px;
max-width: 199px;
max-height: 294px;
h2{
    font-size: 16px;

}

p {
    margin: 3px 0px 10px 0px;
    font-size:small;
    }
`}

.profileimg{
    
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