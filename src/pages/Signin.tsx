import { FunctionComponent } from "react";
import CardContainer1 from "../components/CardContainer1";
import IntelligentTechnologyCard from "../components/IntelligentTechnologyCard";
import styles from "./Signin.module.css";
const Signin: FunctionComponent = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.signinInner}>
        <CardContainer1 />
      </div>
      <IntelligentTechnologyCard />
      <div className={styles.signinChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/frame-6@2x.png" />
          <div className={styles.frameContainer}>
            <div className={styles.pricingWrapper}>
              <div className={styles.pricing}>Pricing</div>
            </div>
            <div className={styles.pricingWrapper}>
              <div className={styles.pricing}>Products</div>
            </div>
            <div className={styles.pricingWrapper}>
              <div className={styles.pricing}>Support</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.pricingWrapper}>
            <div className={styles.pricing}>Login</div>
          </div>
          <div className={styles.getStartedWrapper}>
            <div className={styles.pricing}>Get started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
