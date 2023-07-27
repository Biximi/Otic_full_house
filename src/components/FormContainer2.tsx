import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FormContainer2.module.css";

type FormContainer2Type = {
  /** Style props */
  propTop?: Property.Top;
  propBottom?: Property.Bottom;
};

const FormContainer2: FunctionComponent<FormContainer2Type> = ({
  propTop,
  propBottom,
}) => {
  const divcol12Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className={styles.divcol12} style={divcol12Style}>
      <div className={styles.divformGroup}>
        <div className={styles.labelClass}>Class</div>
        <div className={styles.options}>
          <div className={styles.div}>
            <div className={styles.selectClass}>Select Class</div>
          </div>
        </div>
        <div className={styles.combobox}>
          <div className={styles.textbox}>
            <div className={styles.selectClass1}>Select Class</div>
          </div>
        </div>
        <div className={styles.presentation} />
      </div>
    </div>
  );
};

export default FormContainer2;
