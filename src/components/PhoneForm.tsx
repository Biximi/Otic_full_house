import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./PhoneForm.module.css";

type PhoneFormType = {
  inputLabel?: string;
  mobileInputLabelExperienc?: string;

  /** Style props */
  propTop?: Property.Top;
  propBottom?: Property.Bottom;
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
  propRight?: Property.Right;
  propWidth1?: Property.Width;
};

const PhoneForm: FunctionComponent<PhoneFormType> = ({
  inputLabel,
  mobileInputLabelExperienc,
  propTop,
  propBottom,
  propPadding,
  propWidth,
  propRight,
  propWidth1,
}) => {
  const divcol123Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const divplaceholderStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const label1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const mobileStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.divcol12} style={divcol123Style}>
      <div className={styles.divformGroup}>
        <div className={styles.input}>
          <div className={styles.divplaceholder} style={divplaceholderStyle}>
            <div className={styles.enterPhone}>{inputLabel}</div>
          </div>
        </div>
        <div className={styles.label} style={label1Style}>
          <div className={styles.mobile} style={mobileStyle}>
            <span className={styles.mobileTxtContainer}>
              <span>{mobileInputLabelExperienc}</span>
              <span className={styles.span}>*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneForm;
