import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FormContainer4.module.css";

type FormContainer4Type = {
  personalInfoText?: string;

  /** Style props */
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propHeight?: Property.Height;
  propBottom?: Property.Bottom;
  propWidth?: Property.Width;
};

const FormContainer4: FunctionComponent<FormContainer4Type> = ({
  personalInfoText,
  propRight,
  propLeft,
  propHeight,
  propBottom,
  propWidth,
}) => {
  const divcol122Style: CSS.Properties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
      height: propHeight,
      bottom: propBottom,
    };
  }, [propRight, propLeft, propHeight, propBottom]);

  const labelStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.divcol12} style={divcol122Style}>
      <div className={styles.divformGroup}>
        <div className={styles.input}>
          <div className={styles.divplaceholder}>
            <div className={styles.ddMmYyyy}>DD-MM-YYYY</div>
          </div>
        </div>
        <div className={styles.div}></div>
        <div className={styles.label} style={labelStyle}>
          <div className={styles.dateOfBirthContainer}>
            <span className={styles.dateOfBirthContainer1}>
              <span>{personalInfoText}</span>
              <span className={styles.span}>*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer4;
