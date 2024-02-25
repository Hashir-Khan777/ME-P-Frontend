import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import AboutBanner from "../../assets/aboutbanner.png";
import track from "../../assets/truck.png";

export const ParentFLex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 80%;
  min-height: 50vh;
  overflow: hidden;

  position: relative;

  margin: auto;
  margin-top: -1rem;

  background-image: url(${AboutBanner});
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .bar {
    position: absolute;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
    left: 22rem;
    width: 36.2vw;

    img {
      max-width: 100%;
    }
  }
  
  ${mobile`

  min-height: 20vh;
  margin-top: 3rem;
  .bar{
    display: none;
  }
`}
  ${tablet`
  min-height: 35vh;
  margin-top: 64px;

`}


`;

export const ChildFlex = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 4%;
  z-index: 5;
  left: 7rem;
  justify-content: space-between;
  padding: 12px 0px;
  min-width: 48%;
  flex-wrap: wrap;
  margin: auto;
  text-align: center;
  background-color: ${Theme.BLACK_COLOR};

  ${mobile`
justify-content: center;
bottom: 0;
left: auto;
padding: 4px 0px;
`}

  h1 {
    color: ${Theme.YELLOW};
    font-weight: bold;
    font-size: 2.5rem;
    margin: 0px;
    padding: 2px 40px;
  }
  p {
    font-size: small;
    color: ${Theme.DARK_GREY_COLOR};
    margin: 0px;
    padding: 5px 8px;
  }

  ${mobile`
justify-content: center;
h1 {
  font-size: 10px;
  margin: 0px;
  padding: 0;
}
p {
  font-size: 10px;
  margin: 0px;
  padding: 0;
}


`}
`;
