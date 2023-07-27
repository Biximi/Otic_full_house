import { FunctionComponent } from "react";
import styles from "./StudentCardForm.module.css";
const StudentCardForm: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.idWrapper}>
          <div className={styles.id}>ID</div>
        </div>
        <div className={styles.idWrapper}>
          <div className={styles.id}>Reg_no</div>
        </div>
        <div className={styles.idWrapper}>
          <div className={styles.id}>Name</div>
        </div>
        <div className={styles.idWrapper}>
          <div className={styles.id}>Class</div>
        </div>
        <div className={styles.idWrapper}>
          <div className={styles.id}>C_Teacher Name</div>
        </div>
        <div className={styles.idWrapper}>
          <div className={styles.id}>Parent Name</div>
        </div>
        <div className={styles.idWrapper}>
          <div className={styles.id}>BOD</div>
        </div>
      </div>
      <div className={styles.frameItem} />
    </div>
  );
};

export default StudentCardForm;
