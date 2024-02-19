import { styled } from "styled-components";
import Theme from "../../constants/theme";
import { mobile } from "../../utils/responsive";


export const ContainerDiv = styled.div`
max-width: 100%;
margin: 40px 0px 60px 0px;
`
export const ParentFlex = styled.div`

max-width: 80%;
display: flex;
justify-content: space-between;
align-items: start;
padding: 55px 100px;
background-color: ${Theme.LIGHT_GREY};
margin: auto;
flex-wrap: wrap;
gap: 20px;

${mobile`
justify-content: center;
text-align: center;
max-width: 90%;
padding: 17px ;

`}
`
export const CHildFlex = styled.div`
max-width: 100%;


.blackcol{
    color: ${Theme.BLACK_COLOR};
}
.greycol{
    color: ${Theme.DARK_GREY_COLOR};
}

input{
    background-color: ${Theme.WHITE_COLOR};
    border: 1px solid ${Theme.LIGHT_GREY_COLOR} ;
    height: 30px;
    border-radius: 10px 0px 0px 10px;
}
.cupon{
    background-color: ${Theme.YELLOW};
    border: 1px solid ${Theme.LIGHT_GREY_COLOR} ;
    height: 34px;
    border-radius: 0px 10px 10px 0px;
    margin: 0px 0px 0px -5px;
    color: ${Theme.BLACK_COLOR};
    padding: 5px 15px;

    cursor: pointer;
    &:hover{
        background-color: ${Theme.BLACK_COLOR};
    color: ${Theme.YELLOW };
    }

}

.customButton{
    background-color: ${Theme.WHITE_COLOR};
    color: ${Theme.BLACK_COLOR};
    padding: 10px 25px;
    border: 1px solid ${Theme.LIGHT_GREY_COLOR} ;
    margin: 25px 0px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: ${Theme.BLACK_COLOR};
    color: ${Theme.WHITE_COLOR };
    }
    
}

.row{

    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 23px;
}

${mobile`
   
   .row{

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 23px;
    width: 100%;
    gap:10px;
}

.cupon{
    height: 34px;
    border-radius:  10px ;
    margin: 0px 0px 0px -5px;
    padding: 5px 15px;
    width: 100%;

    

}

input{
    height: 30px;
    border-radius: 10px;
    width:100%;
}

    `}

.proceed{
    background-color: ${Theme.YELLOW};
    color: ${Theme.BLACK_COLOR};
    padding: 10px 25px;
    border: none ;
    margin: 25px auto;
    border-radius: 7px;
    font-weight: 600;
    text-align:center;
    width:100%;cursor: pointer;
    &:hover{
        background-color: ${Theme.CHANNEL_BLACK};
    color: ${Theme.YELLOW};
}

p{
    font-size:24px;
    margin: 7px 0px ;
}
}
`

export const FlexBet = styled.div`

display: flex;
justify-content: space-between;
align-items: start;
gap: 15px;
margin: auto;

`