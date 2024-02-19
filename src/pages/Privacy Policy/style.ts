import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ContainerDiv = styled.div`
max-width: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


.header{
    min-height: 20vh;
    background-color: ${Theme.LIGHT_GREY};
    min-width: 100%;
}

h1{
    font-size: 48px;
    font-weight: bold;
    text-align:center;
}

${mobile`

h1{
    font-size: 24px;
    text-align: center;
}
`}

`


export const ParentFlex = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: space-around;
max-width: 80%;
margin: auto;
padding: 10px 0px;
margin-bottom: 60px;

${mobile`
max-width: 90%;


`}



h1{
    font-size: 48px;
    font-weight: bold;
    text-align:center;
}

h2{
    font-size: 36px;
    font-weight: bold;
    
}

${mobile`

h1 , h2{
    font-size: 20px;
    text-align: center;
}
`}

`