import { styled } from "styled-components";
import Theme from "../../constants/theme";
import { mobile, tablet } from "../../utils/responsive";

export const ParentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  gap: 20px;
  flex-direction: column;
  margin: 30px auto;
  padding: 40px 30px;
  border-radius: 20px;
  border: 2px solid ${Theme.LIGHT_GREY};

  div,
  input,
  textarea {
    border-radius:5px;
    min-width: 100%;
  }
  
  input,
  textarea {
    min-height: 50px;
    border: 1px solid ${Theme.DARK_GREY_COLOR};
    font-size: 15px;
    outline:none;
    padding:0px 20px;
  }

  textarea{
    padding-top:20px;
  }

  select {
    border-radius:5px;
    min-width: 100%;
    min-height: 50px;
    border: 1px solid ${Theme.DARK_GREY_COLOR};
    font-size: 12px;
    padding: 0px 20px;
  }

  select,
  option,
  input::placeholder,
  textarea::placeholder {
    color: ${Theme.CHANNEL_BLACK};
    font-size: 14px;
  }

  button {
    border: none;
    background-color: ${Theme.YELLOW};
    font-size: 15px;
    font-weight: bold;
    width:250px;
    border-radius:10px;
    height:50px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: ${Theme.YELLOW};
      background-color: ${Theme.BLACK_COLOR};
    }
  }

  ${tablet`

width:80%;



`}

  ${mobile`

width:90%;
padding:20px 20px;


`}
`;
