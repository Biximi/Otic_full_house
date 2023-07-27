import { FunctionComponent } from "react";
import styles from "./PhoneNumberForm.module.css";
const PhoneNumberForm: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolSm6}>
        <div className={styles.divformGroup}>
          <div className={styles.labelEmail}>Email</div>
          <div className={styles.input}>
            <div className={styles.div}>
              <div className={styles.oticexamplecom}>otic@example.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcolSm61}>
        <div className={styles.divformGroup}>
          <div className={styles.labelEmail}>Phone Number</div>
          <div className={styles.input1}>
            <div className={styles.div1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberForm;
