import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const FlexParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin: auto;
  text-align: center;
  padding: 60px 0px;

  h1 {
    color: ${Theme.CHANNEL_BLACK};
    font-size: 48px;
    margin: 5px 0px;
  }

  h2{
    font-size:20px
  }

  p {
    width: 60%;
    margin: auto;
  }

  .fontweight {
    font-weight: bolder;
  }

  .styledyellow {
    color: ${Theme.YELLOW};
  }

  .styledGrey {
    color: #6d6e76;
    font-size: 1rem;
    line-height: 1.5;
  }

  ${mobile`
width: 90%;
margin: auto;
h1{
    font-size: 24px;
    margin: 5px 0px;
}

p{
width:80%;
    font-size:small;
}
.styleGrey{
    font-size: 0.8rem;
}

`}
`;
