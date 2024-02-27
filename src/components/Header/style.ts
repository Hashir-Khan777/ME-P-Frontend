import styled from "styled-components";
import { mobile } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const Styleddiv = styled.div`




`





export const StyledAppBar = styled.div`

position: static;
max-width: 95%;
margin: auto;
background-color: ${Theme.WHITE_COLOR};
height: 80px;
display: flex;
align-items: center;
justify-content: space-around;
font-weight: bold;
width: 100%;
.logosize{
  height: 60px;
  width: 80px
}
img{
  height: 34px;
}

${mobile`
.logosize{
  height: 50px;
  width: 70px
}
img{
  height: 24px;
}
`}

`
export const StyledImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
z-index: 1000;

`

export const Styledbutton = styled.button`

border: none;
background-color: ${Theme.YELLOW};
border-radius: 5px;
padding: 0px 38px;
width: 300px;
color: ${Theme.BLACK_COLOR};
margin: 15px 8px;
font-weight: bold;

&:hover{
  color: ${Theme.WHITE_COLOR};
  background-color: ${Theme.BLACK_COLOR};
}

a{
  text-decoration: none;
  color: ${Theme.WHITE_COLOR};

}
`