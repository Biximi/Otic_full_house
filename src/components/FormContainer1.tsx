import { FunctionComponent } from "react";
import styles from "./FormContainer1.module.css";
const FormContainer1: FunctionComponent = () => {
  return (
    <div className={styles.divformGroup}>
      <div className={styles.labelWebsite}>Website Url</div>
      <div className={styles.input}>
        <div className={styles.div}>
          <div className={styles.httpswwwoticcom}>https://www.otic.com</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
