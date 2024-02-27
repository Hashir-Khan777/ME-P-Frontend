import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const ParentContainer = styled.div`
  bottom: 0px;
  background-color: #171718;
  padding: 20px 0px;
  width: 100%;

  a {
    text-decoration: none;
    color: ${Theme.LIGHT_GREY_COLOR};
  }
  .line {
    width: 100%
    margin: auto;
    color: ${Theme.LIGHT_GREY_COLOR};
    padding: 2rem 0px;
  }
`;

export const FlexParent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-wrap: wrap;
  margin-top: 2rem;
  line-height: 3;
  color: ${Theme.LIGHT_GREY_COLOR};

  ${mobile`
flex-direction: column;
`}
  ${tablet`
line-height: 2;
`}

  p {
    font-size: 0.8rem;
    color: #d4d4d4;
  }

  .logoimg {
    max-width: 100px;
  }

  .SocialMedia {
    width: 30px;
    margin: 0px 7px;
  }

  ${mobile`
  p {
    font-size: 0.6rem;
  }
  .logoimg {
    max-width: 70px;
    margin-bottom: 10px;
  }

    `}
`;
export const FlexParent1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  gap: 5.8rem;
  color: ${Theme.LIGHT_GREY_COLOR};

  p {
    font-size: 0.8rem;
    line-height: 2.2;
  }

  .yellow {
    color: ${Theme.YELLOW};
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  ${mobile`
justify-content: center;
gap: 1rem;

p {
  font-size: 0.6rem;
}

.yellow {
  font-size: 12px;
}

`}
  ${tablet`
`}


   
`;

export const FlexParent2 = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${Theme.LIGHT_GREY_COLOR};

  img {
    margin: -18px;
    max-width: 6rem;
    padding: 0px;
  }

  ${mobile`

flex-direction: column;
img {
  max-width: 4rem;
  margin-top: 6px;
}
`}
`;
