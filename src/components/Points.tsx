import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Points.module.css";

type PointsType = {
  visitors?: string;

  /** Style props */
  pointsPosition?: Property.Position;
  visitorsFontFamily?: Property.FontFamily;
};

const Points: FunctionComponent<PointsType> = ({
  visitors,
  pointsPosition,
  visitorsFontFamily,
}) => {
  const pointsStyle: CSS.Properties = useMemo(() => {
    return {
      position: pointsPosition,
    };
  }, [pointsPosition]);

  const visitorsStyle: CSS.Properties = useMemo(() => {
    return {
      fontFamily: visitorsFontFamily,
    };
  }, [visitorsFontFamily]);

  return (
    <div className={styles.points} style={pointsStyle}>
      <img className={styles.pointIcon} alt="" src="/point.svg" />
      <div className={styles.visitors} style={visitorsStyle}>
        {visitors}
      </div>
    </div>
  );
};

export default Points;
