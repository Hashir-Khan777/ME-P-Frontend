import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ParentFLex = styled.div`
    
display: flex;
align-items: start;
justify-content: space-around;
flex-wrap: wrap;
width: 90%;
padding: 50px;
margin: auto;
background-color: ${Theme.WHITE_COLOR};

${mobile`
    padding:30px 0px;
`}
`

export const ChildFlex = styled.div`

max-width: 40%;
padding: 40px;
min-height: 20vh;
z-index: 1;
background-color: ${Theme.WHITE_COLOR};

h1{
    color: #232536;
    font-weight: bold;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -2px;
    margin: 14px 0px;
    
}

p{
    color: ${Theme.CHANNEL_BLACK};
    margin: 0px;
}


${mobile`
    max-width: 100%;
    font-size: 100%;
    padding: 0px;
    min-height: 10vh;


    h1{
        font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0px;
    margin: 14px 0px;
        
    }
   

`}
`

export const ChildFlex1 = styled.div`

max-width: 40%;
padding: 40px;
background-color: ${Theme.WHITE_COLOR};

p{
    color: ${Theme.DIM_GREY_COLOR};
    
}

${mobile`
    max-width: 100%;
    padding: 0px;
    p{
        text-align: center;
    }
`}
`