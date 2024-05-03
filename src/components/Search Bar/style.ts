import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 90%;
  margin: auto;
  background-color: ${Theme.WHITE_COLOR};
  z-index: 10;
  position: relative;
  bottom:3.5rem;
  padding: 10px 15px;
  border-radius: 30px;
  box-shadow: ${Theme.BOX_SHADOW};

  ${tablet`
    max-width:95%;
  `}
  ${mobile`
  width:320px;
    flex-direction: column;
    padding: 10px 0px;
    gap:15px;
    top: 2rem;

  `}
`;

export const FlexChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  p {
    color: ${Theme.DIM_GREY_COLOR};
    padding: 0px;
    font-weight: 100;
  }
  .inputLabel {
    font-size: 14px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none !important;
    font-weight: 100;
    w: 100%;
  }
  .icon {
    width: 1.4rem;
  }

  ${tablet`
  p{
    font-size:14px;
  }

  .inputLabel {    
    font-size: 14px;
  }

  `}

  ${mobile`
    .bordermobile {
      border: 1px solid #ccc !important; 
      border-radius: 4px;
      width:100%;
      margin:auto;
      padding: 0px;
      margin-top:15px;
      text-Align:center;
      color: red !important;
      height: 3.8rem;
      font-size: 10px;
    }
    p{
        font-size: 16px;
    }
    .inputLabel{
        font-size: 16px;
      }
      .icon{
        width: 1rem;
      }
  `}

  .searchButton {
    background-color: ${Theme.BLACK_COLOR};
    color: ${Theme.WHITE_COLOR};
    padding: 10px 30px; /* Adjust padding for smaller screens */
    border-radius: 20px; /* Adjust border-radius for smaller screens */
    border: none;
    font-size: medium;
    position: relative;
    top: -0.6rem;
    cursor: pointer;

    &:hover {
      background-color: ${Theme.YELLOW};
      color: ${Theme.BLACK_COLOR};
    }
  }

  ${mobile`
  .searchButton {
    padding: 10px 0;
    width: 80%;
    font-size: 16px;
}
`}

  .alignboth {
    display: flex;
    align-items: center;
    gap: 1px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    font-weight: 100;
  }
`;
