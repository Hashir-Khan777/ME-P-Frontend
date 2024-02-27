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

  ${tablet`
    max-width:95%;
  `}
  ${mobile`
  max-width:60%;
    flex-direction: column;
    padding: 10px 15px;
    top: 2rem;

  `}
`;

export const FlexChild = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  p {
    color: ${Theme.DIM_GREY_COLOR};
    padding: 0px;
    font-weight: 100;
    position: relative;
    top: 0.5rem;
    left: -0.5rem;
  }
  .inputLabel {
    font-size: 1rem;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none !important;
    font-weight: 100;
  }
  .icon {
    width: 1.4rem;
  }

  ${mobile`
    .bordermobile {
      border: 1px solid #ccc !important; 
      border-radius: 4px;
      padding: 0px;
      color: red !important;
      width: 6rem;
      height: 3.8rem;
      font-size: 10px;
    }
    p{
        font-size: 11px;
    }
    .inputLabel{
        font-size: 12px;
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
    padding: 8px 14px;
    font-size: 10px;
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
