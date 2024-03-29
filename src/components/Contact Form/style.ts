import { styled } from "styled-components";
import Theme from "../../constants/theme";
import { mobile } from "../../utils/responsive";




export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: center;
max-width: 60%;
gap: 15px;
flex-direction: column;
margin: auto;
padding: 60px 0px;

div, input, textarea {
    min-width: 90%;
}

input, textarea{
    min-height: 50px;
    border: 1px solid ${Theme.DARK_GREY_COLOR};
    font-size: 12px;
    
}

select{
    min-width: 90%;
    min-height: 50px;
    border: 1px solid ${Theme.DARK_GREY_COLOR};
    font-size: 12px;
    padding: 24px 20px;

}

select, option, input::placeholder, textarea::placeholder{
color: ${Theme.CHANNEL_BLACK};
font-size: 12px;

}

input::placeholder, textarea::placeholder{
    padding: 24px 20px;
}

button{
    min-width: 91%;
    border: none;
    background-color: ${Theme.YELLOW};
    font-size: 20px;
    font-weight: bold;
    min-height: 54px;
    text-align: center;
    cursor: pointer;
    &:hover{
        color: ${Theme.YELLOW};
        background-color: ${Theme.BLACK_COLOR};

    }
}

${mobile`

max-width: 100%;
button{
    font-size: 16px;

}

select{
    min-width: 90%;
    
   

}

`}

`