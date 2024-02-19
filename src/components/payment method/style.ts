import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ContainerDiv = styled.div`

max-width: 90%;
margin: auto;

.orderbutton{
    border: none;
    padding: 14px 50px;
    border-radius: 10px;
    background-color: ${Theme.YELLOW};
    color: black;
    
    &:hover{
    background-color: ${Theme.BLACK_COLOR};
    color: ${Theme.YELLOW};

}

}

.heading{
    p{
        margin: 7px 0px;
    }
}

.shippingclass{
    padding: 20px;
    background-color: ${Theme.LIGHT_GREY};
      border-radius: 20px;

}

${mobile`

.orderbutton{
    width: 100%;
}

.heading{
    font-size: 18px !important;
}
max-width: 85%;

`}
`
export const ParentDiv = styled.div`

max-width: 60%;
margin-right: auto;

img{
    max-width: 60px;
}

${mobile`


max-width: 100%;

`}



.marginbottom{
    border-bottom: 1px solid ${Theme.LIGHT_GREY_COLOR};
}

`

export const JustifyDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;
flex-wrap: wrap;



.password-input {
  
}

.input-container {
  position: relative;
}

.customWidth{
    min-width: 45%;
    max-width: 45%;
}

input {
  padding: 10px;
  border: 1px solid ${Theme.LIGHT_GREY_COLOR};
  border-radius: 10px;
    height: 20px;
    margin: 15px 0px 0px 0px;
    width: 90%;
}

${mobile`

flex-direction: column;

.customWidth{
    min-width: 100%;
    max-width: 100%;
}

`}

.toggle-icon {
  position: absolute;
  top: 60%;
  right: 22px;
  transform: translateY(-50%);
  cursor: pointer;
}

`