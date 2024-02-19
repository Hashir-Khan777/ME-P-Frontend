import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";




export const Styleddiv = styled.div`
margin: 200px auto auto auto;
display: flex;
max-width: 75%;
height: fit-content;
position: relative;
align-items: center;
justify-content: center;


${mobile`

max-width: 90%;

`}

span p {
    text-align: right;
    padding: 0px;
    margin: 0px;

    img{
        max-width: 80%;
        position: absolute;
        right: 0px;
        top: 0px;
    }
   

}

`

export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
background-color: ${Theme.LIGHT_GREY};
padding: 50px;
width: 100%;



margin: 0px auto auto auto;
gap: 25px;


${mobile`

flex-direction: column;
padding: 15px;

`}
${tablet`

flex-direction: column;
`}

`

export const FlexChild1 = styled.div`

max-width: 50%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
text-align: left ;


h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 220%;
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
    font-size: 130%;
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

max-width: 50%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;


h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size: 220%;
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