import { FunctionComponent } from "react";
import FormContainer2 from "./FormContainer2";
import styles from "./ExamCard.module.css";
const ExamCard: FunctionComponent = () => {
  return (
    <div className={styles.divcard}>
      <div className={styles.form}>
        <div className={styles.divcol12}>
          <div className={styles.heading5}>
            <div className={styles.examInformation}>Exam Information</div>
          </div>
        </div>
        <div className={styles.divcol121}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Exam Name</div>
            <div className={styles.input} />
          </div>
        </div>
        <FormContainer2 />
        <div className={styles.divcol122}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Subject</div>
            <div className={styles.input} />
          </div>
        </div>
        <div className={styles.divcol123}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Start Time</div>
            <div className={styles.input2}>
              <div className={styles.divdateTimeEdit}>
                <div className={styles.labelExam}>--</div>
                <div className={styles.div}>:</div>
                <div className={styles.spinbuttonMinutes}>--</div>
                <div className={styles.spinbuttonAmpm}>--</div>
              </div>
              <div className={styles.divpicker}>
                <img className={styles.imageIcon} alt="" src="/image1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcol124}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>End Time</div>
            <div className={styles.input2}>
              <div className={styles.divdateTimeEdit}>
                <div className={styles.labelExam}>--</div>
                <div className={styles.div}>:</div>
                <div className={styles.spinbuttonMinutes}>--</div>
                <div className={styles.spinbuttonAmpm}>--</div>
              </div>
              <div className={styles.divpicker}>
                <img className={styles.imageIcon} alt="" src="/image2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcol125}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Facilitator</div>
            <div className={styles.input2}>
              <div className={styles.divdateTimeEdit}>
                <div className={styles.labelExam}>{`Facilitator `}</div>
              </div>
              <div className={styles.divpicker}>
                <img className={styles.imageIcon} alt="" src="/image1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcol126}>
          <div className={styles.divformGroup}>
            <div className={styles.labelExam}>Event Date</div>
            <div className={styles.input5}>
              <div className={styles.divdateTimeEdit}>
                <div className={styles.labelExam}>mm</div>
                <div className={styles.div2}>/</div>
                <div className={styles.spinbuttonDay}>dd</div>
                <div className={styles.div3}>/</div>
                <div className={styles.spinbuttonYear}>yyyy</div>
              </div>
              <div className={styles.divpicker3}>
                <img className={styles.imageIcon3} alt="" src="/image3.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcol127}>
          <div className={styles.button}>
            <div className={styles.submit}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
