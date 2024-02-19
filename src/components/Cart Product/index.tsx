import React from "react";
import { ContainerDiv, ParentFlex, ChildFLex, ProductDiv } from "./style";
import dozer from "../../assets/f2.png"
import deletec from "../../assets/deletecon.png"

const CartProduct = () => {
  return (
    <>
      <ContainerDiv>
        <ParentFlex>
          <ChildFLex>
            <div className="headerColor">
              <p>
                <>PRODUCT DETAILS</>
              </p>
            </div>
            <div>
              <ProductDiv>
                <div><img src={dozer} alt="dozer" /></div>
                <div>
                  <p className="yellow" style={{marginBottom:'10px'}}>CAT EXCAVATOR 2013  </p>
                  
                  <p>Color : Yellow</p>
                  <p>Model: 2013</p>
                </div>
              </ProductDiv>
            </div>
          </ChildFLex>
          <ChildFLex>
            <div className="headerColor">
              <p>
                <>PRICE</>
              </p>
            </div>
            <div>
              <p className="yellow">
              <b >$4600</b>
              </p>
            </div>
          </ChildFLex>
          <ChildFLex>
            <div className="headerColor">
              <p>
                <>QUANTITY</>
              </p>
            </div>
            <div>
              <p>
                <button>-</button>
                <button>1</button>
                <button>+</button>
              </p>
            </div>
          </ChildFLex>
          <ChildFLex>
            <div className="headerColor">
              <p>
                <>SHIPPING</>
              </p>
            </div>
            <div>
              <p className="grey">
              <>$100</>
              </p>
            </div>
          </ChildFLex>
          <ChildFLex>
            <div className="headerColor">
              <p>
                <>SUBTOTAL</>
              </p>
            </div>
            <div>
              <p>
              $4600
              </p>
            </div>
          </ChildFLex>
          <ChildFLex>
            <div className="headerColor">
              <p>
                <>ACTION</>
              </p>
            </div>
            <div>
              <p>
              <img style={{maxWidth:'15px'}} src={deletec} alt="delete" />
              </p>
            </div>
          </ChildFLex>
          
        </ParentFlex>
        <div className="bar"><br />
        <hr />
          <br /><br /></div>
      </ContainerDiv>
    </>
  );
};
export default CartProduct;
