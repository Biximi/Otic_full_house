import { FunctionComponent } from "react";
import styles from "./Container.module.css";
const Container: FunctionComponent = () => {
  return (
    <div className={styles.divtableResponsive}>
      <div className={styles.divdatatablesTable0Wrapper}>
        <div className={styles.grid}>
          <div className={styles.headerRow}>
            <div className={styles.cellActivateToSortCol}>
              <div className={styles.div}>↑</div>
              <div className={styles.div1}>#</div>
              <div className={styles.div2}>↓</div>
            </div>
            <div className={styles.cellDateActivateToSort}>
              <div className={styles.div3}>↑</div>
              <div className={styles.date}>Date</div>
              <div className={styles.div4}>↓</div>
            </div>
            <div className={styles.cellPunchInActivateToS}>
              <div className={styles.div5}>↑</div>
              <div className={styles.punchIn}>Punch In</div>
              <div className={styles.div6}>↓</div>
            </div>
            <div className={styles.cellPunchOutActivateTo}>
              <div className={styles.div7}>↑</div>
              <div className={styles.punchIn}>Punch Out</div>
              <div className={styles.div8}>↓</div>
            </div>
            <div className={styles.cellProductionActivateTo}>
              <div className={styles.div9}>↑</div>
              <div className={styles.punchIn}>Lessons</div>
              <div className={styles.div10}>↓</div>
            </div>
            <div className={styles.cellBreakActivateToSort}>
              <div className={styles.div11}>↑</div>
              <div className={styles.punchIn}>Break</div>
              <div className={styles.div12}>↓</div>
            </div>
            <div className={styles.cellOvertimeActivateToS}>
              <div className={styles.div13}>↑</div>
              <div className={styles.punchIn}>Overtime</div>
              <div className={styles.div14}>↓</div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.data}>
                <div className={styles.am}>1</div>
              </div>
              <div className={styles.data1}>
                <div className={styles.am}>19 Feb 2023</div>
              </div>
              <div className={styles.data2}>
                <div className={styles.am}>10 AM</div>
              </div>
              <div className={styles.data3}>
                <div className={styles.am}>7 PM</div>
              </div>
              <div className={styles.data4}>
                <div className={styles.am}>9 hrs</div>
              </div>
              <div className={styles.data5}>
                <div className={styles.am}>1 hrs</div>
              </div>
              <div className={styles.data6}>
                <div className={styles.am}>0</div>
              </div>
            </div>
            <div className={styles.headerRow}>
              <div className={styles.data7}>
                <div className={styles.am}>2</div>
              </div>
              <div className={styles.data8}>
                <div className={styles.am}>20 Feb 2023</div>
              </div>
              <div className={styles.data9}>
                <div className={styles.am}>10 AM</div>
              </div>
              <div className={styles.data10}>
                <div className={styles.am}>7 PM</div>
              </div>
              <div className={styles.data11}>
                <div className={styles.am}>9 hrs</div>
              </div>
              <div className={styles.data12}>
                <div className={styles.am}>1 hrs</div>
              </div>
              <div className={styles.data13}>
                <div className={styles.am}>0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
