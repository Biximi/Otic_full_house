import { FunctionComponent } from "react";
import styles from "./SignUp.module.css";
const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpChild} />
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

export default SignUp;
