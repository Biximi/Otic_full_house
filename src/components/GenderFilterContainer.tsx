import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./GenderFilterContainer.module.css";

type GenderFilterContainerType = {
  genderLabel?: string;
  genderOptionLabel?: string;

  /** Style props */
  propHeight?: Property.Height;
  propBottom?: Property.Bottom;
  propWidth?: Property.Width;
  propPadding?: Property.Padding;
};

const GenderFilterContainer: FunctionComponent<GenderFilterContainerType> = ({
  genderLabel,
  genderOptionLabel,
  propHeight,
  propBottom,
  propWidth,
  propPadding,
}) => {
  const divcol121Style: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
      bottom: propBottom,
    };
  }, [propHeight, propBottom]);

  const maleStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textboxStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.divcol12} style={divcol121Style}>
      <div className={styles.divformGroup}>
        <div className={styles.options}>
          <div className={styles.div}>
            <div className={styles.male} style={maleStyle}>
              {genderLabel}
            </div>
          </div>
        </div>
        <div className={styles.combobox}>
          <div className={styles.textbox} style={textboxStyle}>
            <div className={styles.male1}>{genderOptionLabel}</div>
          </div>
        </div>
        <div className={styles.presentation} />
        <div className={styles.label}>
          <div className={styles.gender}>
            <span className={styles.genderTxtContainer}>
              <span>{`Gender `}</span>
              <span className={styles.span}>*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderFilterContainer;
