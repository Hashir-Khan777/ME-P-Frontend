import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const Parentdiv = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin: auto;
text-align: center;
padding: 40px;
flex-direction: column;
margin-bottom: 170px;

${mobile`

padding: 50px;
margin-bottom: 100px;


`}


h1{

    font-size: 64px;
    font-weight: bold;
    margin-bottom: 90px;
}

.styledYellow{
    color: ${Theme.YELLOW};
}
.styledblack{
    color: ${Theme.BLACK_COLOR};
}

${mobile`

h1{

    font-size: 26px;
    padding: 0px;
    margin-bottom: 80px;

}


`}
${tablet`

padding: 40px 0px;



`}

`




export const ParentFlex = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
padding: 40px;
flex-wrap: wrap;
gap: 90px;

${mobile`

padding: 40px 0px;



`}
${tablet`

padding: 40px 0px;



`}
`

export const StyledCard = styled.div`

background-color: rgba(236, 236, 236, 0.25);
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 357px ;
max-width: 357px ;
max-height: 297px;

img{
    max-width: 327px ;
    height: 217px;
    max-height: 217px;
    margin-top: -90px;
}


${mobile`

max-width: 200px ;
max-height: 290px;

img{
    max-width: 220px ;
}


`}
${tablet`


max-width: 150px ;
max-height: 200px;


img{
    max-width: 150px ;
    margin-top: -50px;
}

`}
`

