import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FormContainer3.module.css";

type FormContainer3Type = {
  selectionText?: string;
  selectionPlaceholder?: string;
  selectionLabel?: string;

  /** Style props */
  propTop?: Property.Top;
  propBottom?: Property.Bottom;
  propWidth?: Property.Width;
  propPadding?: Property.Padding;
  propWidth1?: Property.Width;
  propRight?: Property.Right;
  propWidth2?: Property.Width;
};

const FormContainer3: FunctionComponent<FormContainer3Type> = ({
  selectionText,
  selectionPlaceholder,
  selectionLabel,
  propTop,
  propBottom,
  propWidth,
  propPadding,
  propWidth1,
  propRight,
  propWidth2,
}) => {
  const divcol126Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const pleaseSelectGroupStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textbox1Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const label4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight,
    };
  }, [propWidth1, propRight]);

  const bloodGroupContainerStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={styles.divcol12} style={divcol126Style}>
      <div className={styles.divformGroup}>
        <div className={styles.options}>
          <div className={styles.div}>
            <div
              className={styles.pleaseSelectGroup}
              style={pleaseSelectGroupStyle}
            >
              {selectionText}
            </div>
          </div>
        </div>
        <div className={styles.combobox}>
          <div className={styles.textbox} style={textbox1Style}>
            <div className={styles.pleaseSelectGroup1}>
              {selectionPlaceholder}
            </div>
          </div>
        </div>
        <div className={styles.presentation} />
        <div className={styles.label} style={label4Style}>
          <div
            className={styles.bloodGroupContainer}
            style={bloodGroupContainerStyle}
          >
            <span className={styles.bloodGroupContainer1}>
              <span>{selectionLabel}</span>
              <span className={styles.span}>*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer3;
