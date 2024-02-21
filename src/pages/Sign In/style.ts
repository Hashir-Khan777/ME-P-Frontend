import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import { table } from "console";
import banner from "../../assets/signIn.png";

export const ParentFlex = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
max-height: 150vh;
padding-bottom: 0px;
overflow: hidden;
`

export const FlexChild1 = styled.div`
overflow: hidden;
min-width: 50%;
min-height: 150vh;
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
position: relative;
top: -8rem;
left: 2rem;

.validation-message{
    color: red;
    margin-top: 0px;
}

.secondary-button{
    border: 1px solid #E0E0E9;
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
    width: 300px;
    font-size: 0.8rem;
    margin-bottom: 1rem
}
button{
    border: 1px solid #E0E0E9;
    border-radius: 11px;
    padding: 15px 20px;
    background-color: ${Theme.WHITE_COLOR};
    color: ${Theme.BLACK_COLOR};
    box-shadow: ${Theme.BOX_SHADOW} ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-weight: 600;
    width: 12vw;
    font-size:1rem;
    margin-bottom: 1rem
}
${mobile`
    button {
      font-size: 10px !important;
    }
    label {
      font-size: 10px;
    }
    top: 0;
    left: 0;
  `}
${tablet`
    button {
      font-size: 12px !important;
    }
    label {
      font-size: 12px;
    }
    top: 0;
    left: 0;
  `}

h1{
    font-size: 26px;
    margin: 0px 0px 10px -365px;
}

${mobile`

h1{
    margin: 0px 0px 0px 0px;
    font-size: 20px;

}

button{
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-size:12px !important;
    max-width: 75%;    
    width: 24vw;

    img{
        max-width: 7%;
    }
}
`}

label {
    font-size: 14px;
}
input{
    width: 100%;
    border: 1px solid ${Theme.CHANNEL_BLACK};
    border-radius: 10px;
    padding: 10px;
    font-size: 10px;
    margin-top: 0.5rem;
}

.coloryellow{
    color: ${Theme.YELLOW};
}

${mobile`

.fa{
    font-size:14px;
}
label{
    font-size: 12px;
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
border-radius: 5px;
margin: 0px 4px;
font-weight: bold;
${mobile`
width:100%;
`}
`