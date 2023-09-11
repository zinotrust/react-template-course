import styles from "./Loader.module.scss";
import loaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img style={{ width: "50px" }} src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img style={{ width: "50px" }} src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;
