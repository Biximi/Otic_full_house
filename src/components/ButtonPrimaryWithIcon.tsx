import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ButtonPrimaryWithIcon.module.css";

type ButtonPrimaryWithIconType = {
  buttonName?: string;
  iconOutlinearrowRight?: string;
  showIcon?: boolean;

  /** Style props */
  buttonPrimaryWithIconPosition?: Property.Position;
  buttonPrimaryWithIconBackgroundColor?: Property.BackgroundColor;
  buttonPrimaryWithIconWidth?: Property.Width;
  buttonPrimaryWithIconTop?: Property.Top;
  buttonPrimaryWithIconLeft?: Property.Left;
  buttonPrimaryWithIconBorderRadius?: Property.BorderRadius;
  buttonPrimaryWithIconHeight?: Property.Height;
  buttonNameFontWeight?: Property.FontWeight;
  buttonNameFontFamily?: Property.FontFamily;
};

const ButtonPrimaryWithIcon: FunctionComponent<ButtonPrimaryWithIconType> = ({
  buttonName,
  iconOutlinearrowRight,
  showIcon,
  buttonPrimaryWithIconPosition,
  buttonPrimaryWithIconBackgroundColor,
  buttonPrimaryWithIconWidth,
  buttonPrimaryWithIconTop,
  buttonPrimaryWithIconLeft,
  buttonPrimaryWithIconBorderRadius,
  buttonPrimaryWithIconHeight,
  buttonNameFontWeight,
  buttonNameFontFamily,
}) => {
  const buttonPrimaryWithIconStyle: CSS.Properties = useMemo(() => {
    return {
      position: buttonPrimaryWithIconPosition,
      backgroundColor: buttonPrimaryWithIconBackgroundColor,
      width: buttonPrimaryWithIconWidth,
      top: buttonPrimaryWithIconTop,
      left: buttonPrimaryWithIconLeft,
      borderRadius: buttonPrimaryWithIconBorderRadius,
      height: buttonPrimaryWithIconHeight,
    };
  }, [
    buttonPrimaryWithIconPosition,
    buttonPrimaryWithIconBackgroundColor,
    buttonPrimaryWithIconWidth,
    buttonPrimaryWithIconTop,
    buttonPrimaryWithIconLeft,
    buttonPrimaryWithIconBorderRadius,
    buttonPrimaryWithIconHeight,
  ]);

  const buttonNameStyle: CSS.Properties = useMemo(() => {
    return {
      fontWeight: buttonNameFontWeight,
      fontFamily: buttonNameFontFamily,
    };
  }, [buttonNameFontWeight, buttonNameFontFamily]);

  return (
    <div
      className={styles.buttonprimarywithIcon}
      style={buttonPrimaryWithIconStyle}
    >
      <div className={styles.buttonNameParent}>
        <div className={styles.buttonName} style={buttonNameStyle}>
          {buttonName}
        </div>
        {showIcon && (
          <div className={styles.icon}>
            <img
              className={styles.iconoutlinearrowRight}
              alt=""
              src={iconOutlinearrowRight}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonPrimaryWithIcon;
