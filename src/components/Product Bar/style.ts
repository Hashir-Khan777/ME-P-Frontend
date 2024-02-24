import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const StyledAppBar = styled.div`

position: static;
background-color: ${Theme.YELLOW};
height: 30px;
display: flex;
align-items: center;
font-size: 12px;
width:100vw;
color: ${Theme.WHITE_COLOR};
${mobile`
   display: none;
position: absolute;
width: max-content;
background-color: transparent;
right: 0px;
bottom: 0px;
`}

${tablet`
position: absolute;
width: max-content;
right: 0px;
top: 3.5rem;
`}

.filter{

    margin-top: 65px;
    background-color: ${Theme.YELLOW};
    font-size: small;
    padding: 0px 5px;
    border-radius: 5px;
    display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-around;
     p{
        padding:0px;
        margin: 3px;
     }
}
`