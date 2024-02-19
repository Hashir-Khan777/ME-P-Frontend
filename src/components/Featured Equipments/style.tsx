import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const Containerdiv = styled.div`
    
    width: 100%;
    background-color: ${Theme.LIGHT_GREY};
    margin: 0px;
    margin-top: 100px;
    h1{

font-size: 64px;
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
width: 100%;
flex-wrap: wrap;
gap: 50px;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;
`

export const FlexCard = styled.div`


    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: space-between;
    
    width: 413px;
    
    background-color: ${Theme.WHITE_COLOR};
    padding: 14px;
    height: 506px;
    max-height: 506px;
    gap: 10px;
    margin: 20px 0px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .justifybtn{
        display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: baseline;
    text-align: center;
    }
    .greycolor{
        color: ${Theme.DARK_GREY_COLOR};
    }
    .yellowcolor{
        color: ${Theme.YELLOW};
    }
.imgclass{
    margin: auto;
    max-width: 100%;
    overflow: hidden;

    img{

        max-width: 100%;
        min-width: 100%;
    }
}
.alignboth{
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    margin: 0px;
    padding: 0px;
    height: 25px;
    margin-left: -5px;
    

}

.borderLeft{
    border-left: 1px solid ${Theme.LIGHT_GREY_COLOR};
}

.pad{

    
    p{
        padding: 0px 19px;
        margin: 5px 0px;
        font-size: small;
    }
}

${mobile`

max-width: 300px;

`}

`

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