import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const FlexParent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  justify-content: space-evenly;
  padding: 10px 0px;
  margin: 50px auto;
  gap: 20px;
`;

export const FlexCard = styled.div`
  width: 250px;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  text-align: start;
  border: 1px solid ${Theme.LIGHT_GREY_COLOR};
  margin: 10px auto;
  h2 {
    font-size: 20px;
    letter-spacing: -1px;
    margin: 0px 0px;
    color: ${Theme.BLACK_COLOR};
  }

  .imageContainer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .profileimg {
    width: 30px;
    height: 100%;
    padding: 5px;
  }

  p {
    font-size: 18px;
    line-height: 1.2em;
    margin: 0px 0px 10px 0px;
  }

  ${mobile`
h2 {
    font-size: 18px;
    letter-spacing: 0px;}

`}
`;
