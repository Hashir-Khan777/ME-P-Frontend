import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ProductCard = styled.div`

max-width: 200px;
border: 1px solid ${Theme.GREY_93_COLOR};
border-radius: 5px;
padding: 0px;
max-height:max-content;
text-align: left;

img{
        max-width: 100%;
        padding: 20px 0px;
    }

.bgGrey{
    background-color: ${Theme.GREY_93_COLOR};
    padding: 5px 0px 5px 8px;
    margin: 0px ;
    border: 1px solid ${Theme.GREY_93_COLOR};
    line-height: 8px;

    
}


`

export const Parentdiv = styled.div`

text-align: center;
margin: -100px auto auto auto;
max-width: 85%;

h1{

    font-size: 64px;
    font-weight: bold;
}

${mobile`
    
    h1{

font-size: 26px;
padding: 0px;

}
`}

.styledYellow{
color: ${Theme.YELLOW};
}
.styledblack{
color: ${Theme.BLACK_COLOR};
}
`