import { FunctionComponent } from "react";
import styles from "./CardContainer.module.css";
const CardContainer: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolSm6}>
        <div className={styles.divformGroup}>
          <div className={styles.label}>
            <div className={styles.schoolNameContainer}>
              <span>{`School Name `}</span>
              <span className={styles.span}>*</span>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.div}>
              <div className={styles.oticInternationalSchool}>
                Otic International school
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcolSm61}>
        <div className={styles.divformGroup}>
          <div className={styles.labelContact}>Contact Person</div>
          <div className={styles.input}>
            <div className={styles.div1}>
              <div className={styles.oticInternationalSchool}>CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
