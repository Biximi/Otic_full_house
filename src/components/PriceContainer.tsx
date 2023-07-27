import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import Points from "./Points";
import styles from "./PriceContainer.module.css";

type PriceContainerType = {
  planType?: string;
  pricingText?: string;
  studentCount?: string;

  /** Style props */
  propLeft?: Property.Left;
  propBorder?: Property.Border;
  propBackgroundColor?: Property.BackgroundColor;
  propColor?: Property.Color;
};

const PriceContainer: FunctionComponent<PriceContainerType> = ({
  planType,
  pricingText,
  studentCount,
  propLeft,
  propBorder,
  propBackgroundColor,
  propColor,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const createAccountStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.category}>
      <div className={styles.basicParent} style={frameDivStyle}>
        <div className={styles.basic}>{planType}</div>
        <b className={styles.b}>{pricingText}</b>
      </div>
      <div className={styles.pointsParent}>
        <Points
          visitors="500 Students"
          pointsPosition="unset"
          visitorsFontFamily="Poppins"
        />
        <Points
          visitors="Unlimited projects"
          pointsPosition="unset"
          visitorsFontFamily="Montserrat"
        />
        <Points
          visitors="extended free trial"
          pointsPosition="unset"
          visitorsFontFamily="Montserrat"
        />
      </div>
      <div className={styles.button} style={buttonStyle}>
        <div className={styles.createAccount} style={createAccountStyle}>
          Create account
        </div>
      </div>
    </div>
  );
};

export default PriceContainer;
