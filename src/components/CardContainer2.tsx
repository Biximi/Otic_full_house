import { FunctionComponent } from "react";
import styles from "./CardContainer2.module.css";
const CardContainer2: FunctionComponent = () => {
  return (
    <div className={styles.divcard}>
      <div className={styles.divcardBody}>
        <div className={styles.divrow}>
          <div className={styles.divcol}>
            <div className={styles.heading3}>Subjects</div>
          </div>
          <div className={styles.divcolAuto}>
            <div className={styles.link}>
              <div className={styles.div}></div>
              <div className={styles.download}> Download</div>
            </div>
            <div className={styles.link1}>
              <div className={styles.div}></div>
            </div>
          </div>
        </div>
        <div className={styles.divtableResponsive}>
          <div className={styles.divdatatablesTable0Wrapper}>
            <div className={styles.label}>
              <div className={styles.show}>{`Show `}</div>
              <div className={styles.options}>
                <div className={styles.div2}>
                  <div className={styles.div3}>04</div>
                </div>
              </div>
              <div className={styles.entries}> entries</div>
            </div>
            <div className={styles.grid}>
              <div className={styles.headerRow}>
                <div className={styles.cellActivateToSort}>
                  <div className={styles.input} />
                </div>
                <div className={styles.cellIdActivateToSortCo}>
                  <div className={styles.id}>ID</div>
                </div>
                <div className={styles.cellNameActivateToSort}>
                  <div className={styles.id}>Name</div>
                </div>
                <div className={styles.cellClassActivateToSort}>
                  <div className={styles.div4}>↑</div>
                  <div className={styles.id}>Class</div>
                </div>
                <div className={styles.cellActionActivateToSor}>
                  <div className={styles.action}>Action</div>
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.headerRow}>
                  <div className={styles.data}>
                    <div className={styles.input1} />
                  </div>
                  <div className={styles.data1}>
                    <div className={styles.statusShowing}>PRE2209</div>
                  </div>
                  <div className={styles.data2}>
                    <div className={styles.heading2}>Science</div>
                  </div>
                  <div className={styles.data3}>
                    <div className={styles.statusShowing}>10</div>
                  </div>
                  <div className={styles.data4}>
                    <div className={styles.divactions}>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.data5}>
                    <div className={styles.input1} />
                  </div>
                  <div className={styles.data6}>
                    <div className={styles.statusShowing}>PRE2213</div>
                  </div>
                  <div className={styles.data7}>
                    <div className={styles.heading21}>Maths</div>
                  </div>
                  <div className={styles.data8}>
                    <div className={styles.statusShowing}>30</div>
                  </div>
                  <div className={styles.data9}>
                    <div className={styles.divactions}>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.headerRow}>
                  <div className={styles.data}>
                    <div className={styles.input1} />
                  </div>
                  <div className={styles.data1}>
                    <div className={styles.statusShowing}>PRE2143</div>
                  </div>
                  <div className={styles.data12}>
                    <div className={styles.heading21}>Social studies</div>
                  </div>
                  <div className={styles.data13}>
                    <div className={styles.statusShowing}>22</div>
                  </div>
                  <div className={styles.data4}>
                    <div className={styles.divactions}>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.data5}>
                    <div className={styles.input1} />
                  </div>
                  <div className={styles.data6}>
                    <div className={styles.statusShowing}>PRE2153</div>
                  </div>
                  <div className={styles.data17}>
                    <div className={styles.heading21}>English</div>
                  </div>
                  <div className={styles.data18}>
                    <div className={styles.statusShowing}>11</div>
                  </div>
                  <div className={styles.data9}>
                    <div className={styles.divactions}>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                      <div className={styles.link2}>
                        <div className={styles.div6}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divrow1}>
              <div className={styles.divcolSm12}>
                <div className={styles.statusShowing}>Showing 1 entry</div>
              </div>
              <div className={styles.divcolSm121}>
                <div className={styles.list}>
                  <div className={styles.headerRow}>
                    <div className={styles.link10}>
                      <div className={styles.statusShowing}>Previous</div>
                    </div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.link11}>
                      <div className={styles.statusShowing}>1</div>
                    </div>
                  </div>
                  <div className={styles.item2}>
                    <div className={styles.link12}>
                      <div className={styles.statusShowing}>Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer2;
