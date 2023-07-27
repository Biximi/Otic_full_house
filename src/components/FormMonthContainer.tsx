import { FunctionComponent } from "react";
import styles from "./FormMonthContainer.module.css";

type FormMonthContainerType = {
  dimensionCode?: string;
  dateCode?: string;
};

const FormMonthContainer: FunctionComponent<FormMonthContainerType> = ({
  dimensionCode,
  dateCode,
}) => {
  return (
    <div className={styles.spanformSubLabelContainer}>
      <div className={styles.options}>
        <div className={styles.image}>
          <img className={styles.vectorIcon} alt="" src={dimensionCode} />
        </div>
      </div>
      <div className={styles.labelMonth}>{dateCode}</div>
    </div>
  );
};

export default FormMonthContainer;
