import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const Containerdiv = styled.div`
    
    width: 100%;
    margin: 0px;
    margin-top: 100px;
    h1{
text-align: center;
font-size: 2.5rem;
font-weight: bold;
margin-left: 100px;
padding-top: 100px;
}

${mobile`
    
    h1{

font-size: 26px;
padding-top: 40px;
margin-left: 0px;
text-align: center;

}
`}

.styledYellow{
color: ${Theme.YELLOW};
}
.styledblack{
color: ${Theme.BLACK_COLOR};
}

`

export const FlexParent = styled.div`

display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
justify-content: center;
`

export const FlexCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 33vw;
  max-width: 33vw;
  background-color: #F4F4F4;
  height: 25vh;
  margin: 2rem 0px;

  .products-img {
    width: 15vw;
    position: relative;
    top: -4rem;
    height: auto;
  }

  h2 {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    font-weight: semibold;
    letter-spacing: 1px;
  }

  ${mobile`
    width: 80%; /* Adjust width for mobile devices */
  `}
`;


export const Styledbutton = styled.button`

border: none;
background-color: ${Theme.YELLOW};
border-radius: 5px;
padding: 10px 38px;
color: ${Theme.BLACK_COLOR};
font-weight: bold;
width: 100%;
margin: 16px 0px;
cursor: pointer;

&:hover{
    color: ${Theme.WHITE_COLOR};
    background-color: ${Theme.BLACK_COLOR};

}
`

export const BrowseButton = styled.div`

width: 100%;
text-align: center;
margin: auto;

.styledbutton{
    padding: 15px 40px;
    border: 1px solid ${Theme.YELLOW};
    border-radius: 8px;
    color: ${Theme.BLACK_COLOR};
    font-weight: bold;
    background-color: ${Theme.WHITE_COLOR};
    width: 40%;
    margin: 15px 0px;
    cursor: pointer;

    &:hover{
    color: ${Theme.YELLOW};
    background-color: ${Theme.BLACK_COLOR};

}
    ${mobile`



    
font-size: small;
width: 85%;
    






`}
}
`