import { useEffect, useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createStore, uploadImage } from "../../store/actions/store.action";
import { useNavigate, useParams } from "react-router-dom";

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
      <h1 style={styles.mainHeading}>Create Store</h1>
      <h2 style={styles.secondaryHeading}>Payment Information</h2>
      <div style={styles.paymentFlexBox}>
        <h3 style={styles.boldHeading}>Bank Name:</h3>
        <p>Soneri Bank Tarnol branch code 5060</p>
      </div>
      <div style={styles.paymentFlexBox}>
        <h3 style={styles.boldHeading}>Account Name:</h3>
        <p>KAROBRAR LIV (PRIVATE) LIMITED</p>
      </div>
      <div style={styles.paymentFlexBox}>
        <h3 style={styles.boldHeading}>ACCOUNT NUMBER:</h3>
        <p>30000756888</p>
      </div>
      <div>
        <h3 style={styles.boldHeading}>PAYMENT SCREENSHOT:</h3>
        <div>
          <input
            className="chooseFileBtn"
            type="file"
            onChange={uploadScreenShot}
          />
        </div>
      </div>
      <h2 style={styles.secondaryHeading}>Store Information</h2>
      <label style={styles.label}>Store Name</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, name: e.target.value })}
      />
      <label style={styles.label}>Phone Number</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, phoneNumber: e.target.value })}
      />
      <label style={styles.label}>Country</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, country: e.target.value })}
      />
      <label style={styles.label}>State</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, state: e.target.value })}
      />
      <label style={styles.label}>Area</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, area: e.target.value })}
      />
      <label style={styles.label}>Postal Code</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, postalCode: e.target.value })}
      />
      <label style={styles.label}>Address</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, address: e.target.value })}
      />
      <button style={styles.button} onClick={create}>
        Create Store
      </button>
    </div>
  );
};

export default CreateStore;
