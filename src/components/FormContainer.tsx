import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  inputPlaceholder?: string;
  inputLabel?: string;

  /** Style props */
  propTop?: Property.Top;
  propBottom?: Property.Bottom;
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
  propRight?: Property.Right;
  propWidth1?: Property.Width;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  inputPlaceholder,
  inputLabel,
  propTop,
  propBottom,
  propPadding,
  propWidth,
  propRight,
  propWidth1,
}) => {
  const divcol125Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const divplaceholder2Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const label3Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const lastNameContainerStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.divcol12} style={divcol125Style}>
      <div className={styles.divformGroup}>
        <div className={styles.input}>
          <div className={styles.divplaceholder} style={divplaceholder2Style}>
            <div className={styles.enterFirstName}>{inputPlaceholder}</div>
          </div>
        </div>
        <div className={styles.label} style={label3Style}>
          <div
            className={styles.lastNameContainer}
            style={lastNameContainerStyle}
          >
            <span className={styles.lastNameContainer1}>
              <span>{inputLabel}</span>
              <span className={styles.span}>*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
