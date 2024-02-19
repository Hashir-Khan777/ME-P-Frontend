import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import bar from "../../assets/bar.png"



export const Styleddiv = styled.div`
margin: 0px auto auto auto;
display: flex;
max-width: 84%;
height: fit-content;
position: relative;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 150px;




${mobile`

max-width: 90%;
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




gap: 50px;


${mobile`

flex-direction: column;
padding: 15px;
gap: 10px;

`}
${tablet`

flex-direction: column;
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
    font-size: 28;
    letter-spacing: -1px;
    margin: 0px auto;
}

.styledyellow{

    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
}


${mobile`
max-width: 100%;
border-bottom: 1px solid black;

h1{
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0px auto;
}


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

max-width: 40%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;


h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 28;
    letter-spacing: -1px;
    margin: 0px auto
}

.styledyellow{

    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
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