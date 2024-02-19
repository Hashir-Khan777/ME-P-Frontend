import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";






export const FlexParent = styled.div`

display: flex;
align-items: center;
width: 90%;
justify-content: space-between;
padding: 10px 0px;
flex-wrap: wrap;
margin: auto;
margin-top: 50px;
gap: 20px;
h1{
    font-size: 36px;
}

.lorem{
    margin-top: 50px;
}

${mobile`
justify-content: center;
.lorem{
    text-align: center;
}
h1{
    font-size: 20px;
    font-weight: 600;
}

`}


`



export const FlexCard = styled.div`

min-width: 200px;
max-width: 200px;
max-height: 200px;
justify-content: start;
align-items: start;
flex-direction: column;
padding: 40px;
text-align: start;
border: 1px solid ${Theme.LIGHT_GREY_COLOR};
margin: 10px auto;
h2 {
    font-size: 24px;
    letter-spacing: -1px;
margin: 0px 0px;
color: ${Theme.BLACK_COLOR};
}
p {
margin: 0px 0px 10px 0px;
}

.profileimg{
    
    max-width: 12%;
}

img{
    background-color: #FBF6EA;
    padding: 5px;
    border-radius: 6px;
}

${mobile`
min-width: 200px;
max-width: 200px;
max-height: 200px;
h2 {
    font-size: 16px;
    letter-spacing: 0px;}

`}


`