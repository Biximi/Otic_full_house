import { FunctionComponent } from "react";
import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./Signin1.module.css";
const Signin1: FunctionComponent = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.divloginbox}>
        <div className={styles.divloginLeft}>
          <img className={styles.loginpngIcon} alt="" src="/loginpng@2x.png" />
          <img className={styles.pseudoIcon} alt="" src="/pseudo@2x.png" />
          <img className={styles.pseudoIcon1} alt="" src="/pseudo1@2x.png" />
          <div className={styles.divloginLeftChild} />
        </div>
        <div className={styles.divloginRight}>
          <WelcomeContainer />
        </div>
      </div>
    </div>
  );
};

export default Signin1;
