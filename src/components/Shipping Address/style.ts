import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const ContainerDiv = styled.div`

max-width: 90%;
margin: auto;

${mobile`

max-width: 85%;

`}
`
export const ParentDiv = styled.div`

max-width: 60%;
margin-right: auto;




${mobile`

.heading{
    font-size: 18px !important;
}

max-width: 100%;

`}

.shippingclass{
    padding: 20px;
    background-color: ${Theme.LIGHT_GREY};
      border-radius: 20px;

}

.marginbottom{
    border-bottom: 1px solid ${Theme.LIGHT_GREY_COLOR};
}

`