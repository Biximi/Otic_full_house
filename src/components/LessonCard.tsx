import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LessonCard.module.css";

type LessonCardType = {
  lessonTitle?: string;
  lessonDescription?: string;
  timeSlotLabel?: string;

  /** Style props */
  propHeight?: Property.Height;
  propTop?: Property.Top;
  propTop1?: Property.Top;
};

const LessonCard: FunctionComponent<LessonCardType> = ({
  lessonTitle,
  lessonDescription,
  timeSlotLabel,
  propHeight,
  propTop,
  propTop1,
}) => {
  const data11Style: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const data12Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const button1Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  return (
    <div className={styles.row}>
      <div className={styles.data} style={data11Style}>
        <div className={styles.lessons2}>{lessonTitle}</div>
        <div className={styles.ipsuumDolor}>{lessonDescription}</div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.div}></div>
            <div className={styles.jul172023}>Jul 17, 2023</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.div1}>|</div>
          </div>
          <div className={styles.item2}>
            <div className={styles.div}></div>
            <div className={styles.am}>{timeSlotLabel}</div>
          </div>
        </div>
      </div>
      <div className={styles.data1} style={data12Style}>
        <div className={styles.linkConfirmed}>Confirmed</div>
        <div className={styles.button} style={button1Style}>
          <div className={styles.reschedule}>Reschedule</div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
