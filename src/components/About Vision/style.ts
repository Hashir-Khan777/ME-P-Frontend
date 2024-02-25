import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import bar from "../../assets/bar.png"



export const Styleddiv = styled.div`
margin: 0px auto auto auto;
display: flex;
max-width: 80%;
height: fit-content;
position: relative;
align-items: center;
justify-content: center;
flex-direction: column;
left: 4rem;

${mobile`
left: 0;
max-width: 90%;
margin: 0 2.7rem;
margin-top: 1rem;
.barclass{
    display: none;
}
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
justify-content: space-around;
background-color: ${Theme.LIGHT_GREY};
padding: 50px;
width: 100%;
margin: 0px;
padding-top: 8rem;
padding-bottom: 10px;
${mobile`

flex-direction: column;
padding: 30px;
gap: 10px;

`}
${tablet`

flex-direction: column;
padding: 2rem 4rem;
`}

`

export const FlexChild1 = styled.div`

max-width: 40%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
text-align: left ;


h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 1.5rem;
    letter-spacing: 0.2px;
    margin: 0px auto;
    font-weight: bold;
    margin-bottom: 10px;
}
.styledyellow{
    font-size: 28;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: ${Theme.YELLOW};
    position: relative;
    left: -1rem;
    margin-bottom: 10px;
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
    font-size: 13px;
}


${mobile`
max-width: 100%;

h1{
    font-size: 14px;
}
.styledGrey {
    font-size: 12px;
}


`}
${tablet`
 max-width: 100%;
 margin-bottom: 1.5rem;


h1{
    font-size: 130%;
}


`}
`

export const FlexChild2 = styled.div`

max-width: 40%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 1.5rem;
    letter-spacing: 0.2px;
    margin: 0px auto;
    font-weight: bold;
    margin-bottom: 10px;
}

.styledyellow{
    font-size: 28;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: ${Theme.YELLOW};
    position: relative;
    left: -1rem;
    margin-bottom: 10px;
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
    font-size: 13px;
}


${mobile`
max-width: 100%;


h1{
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0px auto;
}

`}  


${tablet`
max-width: 100%;

h1{
    font-size: 130%;
}


`}
`