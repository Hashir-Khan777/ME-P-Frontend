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
${tablet`
margin: 1rem auto auto auto;
`}

`

export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 50px auto auto auto;
gap: 45px;

${mobile`
flex-direction: column;
padding: 15px;
gap: 25px;

h1{
text-align: center;
}

`}
${tablet`

flex-direction: column;
`}

h1, h3 ,p {
    margin: 7px;
}
h1, p {
    display: block;
    margin: auto;
    margin-bottom: 1rem;
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
padding: 10px 0px ;
position: relative;

.shape{
    position: absolute;
    right: -46%;
    top: 35px;

    img{
        max-width: 70%;
    } 
     }


     ${mobile`
    .shape{
        display: none;
    } 
    max-width: 100%;

    `}   

${tablet`
    .shape{
        display: none;
    } 
    `}  

h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 1.5rem;
    letter-spacing: -1px;
    font-weight: 700;

}
p {
    color: #232536;
    font-size: 1.2rem;
    letter-spacing: 0px;
    font-weight: 600;
}
.small-para{
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    font-weight: 500;
    max-width: 85%;
}
${mobile`

h1{
    font-size: 18px;
    margin: auto;
}
p {
    font-size: 14px;
}
.small-para{
    font-size: 12px;
}
`}

.styledyellow{
    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
}


${mobile`
max-width: 100%;

h1{
    font-size: 18px;
    letter-spacing: 0px;
    text-align: center;
}
p,h3{
    text-align:center;
}


`}
${tablet`
max-width: 100%;


h1{
    font-size: 130%;
}

p{
    max-width: 60%;
    text-align: center;
}
.small-para{
    max-width: 60%;
}

`}
`

export const FlexChild2 = styled.div`

max-width: 45%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

img{
    max-width: 100%;
}

${mobile`

width: 100%;
max-width: 100%;

`}  
${tablet`
max-width: 50%;

h1{
    font-size: 130%;
}


`}
`