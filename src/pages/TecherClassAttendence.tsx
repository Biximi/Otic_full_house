import { FunctionComponent } from "react";
import Header from "../components/Header";
import TeacherCard from "../components/TeacherCard";
import DateFilterContainer from "../components/DateFilterContainer";
import Container from "../components/Container";
import ItemLink from "../components/ItemLink";
import styles from "./TecherClassAttendence.module.css";
const TecherClassAttendence: FunctionComponent = () => {
  return (
    <div className={styles.techerClassAttendence}>
      <Header
        dimensionCode="/link--logopng1@2x.png"
        dimensionText="/headericon04svg.svg"
        carDimensions="/headericon05svg.svg"
        linkCursor="unset"
      />
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divrowParent}>
        <TeacherCard />
        <DateFilterContainer />
        <Container />
      </div>
      <div className={styles.divsidebarWrapper}>
        <div className={styles.divsidebar}>
          <div className={styles.divslimscrolldiv}>
            <div className={styles.divsidebarInner}>
              <div className={styles.link}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.div}></div>
                </div>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.span} />
                <div className={styles.pseudo} />
                <div className={styles.sortingArrows} />
              </div>
              <ItemLink
                showFrameDiv={false}
                itemLinkPosition="absolute"
                itemLinkWidth="calc(100% - 30px)"
                itemLinkHeight="calc(100% - 972px)"
                itemLinkTop="342px"
                itemLinkRight="15px"
                itemLinkBottom="630px"
                itemLinkLeft="15px"
              />
              <div className={styles.sidebar}>
                <div className={styles.itemLink}>
                  <div className={styles.ifas}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span1}>
                      <div className={styles.div}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span1}>
                      <div className={styles.div}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas2}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.span3}>
                    <div className={styles.div}>Departments</div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span4}>
                      <div className={styles.div}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas4}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span1}>
                      <div className={styles.div}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <div className={styles.ifas5}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span1}>
                      <div className={styles.div}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas6}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span1}>
                      <div className={styles.div}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink7}>
                  <div className={styles.ifas6}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span1}>
                      <div className={styles.div}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.div}></div>
                  </div>
                  <div className={styles.span9}>
                    <div className={styles.spanInner}>
                      <div className={styles.authenticationWrapper}>
                        <div className={styles.div}>Authentication</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pseudo6}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teachersName}>Teachers Name</div>
    </div>
  );
};

export default TecherClassAttendence;
