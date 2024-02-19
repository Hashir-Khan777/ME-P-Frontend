import styled from "styled-components";
import { mobile, tablet } from "../../utils/responsive";
import Theme from "../../constants/theme";
import { table } from "console";
import banner from "../../assets/signIn.png";

export const ParentFlex = styled.div`

display: flex;
justify-content: space-around;
max-height: 87.5vh;
align-items: center;

`

export const FlexChild1 = styled.div`
overflow: hidden;

min-width: 50%;
min-height: 87.5vh;
background-image: url(${banner});
background-size: cover; 
  background-repeat: no-repeat;
img{
    width: 100%;
    height: 100%;
    overflow: hidden;

}

${mobile`

    display: none;


`}

${tablet`

    display: none;
`}

`

export const FlexChild2 = styled.div`

width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

.validation-message{
    color: red;
    margin-top: 0px;
}

.coloryellow{
    color: ${Theme.YELLOW};
}

button{
    border: none;
    border-radius: 11px;
    padding: 10px 20px;
    background-color: ${Theme.WHITE_COLOR};
    color: ${Theme.BLACK_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-size: larger;
    font-weight: 600;
    box-shadow: ${Theme.BOX_SHADOW};

}

.shadow{
    box-shadow: ${Theme.BOX_SHADOW} ;

}
.custombutton{
    background-color: ${Theme.YELLOW};


   
}
h1{
    font-size: 34px;

    margin: 0px 0px 10px -465px;
    color: ${Theme.CHANNEL_BLACK};

}

.left{
    margin: 0px 0px 10px -245px;

}

.formsize{
    width: 75%;
}

${mobile`

.formsize{
    width: 100%;
}


width: 100%;

      h1{
    margin: 0px 0px 0px 0px;
    font-size: 22px;

}  

.left{
    margin: 4px 0px 4px 0px;
    text-align: center;
}
        .imgsize{
            min-width: 20px;
        }


        button{
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 10px 0px;
    font-size:14px !important;
        max-width: 75%;    

    img{
        max-width: 7%;
    }

  

}        
            
        `}

label{
    font-size: large;
}
input{
    width: 100%;
    border: 1px solid ${Theme.CHANNEL_BLACK};
    border-radius: 10px;
    font-size: large;
    padding: 10px 0px;
}



${mobile`

.fa{
    font-size:14px;
}

label{
    font-size: 14px;
}

span{
    display: none;
}
width: 90%

`}

${tablet`
span{
    display: none;
}
width: 100%

`

}




`

export const StyledButton = styled.button`

border: none;
background-color: ${Theme.YELLOW};
border-radius: 5px;
padding: 0px 18px;
color: ${Theme.WHITE_COLOR};
margin: 0px 8px;
font-weight: bold;
box-shadow: none;
width: 100%;


${mobile`
margin: auto;
width: 100%;
.fa{
    font-size:14px;
}
width:100%;
`}
`