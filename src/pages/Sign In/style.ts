import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import { table } from "console";
import banner from "../../assets/signIn.png";

export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
max-height: 87.5vh;
padding-bottom: 0px;
`

export const FlexChild1 = styled.div`
overflow: hidden;

min-width: 50%;
min-height: 87.5vh;
background-image: url(${banner});
background-size: cover; 
  background-repeat: no-repeat;
img{
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}

${mobile`

    display: none;


`}

${tablet`

    display: none;
`}

`

export const FlexChild2 = styled.div`

width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

.validation-message{
    color: red;
    margin-top: 0px;
}

button{
    border: none;
    border-radius: 11px;
    padding: 10px 20px;
    background-color: ${Theme.WHITE_COLOR};
    color: ${Theme.BLACK_COLOR};
    box-shadow: ${Theme.BOX_SHADOW} ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-weight: 600;



}

${mobile`
button{
    font-size:16px !important;

}
label{
    font-size: 14px;
}
`}

h1{
    font-size: 34px;
    margin: 0px 0px 10px -365px;
    color: ${Theme.CHANNEL_BLACK};

}

${mobile`

h1{
    margin: 0px 0px 0px 0px;
    font-size: 22px;

}

button{
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-size:14px !important;
    max-width: 75%;    

    img{
        max-width: 7%;
    }

}
`}

label{
    font-size: large;
}
input{
    width: 100%;
    border: 1px solid ${Theme.CHANNEL_BLACK};
    border-radius: 10px;
    font-size: large;
    padding: 10px 0px;
}

.coloryellow{
    color: ${Theme.YELLOW};
}

${mobile`

.fa{
    font-size:14px;
}
label{
    font-size: 14px;
}
span{
    display: none;
}
width: 100%

`}

${tablet`
span{
    display: none;
}
width: 100%

`

}

`

export const StyledButton = styled.button`

border: none;
background-color: ${Theme.YELLOW};
border-radius: 5px;
padding: 0px 18px;
color: ${Theme.WHITE_COLOR};
margin: 0px 8px;
font-weight: bold;

${mobile`
width:100%;
`}
`