import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ParentFLex = styled.div`
background-color: ${Theme.WHITE_COLOR};
display: flex;
align-items: start;
justify-content: space-evenly;
flex-wrap: wrap;
width: 100%;
position: relative;
top: 2rem;

${mobile`

`}

${tablet`
top: 4rem;
`}

`

export const ChildFlex = styled.div`

max-width: 33%;
position: relative;
left: 8rem;
padding: 20px;
min-height: 40vh;
z-index: 1;
background-color: ${Theme.WHITE_COLOR};

h1{
    color: #232536;
    font-weight: bold;
    font-size: 35px;
    margin: 8px 0px;
}

p{
    color: ${Theme.CHANNEL_BLACK};
    margin: 0px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.5px;
}


${mobile`
    max-width: 100%;
    font-size: 100%;
    padding: 0px;
    min-height: 10vh;
left: 0rem;

h1{
        font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0px;
    margin: 14px 0px;
        
    }
    p{
    text-align: center;
    }
`}

${tablet`
max-width: 50%;
left: 2rem;
padding: 0;
min-height: 30vh;
`}
`

export const ChildFlex1 = styled.div`

max-width: 40%;
padding: 40px;
background-color: ${Theme.WHITE_COLOR};

p{
    color: ${Theme.DIM_GREY_COLOR};
    font-size: 14px;
    max-width: 80%;
    position: relative;
    left: 3rem;
    top: 3rem;
}

${mobile`
    max-width: 100%;
    padding: 0px;
    p{
    font-size: 12px;
        text-align: center;
        display: block;
        margin: auto;
        left: 0;
        top: 0;
    }
`}

${tablet`
    max-width: 50%;
    padding: 0px;
`}

`