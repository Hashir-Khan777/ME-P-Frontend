import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore, uploadImage } from "../../store/actions/store.action";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";

const CreateStore = () => {
  const [store, setStore]: any = useState({
    name: "",
    country: "",
    phoneNumber: "",
    state: "",
    area: "",
    postalCode: "",
    address: "",
    pricingPlan: "",
    paymentScreenShot: "",
  });

  const StoreReducer = useSelector((state: any) => state.StoreReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = new FormData();
  const { plan } = useParams();

  const uploadScreenShot = (e: any) => {
    formData.append("image", e.target.files[0]);
    dispatch(uploadImage(formData));
  };

  const create = () => {
    dispatch(createStore(store));
  };

  useEffect(() => {
    if (StoreReducer.store?.name) {
      navigate("/seller/dashboard");
    }
  }, [StoreReducer.store]);

  useEffect(() => {
    if (StoreReducer?.paymentScreenShot) {
      setStore({
        ...store,
        paymentScreenShot: StoreReducer?.paymentScreenShot,
      });
    }
  }, [StoreReducer?.paymentScreenShot]);

  useEffect(() => {
    setStore({ ...store, pricingPlan: plan });
  }, [plan]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className={style.mainHeading}>
        <span className="text-black">Create</span>{" "}
        <span className="text-[#FFBA3F]">Store</span>
      </h1>
      <div className={style.infoContainer}>
        <h2 className={style.secondaryHeading}>Payment Information:</h2>
        <div className={style.paymentFlexBox}>
          <h3 className={style.boldHeading}>Bank Name:</h3>
          <p className={style.info}>Soneri Bank Tarnol branch code 5060</p>
        </div>
        <div className={style.paymentFlexBox}>
          <h3 className={style.boldHeading}>Account Name:</h3>
          <p className={style.info}>KAROBRAR LIV (PRIVATE) LIMITED</p>
        </div>
        <div className={style.paymentFlexBox}>
          <h3 className={style.boldHeading}>ACCOUNT NUMBER:</h3>
          <p className={style.info}>30000756888</p>
        </div>
        <div>
          <h3 className={style.boldHeading}>PAYMENT SCREENSHOT:</h3>
          <div>
            <input
            style={{width:"260px"}}
              className="chooseFileBtn"
              type="file"
              onChange={uploadScreenShot}
            />
          </div>
        </div>
      </div>
      <h2 className={style.formHeading}>Store Information:</h2>
      <div className={style.formContainer}>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            required
            placeholder="Store Name"
            onChange={(e) => setStore({ ...store, name: e.target.value })}
          />
          <input
            className={style.input}
            required
            placeholder="Phone Number"
            onChange={(e) =>
              setStore({ ...store, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            required
            placeholder="Country"
            onChange={(e) => setStore({ ...store, country: e.target.value })}
          />
          <input
            className={style.input}
            required
            placeholder="State"
            onChange={(e) => setStore({ ...store, state: e.target.value })}
          />
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            placeholder="Area"
            required
            onChange={(e) => setStore({ ...store, area: e.target.value })}
          />
          <input
            className={style.input}
            required
            placeholder="Postal Code"
            onChange={(e) => setStore({ ...store, postalCode: e.target.value })}
          />
        </div>
        <input
          className={style.input}
          style={{ width: "100%" }}
          required
          placeholder="Address"
          onChange={(e) => setStore({ ...store, address: e.target.value })}
        />
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={create}>
          Create Store
        </button>
      </div>
    </div>
  );
};

export default CreateStore;
