import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";



export const FlexParent = styled.div`

display: flex;
align-items: center;
width: 90%;
margin: auto;
justify-content: space-around;
padding: 50px 0px;
flex-wrap: wrap;
margin-top: 50px;
gap: 20px;

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
max-height: 320px;
justify-content: center;
align-items: start;
flex-direction: column;
padding: 40px;
text-align: center;
box-shadow: ${Theme.BOX_SHADOW};
text-align: left;
border-radius: 10px;
p{
    color: black;
}
button{
    border: none;
    color: ${Theme.BLACK_COLOR};
    padding: 13px 40px;
    font-weight: bolder;
    background-color: ${Theme.YELLOW};
    border-radius: 10px;
    width: 100%;
    margin: 16px 0px;
    cursor: pointer;

    &:hover{
        color: ${Theme.YELLOW};
        background-color: ${Theme.BLACK_COLOR };

    }
}

.pwidth{
    p{
        margin: 15px 0px;
    }
}
.justifybtn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Theme.LIGHT_GREY_COLOR};
}

margin: 10px 0px;
h1 {
    font-size: 24px;
margin: 8px 0px;
color: ${Theme.CHANNEL_BLACK};
}

${mobile`
    font-size: 16px;

`}
p {
margin: 3px 0px 10px 0px;
}
.sml{
    font-size:small;
    line-height:13px;
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