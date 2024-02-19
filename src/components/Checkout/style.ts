import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ContainerDiv = styled.div`

max-width: 100%;
margin: 50px 0px 60px 0px;
.path{
    max-width: 90%;
    margin: auto;
}
.greycol{
    color: ${Theme.DARK_GREY_COLOR};
}
.yellowcolor{
    color: ${Theme.YELLOW};
}
`
export const FlexParent = styled.div`
max-width: 90%;
display: flex;
align-items: start;
justify-content: space-between;
margin: auto;
flex-wrap: wrap;

`
export const FLexChild = styled.div`
display: flex;
min-width: 60%;
max-width: 60%;
flex-direction: column;
align-items: start;
justify-content: space-around;
gap: 10px;

h1{
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 2%;
}
h2{
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2%;
    margin: 0px;
}
${mobile`

h1{
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2%;
}
h2{
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2%;
    margin: 0px;
}

div{
    min-width: 100%;

max-width: 100%;
}

`}

input{
    border: none;
    background-color: ${Theme.LIGHT_GREY};
    height: 30px;
    width: 330px;
    border-radius: 10px;
    padding: 10px;
    margin-top: -9px;


    
}

${mobile`
min-width: 100%;

max-width: 100%;
    input{
        height: 30px;
        width: 90%;
        
    
    
        
    }
    
    `}

`
export const JustifyBtw = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
flex-wrap: wrap;
min-width: 100%;
background-color: white;

.inputCustomWidth{
    min-width: 33%;
    max-width: 33%;
}


.inputWidth{
    max-width: 88%;
}

.radioClass {
  /* Hide the default radio button */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000; /* Border color for the square */
  border-radius: 0; /* No border radius to make it square */
  outline: none; /* Remove focus outline */
  margin: 0; /* Adjust margin if needed */
  padding: 0; /* Adjust padding if needed */

  /* Define the styles for the checked state */
  &:checked {
    background-color: #000; /* Fill color for the square when checked */
  }
}

${mobile`

.inputCustomWidth{
    min-width: 100%;
    max-width: 100%;
}
`}

`

export const FLexChild1 = styled.div`
display: flex;
min-width: 35%;
max-width: 35%;
flex-direction: column;
align-items: start;
justify-content: space-around;
gap: 10px;
border: 1px solid ${Theme.GREY_93_COLOR};

.bold{
    font-weight: 600;
}

h1{
    font-size: 24px;
    font-weight: 600;

}
${mobile`

h1{
    font-size: 18px;
    font-weight: 600;

}

min-width: 100%;
max-width: 100%;

`}

.headingclass{
    padding: 30px 0px;
    border-bottom: 1px solid ${Theme.GREY_93_COLOR} ;
    width: 90%;
    margin: auto;

}

.justifyclass{

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    

    p{
        margin: 2px;
    }
}

`
export const JustifyChild2 = styled.div`
display: flex;
width: 90%;
 margin: auto;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 10px;
padding: 10px 0px;
border-bottom: 1px solid ${Theme.GREY_93_COLOR} ;


`