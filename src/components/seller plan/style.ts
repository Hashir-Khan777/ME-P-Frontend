import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const ParentDiv = styled.div`
max-width: 85%;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
text-align: center;
/* height: 20vh; */
margin-top: 50px;
flex-direction: column;


.yellow{
    color: ${Theme.YELLOW};
}
p{
    margin: 0px ;
    font-size: 14px;
    color: ${Theme.DIM_GREY_COLOR};
    letter-spacing: 2%;
}

h1{
    font-size: 48px;
}

${mobile`
h1{
    font-size: 24px;
}
p{
    font-size:small;
}

`}

`