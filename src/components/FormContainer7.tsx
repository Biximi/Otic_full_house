import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FormContainer7.module.css";

type FormContainer7Type = {
  tR004?: string;
  avatar08jpg?: string;
  ndagireKiwanuka?: string;
  science?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propPadding?: Property.Padding;
  propWidth2?: Property.Width;
  propPadding1?: Property.Padding;
  propDisplay?: Property.Display;
  propAlignItems?: Property.AlignItems;
  propWidth3?: Property.Width;
  propFlexShrink?: Property.FlexShrink;
  propWidth4?: Property.Width;
  propPadding2?: Property.Padding;
  propWidth5?: Property.Width;
  propWidth6?: Property.Width;
  propPadding3?: Property.Padding;
  propPadding4?: Property.Padding;
};

const FormContainer7: FunctionComponent<FormContainer7Type> = ({
  tR004,
  avatar08jpg,
  ndagireKiwanuka,
  science,
  propWidth,
  propWidth1,
  propPadding,
  propWidth2,
  propPadding1,
  propDisplay,
  propAlignItems,
  propWidth3,
  propFlexShrink,
  propWidth4,
  propPadding2,
  propWidth5,
  propWidth6,
  propPadding3,
  propPadding4,
}) => {
  const dataStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const tR004Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const data1Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const linkStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const data2Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      alignItems: propAlignItems,
      width: propWidth3,
      flexShrink: propFlexShrink,
    };
  }, [propDisplay, propAlignItems, propWidth3, propFlexShrink]);

  const data3Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
      padding: propPadding2,
    };
  }, [propWidth4, propPadding2]);

  const scienceStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const data4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth6,
      padding: propPadding3,
    };
  }, [propWidth6, propPadding3]);

  const data5Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  return (
    <div className={styles.row}>
      <div className={styles.data} style={dataStyle}>
        <div className={styles.tr004} style={tR004Style}>
          {tR004}
        </div>
      </div>
      <div className={styles.data1} style={data1Style}>
        <div className={styles.heading2}>
          <div className={styles.link}>
            <img className={styles.avatar08jpgIcon} alt="" src={avatar08jpg} />
          </div>
          <div className={styles.link1} style={linkStyle}>
            <div className={styles.ndagireKiwanuka}>{ndagireKiwanuka}</div>
          </div>
        </div>
      </div>
      <div className={styles.data2} style={data2Style}>
        <div className={styles.div} style={divStyle}>
          4
        </div>
      </div>
      <div className={styles.data3} style={data3Style}>
        <div className={styles.science} style={scienceStyle}>
          {science}
        </div>
      </div>
      <div className={styles.data4} style={data4Style}>
        <div className={styles.am}>00:00 AM</div>
      </div>
      <div className={styles.data5}>
        <div className={styles.am}>00:00 AM</div>
      </div>
      <div className={styles.data6} style={data5Style}>
        <div className={styles.am2}>00:00 AM</div>
      </div>
      <div />
    </div>
  );
};

export default FormContainer7;
