import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ParentFlex = styled.div`

max-width: 70%;
margin: auto;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 90px auto;
text-align: center;


a {
    text-decoration: none;
    color: black;
}

${mobile`
max-width: 90%;


`}

h1{
    font-size: 64px;
}


${mobile`

    h1{
        font-size: 32px;
    }


`}

.flexclass{

    display: flex;
    justify-content: space-between;
    align-items: center;


}

button{
    border: none;
    width: 45%;
    height: 50px;
    font-size: medium;
    border: 1px solid ${Theme.LIGHT_GREY_COLOR};
    border-radius: 10px;
    font-weight: bold;
    cursor:pointer;
}

${mobile`
    
    button{
       
        width: 100%;
  
    }

    .flexclass{

        flex-direction: column;
        gap:20px;
    
    
    }

`}

.color1{

    background-color: ${Theme.YELLOW};
    color: ${Theme.BLACK_COLOR};
    
    &:hover{
        background-color: ${Theme.BLACK_COLOR};
        color: ${Theme.YELLOW };

    }
}
.color2{

    background-color: ${Theme.WHITE_COLOR};
    color: ${Theme.BLACK_COLOR};
    
    &:hover{
        background-color: ${Theme.BLACK_COLOR};
        color: ${Theme.WHITE_COLOR};

    }
}

.yellocol{
    color: ${Theme.YELLOW};
}



`