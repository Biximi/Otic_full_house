import { FunctionComponent } from "react";
import styles from "./DateFilterContainer.module.css";
const DateFilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolSm3}>
        <div className={styles.divformGroup}>
          <div className={styles.divcalIcon}>
            <div className={styles.input} />
            <div className={styles.div}></div>
          </div>
          <div className={styles.labelDate}>Date</div>
        </div>
      </div>
      <div className={styles.divcolSm31}>
        <div className={styles.divformGroup}>
          <div className={styles.options} />
          <div className={styles.combobox}>
            <div className={styles.textbox}>
              <div className={styles.div1}>-</div>
            </div>
          </div>
          <div className={styles.presentation} />
          <div className={styles.labelSelect}>Select Month</div>
        </div>
      </div>
      <div className={styles.divcolSm31}>
        <div className={styles.divformGroup}>
          <div className={styles.options} />
          <div className={styles.combobox}>
            <div className={styles.textbox}>
              <div className={styles.div1}>-</div>
            </div>
          </div>
          <div className={styles.presentation} />
          <div className={styles.labelSelect}>Select Year</div>
        </div>
      </div>
      <div className={styles.divcolSm33}>
        <div className={styles.link}>
          <div className={styles.ifas}>
            <div className={styles.div3}></div>
          </div>
          <div className={styles.search}>Search</div>
        </div>
      </div>
    </div>
  );
};

export default DateFilterContainer;
