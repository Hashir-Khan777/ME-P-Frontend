import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const FlexBox = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
max-width: 80%;
margin: auto;
background-color: ${Theme.WHITE_COLOR};
z-index: 10;
position: relative;
flex-wrap: wrap;
padding: 10px 15px;
border-radius: 50px;
box-shadow: ${Theme.BOX_SHADOW};
position: relative;
top: -9rem;



${mobile`

flex-direction: column;

`}

`

export const FlexChild = styled.div`
display: flex;
justify-content:space-between ;
align-items: center;
flex-direction: column;

p{
    color: ${Theme.DIM_GREY_COLOR};
    padding: 0px;
    font-weight: 100;
    position: relative;
    top: 0.5rem;
    left: -0.5rem
}

.MuiOutlinedInput-notchedOutline {
  border: none !important;
  font-weight: 100;

}


${mobile`
.bordermobile{
    border: 1px solid #ccc !important; 
       border-radius: 4px;
       padding:0px;
       color: red !important;
}
`}

.searchButton{
    background-color: ${Theme.BLACK_COLOR};
    color: ${Theme.WHITE_COLOR};
    padding: 15px  40px;
    border-radius: 40px;
    border: none;
    font-size: medium;
cursor: pointer;
    &:hover{
        background-color: ${Theme.YELLOW};
    color: ${Theme.BLACK_COLOR };
    }

}

.alignboth{
    display: flex;
    align-items: center;
    gap: 1px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    font-weight: 100;
}

`

