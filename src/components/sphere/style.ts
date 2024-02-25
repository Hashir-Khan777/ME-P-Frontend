import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import ovel from '../../assets/ovel.png'


export const FlexParent = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 65%;
margin: 0 auto;
overflow: hidden;

`

export const FlexChild = styled.div`

display: flex;
align-items: center;
justify-content: center;
max-width: 45%;
flex-direction: column;
text-align: center;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
min-height: 45vh;
margin-top: 4rem;
background-image: url(${ovel});

h1{
    font-size: 1.8rem;
    letter-spacing: -2px;
    color: ${Theme.CHANNEL_BLACK};
    font-weight: 700;
    margin-bottom: 1rem;
}

p{
    color: #6D6E76;
    margin-bottom: 1rem;
    font-size: 14px;
    max-width: 80%;
}

button{
    background-color: ${Theme.YELLOW};
    color: ${Theme.BLACK_COLOR};
    border: none;
    padding: 10px 30px;
    font-size: 15px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
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