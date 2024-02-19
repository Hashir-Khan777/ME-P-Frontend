import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ContainerDiv = styled.div`

width: 100%;
margin-top: 70px;

.bar{
    max-width: 80%;
    margin: auto;
    
}
`

export const ParentFlex = styled.div`

max-width: 90%;
display: flex;
align-items: start;
justify-content: center;
margin: auto;

${mobile`
flex-direction: column;
max-width: 95%;
align-items: center;
justify-content: center;

`}
`

export const ChildFLex = styled.div`

min-width: 16%;
max-width: fit-content;
display: flex;
align-items: center;
justify-content: start;
margin:  0px;
text-align: center;
flex-direction: column;
gap: 20px;
padding-bottom: 20px;
min-height:22vh;


${mobile`
gap: 0px;
min-height:10vh;
max-width: 100%;
min-width: 100%;


`}


button{
    border: none;
    background-color: ${Theme.LIGHT_GREY};
    color: ${Theme.YELLOW};
    padding: 5px 9px;
  
}


.headerColor{
    background-color: ${Theme.YELLOW};
    min-width: 100%;
    color: ${Theme.WHITE_COLOR};
    margin-bottom: 16px;
}

.yellow{
    color: ${Theme.YELLOW};
   
}

.grey{
    color: ${Theme.DARK_GREY_COLOR};
}
`

export const ProductDiv = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 15px;
img{
    max-width: 60px;
    max-height: 60px;
    border-radius: 10px;
}
p{
    margin: 0px 0px;
    font-size: small;
    color: ${Theme.GREY_COLOR};
}

`