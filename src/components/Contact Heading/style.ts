import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";




export const FlexParent = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 40%;
flex-direction: column;
margin: auto;
text-align: center;
padding: 60px 0px;


h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 48px;
    margin: 5px 0px;
}

.fontweight{
    font-weight:bolder;
}

.styledyellow{

    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  #6D6E76;
}

${mobile`
width: 90%;
margin: auto;
h1{
    font-size: 24px;
    margin: 5px 0px;
}

p{
    font-size:small;
}

`}

`

