import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import ornament from "../../assets/ornament.png"



export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
height: 90vh;
background-color: ${Theme.LIGHT_GREY};
max-width: 100%;
padding: 0px 10px;
overflow: hidden;

${mobile`
height: 50vh;


`}
${tablet`
height: 60vh;


`}

`

export const FlexChild1 = styled.div`

max-width: 50%;
text-align: left;

h1{
    margin-top: -20%;
    font-size: 80px;
    margin-left: 50px;
    font-weight: 900;
   
    
}


p{
    color: ${Theme.GREY_COLOR};
    font-size: 24px;
    padding: 0px 30px;
    justify-content: last baseline;
    margin-left: 30px;

}

${mobile`

max-width: 100%;
text-align: center; 

 h1{
    font-size: 40px;
    margin-top: 0px;
    margin-left: 0px;

 }
 p{
    font-size: 12px;
    margin-left: 0px;

 }


`}
${tablet`

max-width: 100%;
text-align: center;
margin-bottom: 10px;

 h1{
    font-size: 60px;
    margin-top: 0px;

 }
 p{
    font-size: 16px;
    

 }


`}


`

export const FlexChild2 = styled.div`

max-width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
background-image: url(${ornament});
background-position: center;
background-repeat: no-repeat;
background-size: 80% 80%;
height: 70vh;
img{
   width: 75%;
   margin-top: -230px;

}

${mobile`

    display: none;


`}

${tablet`

    display: none;
`}

`