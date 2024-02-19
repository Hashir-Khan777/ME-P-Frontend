import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";




export const Styleddiv = styled.div`
margin: 80px auto auto auto;
display: flex;
max-width: 90%;
height: fit-content;
align-items: center;
justify-content: center;



${mobile`

max-width: 90%;

`}

span p {
    text-align: right;
    padding: 0px;
    margin: 0px;

   
   

}

`

export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

width: 100%;



margin: 0px auto auto auto;
gap: 45px;


${mobile`

flex-direction: column;
padding: 15px;
gap: 25px;

`}
${tablet`

flex-direction: column;
`}

h1, h3 ,p {
    margin: 7px;
}


`

export const FlexChild1 = styled.div`

max-width: 40%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
text-align: left ;
padding: 10px;



 

h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 36px;
    letter-spacing: -2px;
}

.styledyellow{

    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  ${Theme.CHANNEL_BLACK};
}


${mobile`
max-width: 100%;
text-align: center;

h1{
    font-size: 18px;
    letter-spacing: 0px;}


`}
${tablet`
max-width: 100%;
border-bottom: 1px solid black;


h1{
    font-size: 130%;
}


`}
`

export const FlexChild2 = styled.div`

max-width: 50%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
position: relative;
img{
    max-width: 100%;
}

.shape{
    position: absolute;
    
    bottom: -8%;
    left:6%;

    img{
        max-width: 70%;
    } 
     }


     ${mobile`
    .shape{
        display: none;
    } 
    `}   

${tablet`
    .shape{
        display: none;
    } 
    `} 




${mobile`
max-width: 100%;


h1{
    font-size: 130%;
}

`}  


${tablet`
max-width: 100%;

h1{
    font-size: 130%;
}


`}
`