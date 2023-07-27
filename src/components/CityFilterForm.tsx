import { FunctionComponent } from "react";
import styles from "./CityFilterForm.module.css";
const CityFilterForm: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolSm12}>
        <div className={styles.divformGroup}>
          <div className={styles.labelAddress}>Address</div>
          <div className={styles.input}>
            <div className={styles.div} />
          </div>
        </div>
      </div>
      <div className={styles.divcolSm6}>
        <div className={styles.divformGroup1}>
          <div className={styles.labelCountry}>Country</div>
          <div className={styles.options}>
            <div className={styles.div1}>
              <div className={styles.usa}>USA</div>
            </div>
          </div>
          <div className={styles.combobox}>
            <div className={styles.textbox}>
              <div className={styles.uganda}>Uganda</div>
            </div>
          </div>
          <div className={styles.presentation} />
        </div>
      </div>
      <div className={styles.divcolSm61}>
        <div className={styles.divformGroup2}>
          <div className={styles.labelAddress}>City</div>
          <div className={styles.input1}>
            <div className={styles.div2}>
              <div className={styles.kampala}>Kampala</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcolSm62}>
        <div className={styles.divformGroup1}>
          <div className={styles.labelCountry}>State/Province</div>
          <div className={styles.options}>
            <div className={styles.div1}>
              <div className={styles.california}>California</div>
            </div>
          </div>
          <div className={styles.combobox}>
            <div className={styles.textbox1}>
              <div className={styles.uganda}>Nakawa</div>
            </div>
          </div>
          <div className={styles.presentation1} />
        </div>
      </div>
      <div className={styles.divcolSm63}>
        <div className={styles.divformGroup2}>
          <div className={styles.labelAddress}>Postal Code</div>
          <div className={styles.input2}>
            <div className={styles.div4}>
              <div className={styles.kampala}>00000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityFilterForm;
