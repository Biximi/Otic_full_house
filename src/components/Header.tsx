import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Header.module.css";

type HeaderType = {
  dimensionCode?: string;
  dimensionText?: string;
  carDimensions?: string;

  /** Style props */
  linkCursor?: Property.Cursor;

  /** Action props */
  onItemContainer2Click?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  dimensionCode,
  dimensionText,
  carDimensions,
  linkCursor,
  onItemContainer2Click,
}) => {
  const itemStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: linkCursor,
    };
  }, [linkCursor]);

  return (
    <div className={styles.divheader}>
      <div className={styles.form}>
        <div className={styles.input}>
          <div className={styles.divplaceholder}>
            <div className={styles.searchHere}>Search here</div>
          </div>
        </div>
        <div className={styles.button}></div>
      </div>
      <div className={styles.divheaderLeft}>
        <img className={styles.linkLogopng} alt="" src={dimensionCode} />
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.link}>
            <div className={styles.headerIcon04svg}>
              <img
                className={styles.headerIcon04svg1}
                alt=""
                src={dimensionText}
              />
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.link}>
            <div className={styles.headerIcon04svg}>
              <img
                className={styles.headerIcon04svg1}
                alt=""
                src={carDimensions}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.item2}
          onClick={onItemContainer2Click}
          style={itemStyle}
        >
          <div className={styles.link2}>
            <div className={styles.pseudo} />
            <div className={styles.spanuserImg}>
              <img
                className={styles.avatar01jpgIcon}
                alt=""
                src="/avatar01jpg@2x.png"
              />
              <div className={styles.divuserText}>
                <div className={styles.heading6}>Hesta Paul</div>
                <div className={styles.administrator}>Administrator</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listChild} />
      </div>
      <div className={styles.link3}>
        <div className={styles.div}></div>
      </div>
    </div>
  );
};

export default Header;
