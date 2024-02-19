import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const FlexBox = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
max-width: 80%;
margin: auto;
margin-top: -13%;
background-color: ${Theme.WHITE_COLOR};
z-index: 10;
position: relative;
flex-wrap: wrap;
padding: 10px 15px;
border-radius: 50px;
box-shadow: ${Theme.BOX_SHADOW};




${mobile`

flex-direction: column;

`}

`

export const FlexChild = styled.div`
display: flex;
justify-content:space-between ;
align-items: center;
flex-direction: column;
/* padding-bottom: 25px; */

p{
    color: ${Theme.DIM_GREY_COLOR};
    padding: 0px;
    font-weight: 100;
    
}

.MuiOutlinedInput-notchedOutline {
  border: none !important;
  font-weight: 100;

}
.mrtop{
    margin-top: -59px ;
}
.mrbottom{
    margin-bottom: -40px ;
}

${mobile`

.mrtop{
    margin-top: 0px ;
}
.mrbottom{
    margin-bottom: 0px ;
}

`}

${mobile`

.bordermobile{
    border: 1px solid #ccc !important; 
       border-radius: 4px;
       padding:0px;
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

