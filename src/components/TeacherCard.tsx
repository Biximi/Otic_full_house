import { FunctionComponent } from "react";
import StatisticsContainer from "./StatisticsContainer";
import styles from "./TeacherCard.module.css";
const TeacherCard: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolMd4}>
        <div className={styles.divcard}>
          <div className={styles.divcardBody}>
            <div className={styles.heading5}>Timesheet</div>
            <div className={styles.divpunchFinger}>
              <div className={styles.ifas}>
                <div className={styles.div}></div>
              </div>
              <div className={styles.divpunchDet}>
                <div className={styles.heading6}>Punch In at</div>
                <b className={styles.wed11thMar}>Wed, 11th Mar 2019 10.00 AM</b>
              </div>
            </div>
            <div className={styles.divpunchHours}>
              <b className={styles.b}>08:00</b>
            </div>
            <div className={styles.divpunchBtnSection}>
              <div className={styles.span}>
                <b className={styles.punchIn}>Punch in</b>
              </div>
              <div className={styles.span1}>
                <b className={styles.punchIn}>Punch out</b>
              </div>
              <div className={styles.divonoffswitch}>
                <div className={styles.label}>
                  <div className={styles.pseudo} />
                </div>
                <div className={styles.spanonoffswitchSwitch} />
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.divstatsBox}>
                  <div className={styles.break}>Break</div>
                  <b className={styles.heading61}>1.21 hrs</b>
                </div>
              </div>
              <div className={styles.item1}>
                <div className={styles.divstatsBox1}>
                  <div className={styles.break}>Overtime</div>
                  <b className={styles.heading61}>3 hrs</b>
                </div>
              </div>
              <div className={styles.pseudo1} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcolMd41}>
        <div className={styles.divcard}>
          <div className={styles.divcardBody}>
            <b className={styles.heading51}>Statistics</b>
            <div className={styles.divrow1}>
              <StatisticsContainer timePeriod="Today" />
              <div className={styles.divcolMd6}>
                <div className={styles.divcard2}>
                  <div className={styles.divstatsInfo}>
                    <div className={styles.div1}>
                      <div className={styles.thisWeek}>This Week</div>
                      <b className={styles.heading52}>3.45 / 8 hrs</b>
                    </div>
                    <div className={styles.divprogress}>
                      <div className={styles.progressbar} />
                    </div>
                  </div>
                </div>
              </div>
              <StatisticsContainer
                timePeriod="This month"
                propTop="165.09px"
                propBottom="165.1px"
                propColor="#55ce63"
                propPadding="var(--padding-0) 23.919998168945312px var(--padding-0) var(--padding-0)"
                propBackgroundColor="#55ce63"
                propWidth="160.06px"
              />
              <div className={styles.divcolMd61}>
                <div className={styles.divcard2}>
                  <div className={styles.divstatsInfo}>
                    <div className={styles.div1}>
                      <div className={styles.thisWeek}>Remaining</div>
                      <b className={styles.heading53}>3.45 / 8 hrs</b>
                    </div>
                    <div className={styles.divprogress1}>
                      <div className={styles.progressbar1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divcolMd12}>
                <div className={styles.divcard4}>
                  <div className={styles.divstatsInfo2}>
                    <div className={styles.div3}>
                      <div className={styles.overtime1}>Overtime</div>
                      <b className={styles.heading54}>4</b>
                    </div>
                    <div className={styles.divprogress2}>
                      <div className={styles.progressbar2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcolMd4}>
        <div className={styles.divcard}>
          <div className={styles.divcardBody2}>
            <div className={styles.heading55}>Today Activity</div>
            <div className={styles.list1}>
              <div className={styles.item2}>
                <div className={styles.punchInAt}>Punch In at</div>
                <div className={styles.presActivityTime}>
                  <div className={styles.div4}></div>
                  <div className={styles.am}> 10.00 AM.</div>
                </div>
                <div className={styles.pseudo2} />
              </div>
              <div className={styles.item3}>
                <div className={styles.punchInAt}>Punch Out at</div>
                <div className={styles.presActivityTime}>
                  <div className={styles.div4}></div>
                  <div className={styles.am}> 11.00 AM.</div>
                </div>
                <div className={styles.pseudo2} />
              </div>
              <div className={styles.item4}>
                <div className={styles.punchInAt}>Punch In at</div>
                <div className={styles.presActivityTime}>
                  <div className={styles.div4}></div>
                  <div className={styles.am}> 11.15 AM.</div>
                </div>
                <div className={styles.pseudo2} />
              </div>
              <div className={styles.item5}>
                <div className={styles.punchInAt}>Punch Out at</div>
                <div className={styles.presActivityTime}>
                  <div className={styles.div4}></div>
                  <div className={styles.am}> 1.30 PM.</div>
                </div>
                <div className={styles.pseudo2} />
              </div>
              <div className={styles.item6}>
                <div className={styles.punchInAt}>Punch In at</div>
                <div className={styles.presActivityTime}>
                  <div className={styles.div4}></div>
                  <div className={styles.am}> 2.00 PM.</div>
                </div>
                <div className={styles.pseudo2} />
              </div>
              <div className={styles.pseudo7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
