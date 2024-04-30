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
  gap:10px;
  line-height: 3;
  color: ${Theme.LIGHT_GREY_COLOR};

  ${mobile`
flex-direction: column;
`}
  ${tablet`
flex-direction: column;
line-height: 2;
`}

  p {
    font-size: 12px;
    color: #d4d4d4;
  }

  .logoimg {'
  max-width: 100px;
  }

  .SocialMedia {
    width: 30px;
    margin: 0px 7px;
  }

  ${mobile`
  p {
    font-size: 12px;
  }
  .logoimg {
    max-width: 70px;
  }

    `}
`;
export const FlexParent1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-wrap: wrap;
  color: ${Theme.LIGHT_GREY_COLOR};

  .flexChild {
    width: 180px;
  }

  p {
    font-size: 0.7rem;
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
justify-content: start;
gap: 1rem;

p {
  font-size: 12px;
}

.flexChild{
  padding:10px 20px;
  width:300px
}

.yellow {
  font-size: 12px;
}

`}

  ${tablet`
.flexChild{
width:250px;

}
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
