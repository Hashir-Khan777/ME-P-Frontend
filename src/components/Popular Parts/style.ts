import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const Containerdiv = styled.div`
  width: 100%;
  background-color: ${Theme.WHITE_COLOR};
  margin: 0px;
  margin-top: 100px;
  padding: 20px 0px;

  h1 {
    font-size: 64px;
    margin-left: 100px;
    font-weight: bold;
  }

  ${mobile`

h1{
    margin-left: 0px;
    font-size: 26px;
    padding: 0px;
    text-align: center;

}


`}

  .styledYellow {
    color: ${Theme.YELLOW};
  }
  .styledblack {
    color: ${Theme.BLACK_COLOR};
  }
`;

export const FlexParent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 89px;
  margin: auto;
  justify-content: center;
  align-items: center;

  ${mobile`
gap: 0px;


`}
`;
export const BrowseBtn = styled.div`
  margin: auto;
  width: 24vw;
  height: 8vh;
  color: #ffba3f;
  border: 0.5px solid #ffba3f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  font-weight: 600;
  margin-top: 14px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 2rem;

  ${mobile`
width: 50vw;
height: 5vh;
font-size: 8px;
margin-bottom: 1rem;
`}
`;

export const FlexCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: space-between;
  width: 20rem;
  max-width: 20rem;
  background-color: ${Theme.GREY_93_COLOR};
  padding: 0px 0px 14px 0px;
  gap: 10px;
  margin: 20px 0px;
  overflow: hidden;
  border-radius: 15px;

  ${mobile`
    max-width: 16rem;
    `}

  .justifybtn {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    margin: 0px 15px;
  }
  .greycolor {
    color: ${Theme.DARK_GREY_COLOR};
  }
  .yellowcolor {
    color: ${Theme.YELLOW};
  }
  .imgclass {
    height: 200px;

    img {
      max-width: 100%;
      min-width: 100%;
    }
  }

  ${mobile`
.imgclass{
    margin: 15px 15px 0px 15px  ;
    border-radius: 10px;
    width: 14rem;
    display: block;
    margin: auto;


    img{

        max-width: 100%;
        min-width: 100%;
    }
}
`}

  .bgyellow {
    background-color: ${Theme.YELLOW};
    padding-top: 0px;
    margin-top: 0px;
    padding: 10px 20px;
    color: ${Theme.WHITE_COLOR};
    font-size: 10px;
  }

  .pad {
    p {
      /* padding: 0px 19px; */
      /* margin: 5px 0px; */
      font-size: small;
    }
  }

  .para {
    padding: 0px 15px 0px 15px;
  }
`;

export const Styledbutton = styled.button`
  border: none;
  background-color: ${Theme.YELLOW};
  border-radius: 5px;
  padding: 6px 38px;
  color: ${Theme.WHITE_COLOR};
  background-color: ${Theme.BLACK_COLOR};
  font-weight: bold;
  width: 90%;
  margin: 0px auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    color: ${Theme.BLACK_COLOR};
    background-color: ${Theme.WHITE_COLOR};
  }
  ${mobile`
font-size: 0.7rem;
`}
`;

export const BrowseButton = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  .styledbutton {
    padding: 15px 40px;
    border: 1px solid ${Theme.YELLOW};
    border-radius: 8px;
    color: ${Theme.BLACK_COLOR};
    font-weight: bold;
    background-color: ${Theme.WHITE_COLOR};
    width: 40%;
    cursor: pointer;
    &:hover {
      color: ${Theme.YELLOW};
      background-color: ${Theme.BLACK_COLOR};
    }

    ${mobile`



    
        font-size: small;
        width: 85%;
            


    
 


`}
  }
`;
