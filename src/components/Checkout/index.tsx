import React, { useState,ChangeEvent  } from "react";
import { ContainerDiv, FLexChild, FLexChild1, FlexParent, JustifyBtw, JustifyChild2 } from "./style";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import bearings from "../../assets/bearings.png"
const CheckOut = (): JSX.Element => {

    
    const [selectedValue, setSelectedValue] = useState<string>('option1');

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

  return (
    <>
      <ContainerDiv>
        <div className="path">
          <p className="greycol">
            {`Home > My Account > `}{" "}
            <span style={{ color: "black" }}>
              <>Check Out</>
            </span>
          </p>
        </div>
        <FlexParent>
          <FLexChild>
            <div>
              <h1>Check Out</h1>
            </div>
            <div>
              <h2>Billing Details</h2>
            </div>

            <JustifyBtw>
              <div>
                <p>First Name*</p>

                <input type="text" placeholder="First Name" name="" id="" />
              </div>
              <div>
                <p>Last Name*</p>

                <input type="text" placeholder="Last Name" name="" id="" />
              </div>
            </JustifyBtw>
            <JustifyBtw>
              <div>
                <p>Country / Region*</p>

                <input
                  type="text"
                  placeholder="Country / Region"
                  name=""
                  id=""
                />
              </div>
              <div>
                <p>Email Address</p>

                <input
                  type="text"
                  placeholder="user1@gmail.com"
                  name=""
                  id=""
                />
              </div>
            </JustifyBtw>
            <JustifyBtw>
              <div>
                <p>Street Address*</p>

                <input
                  type="text"
                  placeholder="House number and street name"
                  name=""
                  id=""
                />
              </div>
              <div>
                <p>Apt, suite, unit</p>

                <input
                  type="text"
                  placeholder="apartment, suite, unit, etc. (optional)"
                  name=""
                  id=""
                />
              </div>
            </JustifyBtw>
            <JustifyBtw>
              <div className="inputCustomWidth">
                <p>City*</p>

                <input
                  type="text"
                  className="inputWidth"
                  placeholder="Town / City"
                  name=""
                  id=""
                />
              </div>
              <div className="inputCustomWidth">
                <p>State*</p>

                <input
                  className="inputWidth"
                  type="text"
                  placeholder="State"
                  name=""
                  id=""
                />
              </div>
              <div className="inputCustomWidth">
                <p>Postal Code*</p>

                <input
                  type="text"
                  className="inputWidth"
                  placeholder="Postal Code"
                  name=""
                  id=""
                />
              </div>
            </JustifyBtw>
            <JustifyBtw>
              <div>
                <p>Phone*</p>

                <input type="text" placeholder="Phone" name="" id="" />
              </div>
            </JustifyBtw>
            <JustifyBtw>
              <div>
                <p>
                  {" "}
                  <FormControl component="fieldset">
      <RadioGroup
        aria-label="icon-radio"
        name="icon-radio"
        value={selectedValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="option1"
          control={
            <Radio
              icon={<CheckBoxOutlineBlankIcon />} // Icon when unchecked
              checkedIcon={<CheckBoxIcon />} // Icon when checked
            />
          }
          label="Save my information for faster checkout"
        />
      </RadioGroup>
    </FormControl>
                  
                </p>
              </div>
            </JustifyBtw>
          </FLexChild>



          <FLexChild1>
            <div className="headingclass"><h1>Order Summary</h1></div>
            <JustifyChild2>
                <div className="justifyclass">
                    <div><img src={bearings} alt="bearings" /></div>
                    <div><p className="bold"><>Bearings</></p>
                        <p ><span className="bold">Quantity: </span> yellow</p>
                    </div>
                </div>
                <div><p>$29.00</p></div>
            </JustifyChild2>
            <JustifyChild2>
                <div><p ><span className="bold">Subtotal</span><span className="greycol">{` ( 3 items )`}</span></p></div>
                <div>$10</div>
            </JustifyChild2>
            <JustifyChild2>
                <div><p><span className="bold">Shipping</span></p></div>
                <div>-$5.00</div>
            </JustifyChild2>
            <JustifyChild2>
                <div><p><span className="bold">Total</span></p></div>
                <div className="yellowcolor"><span className="bold">$34</span></div>
            </JustifyChild2>
          </FLexChild1>
        </FlexParent>
      </ContainerDiv>
    </>
  );
};

export default CheckOut;
