import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const FlexParent = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-around;
  padding: 50px 0px;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 20px;
  margin: auto;
  overflow: hidden;

  h1 {
    font-size: 1.8rem;
    letter-spacing: -1px;
    font-weight: 700;
    min-width: 100%;
    align-items: center;
    margin: auto;
    text-align: center;
  }

  ${mobile`

h1{
    font-size: 20px;
letter-spacing: 0px;
}
`}

  .styledYellow {
    color: ${Theme.YELLOW};
  }
  .styledblack {
    color: ${Theme.CHANNEL_BLACK};
  }
`;

export const FlexCard = styled.div`
  min-width: 220px;
  max-width: 220px;
  max-height: 270px;
  min-height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  text-align: center;

  margin: 10px 0px;
  h2 {
    font-size: 1.2rem;
    letter-spacing: -1px;
    margin-top:10px;
    color: ${Theme.CHANNEL_BLACK};
    font-weight: 700;
  }

  ${mobile`

h2{
    font-size: 14px;
    letter-spacing: 0px;
}
`}
  p {
    margin: 3px 0px 10px 0px;
    color: #6d6e76;
    font-size: 10px;
  }

  .profileimg {
    border-radius: 50%;
    max-width: 50%;
    display: block;
    margin: auto;
  }

  .fleximg {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 80%;
    margin: auto;
    img {
      max-width: 12.5%;
    }
  }
`;
