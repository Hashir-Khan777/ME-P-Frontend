import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import ornament from "../../assets/ornament.png";

export const ParentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  background-color: ${Theme.LIGHT_GREY};
  max-width: 100%;
  padding: 0px 10px;
  overflow: hidden;

  ${mobile`
height: 50vh;


`}
  ${tablet`
height: 85vh;
`}
`;

export const FlexChild1 = styled.div`
  max-width: 40%;
  text-align: left;
  position: relative;
  top: -2rem;

  h1 {
    font-size: 3.5rem;
    margin-left: 50px;
    font-weight: 900;
    color: #313131;
    line-height: 4rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${Theme.GREY_COLOR};
    font-size: 1rem;
    padding: 0px 30px;
    justify-content: center;
    margin-left: 30px;
    line-height: 2rem;
  }

  ${mobile`
top: 0;
max-width: 100%;
text-align: center; 

 h1{
    font-size: 1.5rem;
    margin-top: 0px;
    margin-left: 0px;
    line-height: 2rem;

 }
 p{
    font-size: 10px;
    line-height: 1.2rem;
    max-width: 60%;
    margin: auto;
    display: block;
 }


`}
  ${tablet`

max-width: 100%;
text-align: center;
margin-bottom: 10px;

 h1{
    font-size: 60px;
    margin-top: 0px;
 }
 p{
    font-size: 16px;
 }
`}
`;

export const FlexChild2 = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: url(${ornament});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 70vh;
  img {
    width: 100vw;
    position: relative;
    left: 2rem;
    top: -4rem;
  }

  ${mobile`

    display: none;


`}

  ${tablet`

    display: none;
`}
`;
