import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ParentContainer = styled.div`


bottom: 0px;
background-color: #171718;
padding: 20px 0px;

width: 100%;

a {
  text-decoration: none;
  color: ${Theme.LIGHT_GREY_COLOR};
}
.line{
    width: 82%;
    margin: auto;
    padding: 5px 0px;
    
    
}

`



export const FlexParent = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
color: ${Theme.LIGHT_GREY_COLOR};

${mobile`

flex-direction: column;

`}


    p{
        font-size: small;
    }

    .logoimg{
        max-width: 100px;
    }
   
.SocialMedia{
        width: 35px;
        margin: 0px 7px;
        }

    ${mobile`
      

    span{
        display: none;
        

    }
    `}
    ${tablet`
     

    span{
        display: none
    }
    `}

`
export const FlexParent1 = styled.div`
display: flex;
justify-content: space-around;
align-items: start;
flex-wrap: wrap;
color: ${Theme.LIGHT_GREY_COLOR};

${mobile`

flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`}
${tablet`

flex-wrap: wrap;

`}


    p{
        font-size: medium;
    }

    .yellow{
        color: ${Theme.YELLOW};
        font-weight: bold;
    }
 
`

export const FlexParent2 = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
/* padding: 0px 22px; */
flex-wrap: wrap;
color: ${Theme.LIGHT_GREY_COLOR};

img{
    margin: 0px ;
    max-width: 70px;
    padding: 0px;

}

${mobile`

flex-direction: column;

`}

`