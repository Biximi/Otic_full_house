import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./StatisticsContainer.module.css";

type StatisticsContainerType = {
  timePeriod?: string;

  /** Style props */
  propTop?: Property.Top;
  propBottom?: Property.Bottom;
  propColor?: Property.Color;
  propPadding?: Property.Padding;
  propBackgroundColor?: Property.BackgroundColor;
  propWidth?: Property.Width;
};

const StatisticsContainer: FunctionComponent<StatisticsContainerType> = ({
  timePeriod,
  propTop,
  propBottom,
  propColor,
  propPadding,
  propBackgroundColor,
  propWidth,
}) => {
  const divcolMd6Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const heading5Style: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const divprogressStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const progressbarStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      width: propWidth,
    };
  }, [propBackgroundColor, propWidth]);

  return (
    <div className={styles.divcolMd6} style={divcolMd6Style}>
      <div className={styles.divcard}>
        <div className={styles.divstatsInfo}>
          <div className={styles.div}>
            <div className={styles.today}>{timePeriod}</div>
            <b className={styles.heading5} style={heading5Style}>
              3.45 / 8 hrs
            </b>
          </div>
          <div className={styles.divprogress} style={divprogressStyle}>
            <div className={styles.progressbar} style={progressbarStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
