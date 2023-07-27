import { FunctionComponent } from "react";
import Header from "../components/Header";
import CardContainer2 from "../components/CardContainer2";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteSubjetcs.module.css";
const OticSuiteSubjetcs: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteSubjetcs}>
      <Header
        dimensionCode="/link--logopng1@2x.png"
        dimensionText="/headericon04svg1.svg"
        carDimensions="/headericon05svg1.svg"
        linkCursor="unset"
      />
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divcontent}>
        <div className={styles.divcol}>
          <div className={styles.heading3}>
            <div className={styles.subjects}>Subjects</div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.linkDashboard}>Dashboard</div>
            </div>
            <div className={styles.item1}>
              <div className={styles.div}>/</div>
              <div className={styles.subjects1}>Subjects</div>
            </div>
          </div>
        </div>
        <CardContainer2 />
        <div className={styles.divcontentChild} />
        <div className={styles.searchWrapper}>
          <div className={styles.linkDashboard}>Search</div>
        </div>
      </div>
      <div className={styles.divsidebarWrapper}>
        <div className={styles.divsidebar}>
          <div className={styles.divslimscrolldiv}>
            <div className={styles.divsidebarInner}>
              <div className={styles.link}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.students}></div>
                </div>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.span} />
                <div className={styles.pseudo} />
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
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span1}>
                      <div className={styles.students}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div3}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span1}>
                      <div className={styles.students}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div3}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas2}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span3}>
                    <div className={styles.students}>Departments</div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div3}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span4}>
                      <div className={styles.students}>Subjects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div3}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas4}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span1}>
                      <div className={styles.students}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div3}></div>
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <div className={styles.ifas5}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span1}>
                      <div className={styles.students}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas6}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span1}>
                      <div className={styles.students}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink7}>
                  <div className={styles.ifas6}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span1}>
                      <div className={styles.students}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span9}>
                    <div className={styles.spanInner}>
                      <div className={styles.authenticationWrapper}>
                        <div className={styles.students}>Authentication</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pseudo6}>
                    <div className={styles.div3}></div>
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

export default OticSuiteSubjetcs;
