import { FunctionComponent } from "react";
import styles from "./StarStudentsContainer.module.css";
const StarStudentsContainer: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolXl6}>
        <div className={styles.divcard}>
          <div className={styles.divcardHeader}>
            <div className={styles.heading5}>
              <div className={styles.starStudents}>Star Students</div>
            </div>
            <div className={styles.list}>
              <div className={styles.itemLink}>
                <div className={styles.div}></div>
              </div>
            </div>
          </div>
          <div className={styles.divcardBody}>
            <div className={styles.divtableResponsive}>
              <div className={styles.table}>
                <div className={styles.headerRow}>
                  <div className={styles.cell}>
                    <div className={styles.id}>ID</div>
                  </div>
                  <div className={styles.cell1}>
                    <div className={styles.id}>Name</div>
                  </div>
                  <div className={styles.cell2}>
                    <div className={styles.id}>Class</div>
                  </div>
                  <div className={styles.cell3}>
                    <div className={styles.id}>Percentage</div>
                  </div>
                  <div className={styles.cell4}>
                    <div className={styles.id}>Year</div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.row}>
                    <div className={styles.dataPre2209}>KC0001</div>
                    <div className={styles.dataLink}>
                      <img
                        className={styles.avatar02jpgIcon}
                        alt=""
                        src="/avatar02jpg1@2x.png"
                      />
                      <div className={styles.mugenyiPaul}> Mugenyi Paul</div>
                    </div>
                    <div className={styles.data1185}>P1</div>
                    <div className={styles.data98}>80%</div>
                    <div className={styles.data2019}>2020</div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.dataPre2209}>KC0002</div>
                    <div className={styles.dataLink1}>
                      <img
                        className={styles.avatar02jpgIcon}
                        alt=""
                        src="/avatar01jpg1@2x.png"
                      />
                      <div className={styles.mugenyiPaul}>Mulungi Faith</div>
                    </div>
                    <div className={styles.data1185}>P4</div>
                    <div className={styles.data995}>75%</div>
                    <div className={styles.data2019}>2022</div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.dataPre2209}>KC0003</div>
                    <div className={styles.dataLink2}>
                      <img
                        className={styles.avatar02jpgIcon}
                        alt=""
                        src="/avatar03jpg1@2x.png"
                      />
                      <div className={styles.mugenyiPaul}>Kalungi Peter</div>
                    </div>
                    <div className={styles.data1185}>P2</div>
                    <div className={styles.data995}>90%</div>
                    <div className={styles.data2019}>2019</div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.dataPre2209}>KC0004</div>
                    <div className={styles.dataLink3}>
                      <img
                        className={styles.avatar02jpgIcon}
                        alt=""
                        src="/avatar02jpg1@2x.png"
                      />
                      <div className={styles.mugenyiPaul}>Mugenyi Paul</div>
                    </div>
                    <div className={styles.data1185}>P7</div>
                    <div className={styles.data982}>95.2%</div>
                    <div className={styles.data2019}>2022</div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.dataPre2209}>KC0005</div>
                    <div className={styles.dataLink}>
                      <img
                        className={styles.avatar02jpgIcon}
                        alt=""
                        src="/avatar05jpg1@2x.png"
                      />
                      <div className={styles.mugenyiPaul}>Kabusi Elijah</div>
                    </div>
                    <div className={styles.data1185}>P5</div>
                    <div className={styles.data98}>86%</div>
                    <div className={styles.data2019}>2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcard1}>
        <div className={styles.divcardHeader1}>
          <div className={styles.heading5}>
            <div className={styles.starStudents}>Star Students</div>
          </div>
          <div className={styles.list}>
            <div className={styles.itemLink}>
              <div className={styles.div}></div>
            </div>
          </div>
        </div>
        <div className={styles.divactivityGroups}>
          <div className={styles.divactivityAwards}>
            <img
              className={styles.divawardBoxsIcon}
              alt=""
              src="/divawardboxs@2x.png"
            />
            <div className={styles.divawardListOuts}>
              <div className={styles.heading4}>Winner House in sports</div>
              <div className={styles.heading52}>Lion House was the first</div>
            </div>
            <div className={styles.divawardTimeList}>
              <div className={styles.span}>
                <div className={styles.daysAgo}>5 Days ago</div>
              </div>
            </div>
          </div>
          <div className={styles.divactivityAwards}>
            <img
              className={styles.divawardBoxsIcon}
              alt=""
              src="/divawardboxs1@2x.png"
            />
            <div className={styles.divawardListOuts1}>
              <div className={styles.heading41}>School Debate challenge</div>
              <div className={styles.heading52}>
                P5 was the leading class in the joint Class debate
              </div>
            </div>
            <div className={styles.divawardTimeList}>
              <div className={styles.span1}>
                <div className={styles.daysAgo}>6 Days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarStudentsContainer;
