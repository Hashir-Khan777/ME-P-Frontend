import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const Styleddiv = styled.div`
margin: 5rem auto auto auto;
display: flex   ;
width: 80%;
height: fit-content;
position: relative;
align-items: center;
justify-content: center;


h1{
    color: ${Theme.CHANNEL_BLACK};
    font-size:10px;
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
    margin-bottom: 10px;
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
    font-size: 30px;
}

${mobile`

max-width: 90%;
h1{
    font-size: 14px;
}
.styledGrey {
    font-size: 20px;

}
.styledyellow {
    font-size: 14px;
}
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
padding-top: 4rem;
width: 100%;



margin: 0px ;
gap: ;


${mobile`

flex-direction: column;
padding: 15px;
gap: 5px;

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
    font-size: 20px;
    font-weight: semibold;
    line-height: 1.2em;
    text-align: top;

}

.styledyellow{
    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
    font-size: 15px;
}


${mobile`
max-width: 100%;
border-bottom: 1px solid #ccc;
padding-bottom: 1rem;

h1{
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: top;
}

.styledGrey{
    font-size: 13px;
}


`}
${tablet`
max-width: 100%;
border-bottom: 1px solid black;
margin-bottom:20px;


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
    font-size: 20px;
    font-weight: semibold;
    line-height: 1.2;
    text-align: top;
}

.styledyellow{
    color: ${Theme.YELLOW};
}

.styledGrey{
    color:  ${Theme.DIM_GREY_COLOR};
    font-size: 15px;
}


${mobile`
max-width: 100%;
padding-top: 1rem;


h1{
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: top;
}
.styledGrey{
    font-size: 13px;
}

`}  


${tablet`
max-width: 100%;

h1{
    font-size: 130%;
}


`}
`