import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";


export const DivContainer = styled.div`

max-width: 95vw;


`

export const ParentFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
flex-direction: row;
gap: 40px;
max-width: 90%;
margin: 80px auto auto auto;
height: 100%;
${mobile`
position: relative;


`}

`

export const ChildFlex1 = styled.div`

max-width: fit-content;

background-color: ${Theme.WHITE_COLOR};
color: ${Theme.DARK_GREY_COLOR};
display: flex;
max-height: 100%;
flex-direction: column;
${mobile`
max-height: fit-content;
position: absolute;
left: 0px;
top: 0px;


`}

.borderright{
    border-right: 1px solid #BEBCBD;

}

`


export const Filter = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
color: ${Theme.YELLOW};
flex-direction: row;
padding:0px 0px 18px 0px;
margin-right: 50px;
max-width: fit-content;
max-height: fit-content;

border-bottom: 1px solid #BEBCBD;
p{
    color: ${Theme.YELLOW};
    margin: 0px;
}
.customwidth{
    min-width: 20vh;
}

${mobile`

margin-right: 0px;


`}

`

export const FLexPrice = styled.div`
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
gap: 25px;
color: #807D7E;

button{
    margin: 0px 10px ;
    background-color: ${Theme.WHITE_COLOR};
    border: 1px solid ${Theme.LIGHT_GREY_COLOR};
    font-size: large;
    padding: 7px 25px;
    border-radius: 10px;
}

`

export const ChildFlex2 = styled.div`

display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
 min-width: 75%;
margin: auto;
height: 100%;




`
export const FlexBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
flex-wrap: wrap;
width: 95%;
margin: auto;
padding: 0px 20px;



input{
    border: none;
    background-color: ${Theme.LIGHT_GREY};
    width: 250px;
    height: 50px;
    padding: 5px;
    border-radius: 10px;
    font-size: large;


   
}
input::placeholder{
        font-size: medium;
        padding: 10px;
    }

    ${mobile`
    
    margin-top: 60px;

    input{
        border: none;
        width: 250px;
        height: 40px;
        padding: 5px;
        border-radius: 10px;
        font-size: medium;
    
    
       
    }

    `}

`

export const FlexParent = styled.div`

display: flex;
width: 100%;
max-width: 100%;
flex-wrap: wrap;
gap: 25px;
margin: auto;
justify-content: space-around;
align-items: center;
padding: 25px 0px;


`

export const FlexCard = styled.div`


    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: space-between;
    
    width: 310px;
    
    background-color: ${Theme.WHITE_COLOR};
    padding: 14px;
    max-height: 450px;
    gap: 10px;
    margin: 20px 0px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .justifybtn{
        display: flex;
        text-align: left;
        justify-content: space-between;
        flex-direction: row;
    
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
    height: 15px;
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
    color: ${Theme.YELLOW};
    background-color: ${Theme.BLACK_COLOR };

}
`