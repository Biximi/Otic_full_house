import { FunctionComponent } from "react";
import FormContainer2 from "./FormContainer2";
import styles from "./StudentResultCard.module.css";
const StudentResultCard: FunctionComponent = () => {
  return (
    <div className={styles.divcard}>
      <div className={styles.form}>
        <div className={styles.divcol12}>
          <div className={styles.heading5}>
            <div className={styles.studentsResult}>Students Result</div>
          </div>
        </div>
        <div className={styles.divcol121}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Maths</div>
            <div className={styles.input} />
          </div>
        </div>
        <div className={styles.divcol122}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>English</div>
            <div className={styles.input} />
          </div>
        </div>
        <FormContainer2 propTop="156px" propBottom="228.5px" />
        <div className={styles.divcol123}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Science</div>
            <div className={styles.input} />
          </div>
        </div>
        <div className={styles.divcol124}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Social Studies</div>
            <div className={styles.input} />
          </div>
        </div>
        <div className={styles.divcol125}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Fees</div>
            <div className={styles.input} />
          </div>
        </div>
        <div className={styles.divcol126}>
          <div className={styles.button}>
            <div className={styles.submit}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentResultCard;
