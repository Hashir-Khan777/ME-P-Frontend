import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const FlexParent = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
margin: 39px auto 160px auto;
gap: 20px;
max-width: 90%;

.heading{
    min-width: 100%;
    margin: auto;
    text-align: center;

    h1{
        font-size: 2.5rem;
        text-align: center;
        font-weight: bold;

}

${mobile`
h1{

    font-size: 1.5rem;
    padding: 0px;
    
    }

`}

.styledYellow{
color: ${Theme.YELLOW};
}
.styledblack{
color: ${Theme.CHANNEL_BLACK};
}
}

div{
    max-width: 180px;
    img{
        max-width: 100%;
    }
    
}

${mobile`
flex-direction: column;

div{
    max-width: 120px;
    img{
        max-width: 70%;
    }
    
}

    


`}
`