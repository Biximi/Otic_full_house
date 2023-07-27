import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./PasswordFormContainer.module.css";

type PasswordFormContainerType = {
  inputLabel?: string;
  inputPlaceholder?: string;

  /** Style props */
  propTop?: Property.Top;
  propBottom?: Property.Bottom;
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
  propRight?: Property.Right;
  propWidth1?: Property.Width;
};

const PasswordFormContainer: FunctionComponent<PasswordFormContainerType> = ({
  inputLabel,
  inputPlaceholder,
  propTop,
  propBottom,
  propPadding,
  propWidth,
  propRight,
  propWidth1,
}) => {
  const divcol124Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const divplaceholder1Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const label2Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const passwordStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.divcol12} style={divcol124Style}>
      <div className={styles.divformGroup}>
        <div className={styles.input}>
          <div className={styles.divplaceholder} style={divplaceholder1Style}>
            <div className={styles.enterPassword}>{inputLabel}</div>
          </div>
        </div>
        <div className={styles.label} style={label2Style}>
          <div className={styles.password} style={passwordStyle}>
            <span className={styles.passwordTxtContainer}>
              <span>{inputPlaceholder}</span>
              <span className={styles.span}>*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordFormContainer;
