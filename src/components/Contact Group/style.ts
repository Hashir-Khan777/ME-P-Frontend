import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const FlexParent = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;
  margin: auto;
  text-align: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0px 30px;

  ${mobile`
max-width:100%;
justify-content: center;


`}
`;

export const FlexCard = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border-radius: 20px;

  h2 {
    font-size: 20px;
    color: ${Theme.CHANNEL_BLACK};
  }
  p{
    margin-top:10px;
  }

  ${mobile`

h2{
    font-size: 20px;

}

p {
    font-size: 16px;
    }
`}

  .profileimg {
    width: 30px;
    height: 40px;
    margin-bottom: 20px;
  }

  .fleximg {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 50%;
    margin: auto;
    img {
      max-width: 14%;
    }
  }
`;
