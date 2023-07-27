import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ItemLink.module.css";

type ItemLinkType = {
  showFrameDiv?: boolean;

  /** Style props */
  itemLinkPosition?: Property.Position;
  itemLinkWidth?: Property.Width;
  itemLinkHeight?: Property.Height;
  itemLinkTop?: Property.Top;
  itemLinkRight?: Property.Right;
  itemLinkBottom?: Property.Bottom;
  itemLinkLeft?: Property.Left;
};

const ItemLink: FunctionComponent<ItemLinkType> = ({
  showFrameDiv,
  itemLinkPosition,
  itemLinkWidth,
  itemLinkHeight,
  itemLinkTop,
  itemLinkRight,
  itemLinkBottom,
  itemLinkLeft,
}) => {
  const itemLinkStyle: CSS.Properties = useMemo(() => {
    return {
      position: itemLinkPosition,
      width: itemLinkWidth,
      height: itemLinkHeight,
      top: itemLinkTop,
      right: itemLinkRight,
      bottom: itemLinkBottom,
      left: itemLinkLeft,
    };
  }, [
    itemLinkPosition,
    itemLinkWidth,
    itemLinkHeight,
    itemLinkTop,
    itemLinkRight,
    itemLinkBottom,
    itemLinkLeft,
  ]);

  return (
    <div className={styles.itemLink} style={itemLinkStyle}>
      {showFrameDiv && (
        <div className={styles.frameParent}>
          <div className={styles.ifasParent}>
            <div className={styles.ifas}>
              <div className={styles.div}></div>
            </div>
            <div className={styles.span}>
              <div className={styles.div}>Students</div>
            </div>
          </div>
          <div className={styles.pseudo}>
            <div className={styles.div1}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemLink;
