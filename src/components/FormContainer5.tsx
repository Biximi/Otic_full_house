import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FormContainer5.module.css";

type FormContainer5Type = {
  itemCode?: string;
  itemImageCode?: string;
  personName?: string;
  subjectName?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propPadding?: Property.Padding;
  propWidth2?: Property.Width;
  propWidth3?: Property.Width;
  propWidth4?: Property.Width;
  propColor?: Property.Color;
  propOpacity?: Property.Opacity;
  propPadding1?: Property.Padding;
  propWidth5?: Property.Width;
  propWidth6?: Property.Width;
  propPadding2?: Property.Padding;
};

const FormContainer5: FunctionComponent<FormContainer5Type> = ({
  itemCode,
  itemImageCode,
  personName,
  subjectName,
  propBackgroundColor,
  propWidth,
  propWidth1,
  propPadding,
  propWidth2,
  propWidth3,
  propWidth4,
  propColor,
  propOpacity,
  propPadding1,
  propWidth5,
  propWidth6,
  propPadding2,
}) => {
  const rowStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const data6Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const tR005Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const data7Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const link1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const nantezaKatoStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const data8Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
      opacity: propOpacity,
    };
  }, [propColor, propOpacity]);

  const data9Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding1,
      width: propWidth5,
    };
  }, [propPadding1, propWidth5]);

  const englishStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const data10Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.row} style={rowStyle}>
      <div className={styles.data} style={data6Style}>
        <div className={styles.tr005} style={tR005Style}>
          {itemCode}
        </div>
      </div>
      <div className={styles.data1} style={data7Style}>
        <div className={styles.heading2}>
          <div className={styles.link}>
            <img
              className={styles.avatar02jpgIcon}
              alt=""
              src={itemImageCode}
            />
          </div>
          <div className={styles.link1} style={link1Style}>
            <div className={styles.nantezaKato} style={nantezaKatoStyle}>
              {personName}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.data2} style={data8Style}>
        <div className={styles.div} style={div1Style}>
          4
        </div>
      </div>
      <div className={styles.data3} style={data9Style}>
        <div className={styles.english} style={englishStyle}>
          {subjectName}
        </div>
      </div>
      <div className={styles.data4}>
        <div className={styles.am}>00:00 AM</div>
      </div>
      <div className={styles.data5}>
        <div className={styles.am}>00:00 AM</div>
      </div>
      <div className={styles.data6} style={data10Style}>
        <div className={styles.am2}>00:00 AM</div>
      </div>
      <div />
    </div>
  );
};

export default FormContainer5;
