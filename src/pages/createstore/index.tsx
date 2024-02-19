import { useEffect, useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "../../store/actions/store.action";
import { useNavigate } from "react-router-dom";

const CreateStore = () => {
  const [store, setStore] = useState({
    name: "",
    country: "",
    state: "",
    area: "",
    postalCode: "",
    address: "",
  });

  const StoreReducer = useSelector((state: any) => state.StoreReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const create = () => {
    dispatch(createStore(store));
  };

  useEffect(() => {
    if (StoreReducer.store?.name) {
      navigate("/seller/dashboard");
    }
  }, [StoreReducer.store]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={styles.mainHeading}>Create Store</h1>
      <h2 style={styles.secondaryHeading}>Store Information</h2>
      <label style={styles.label}>Store Name</label>
      <input
        style={styles.input}
        required
        onChange={(e) => setStore({ ...store, name: e.target.value })}
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
