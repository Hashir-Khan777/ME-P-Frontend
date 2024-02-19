import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ParentFlex = styled.div`
display: flex;

width: 100%;
align-items: center;
justify-content: center;
text-align: center;
margin: auto;
height: 20vh;
flex-direction: column;
padding: 50px 0px;
background-color: ${Theme.LIGHT_GREY};

div{
    max-width: 30%;
}

h1{
    color: ${Theme.CHANNEL_BLACK};
    margin: 5px 0px;
    font-size: 40px;
}
p{
    color: ${Theme.DIM_GREY_COLOR};
}


${mobile`
    div{
        max-width: 90%;
    }
    h1{
        margin: 5px 0px;
        font-size: 20px;
    }
`}
`