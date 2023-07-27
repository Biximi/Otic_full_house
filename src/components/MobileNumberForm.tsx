import { FunctionComponent } from "react";
import styles from "./MobileNumberForm.module.css";
const MobileNumberForm: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolSm6}>
        <div className={styles.divformGroup}>
          <div className={styles.labelMobile}>Mobile Number</div>
          <div className={styles.input}>
            <div className={styles.div}>
              <div className={styles.div1}>+256</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcolSm61}>
        <div className={styles.divformGroup}>
          <div className={styles.labelMobile}>Fax</div>
          <div className={styles.input1}>
            <div className={styles.div2}>
              <div className={styles.div1}>)41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNumberForm;
