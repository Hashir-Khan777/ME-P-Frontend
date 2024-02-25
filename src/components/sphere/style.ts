import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import ovel from '../../assets/ovel.png'


export const FlexParent = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 65%;
margin: 30px auto;
overflow: hidden;

`

export const FlexChild = styled.div`

display: flex;
align-items: center;
justify-content: center;
max-width: 70%;
flex-direction: column;
text-align: center;
background-image: url(${ovel});
background-position: center;
background-repeat: no-repeat;
background-size:cover;
min-height: 45vh;
padding: 180px;
h1{
    font-size: 32px;
    letter-spacing: -2px;
    color: ${Theme.CHANNEL_BLACK};
    margin: 5px auto;
}

p{
    color: #6D6E76;
}

button{
    border: none;
    background-color: ${Theme.YELLOW};
    color: ${Theme.BLACK_COLOR};
    padding: 20px 50px;
    font-size: large;
    margin-top: 10px;
    cursor: pointer;
    &:hover{
        background-color: ${Theme.BLACK_COLOR};
    color: ${Theme.YELLOW };
    }

}

${mobile`
h1{
    font-size: 16px;
    letter-spacing: 0px;
    margin: 5px auto;
}

min-height: 20vh;
padding: 0px;
background-image: none;
max-width: 100%;

`}

`