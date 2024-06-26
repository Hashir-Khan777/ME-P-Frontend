import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const ParentFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 55px 0px;
  flex-direction: column;
  background-color: ${Theme.LIGHT_GREY};

  div {
    max-width: 30%;
  }

  h1 {
    color: ${Theme.CHANNEL_BLACK};
    margin: 5px 0px;
    font-size: 40px;
    letter-spacing: -2px;
    line-height: 40px;
  }
  p {
    color: ${Theme.DIM_GREY_COLOR};
  }

  ${mobile`
    div{
        max-width: 90%;
    }
    h1{
        margin: 5px 0px;
        font-size: 20px;
        letter-spacing: 0px;
        line-height: 20px;

    }
`}
`;
