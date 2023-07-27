import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteAdminDashboard.module.css";
const OticSuiteAdminDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onItemContainer2Click = useCallback(() => {
    navigate("/otic-suite-adminprofile");
  }, [navigate]);

  return (
    <div className={styles.oticSuiteAdminDashboard}>
      <Header
        dimensionCode="/link--logopng@2x.png"
        dimensionText="/headericon04svg.svg"
        carDimensions="/headericon05svg.svg"
        onItemContainer2Click={onItemContainer2Click}
      />
      <div className={styles.divpageSubHeader}>
        <div className={styles.heading3}>
          <div className={styles.workspace}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>Workspace</p>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.linkHome}>Dashboard</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.linkHome}>/</div>
            <div className={styles.linkHome}>Workspace</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
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
                  <div className={styles.spanContainer}>
                    <div className={styles.span4}>
                      <div className={styles.students}>Subects</div>
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
                  <div className={styles.frameDiv}>
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
                      <div className={styles.item}>
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
      <div className={styles.oticSuiteAdminDashboardChild} />
      <div className={styles.oticSuiteAdminDashboardItem} />
      <div className={styles.oticSuiteAdminDashboardInner} />
      <div className={styles.lineDiv} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-34624187@2x.png"
      />
      <img
        className={styles.oticSuiteAdminDashboardChild1}
        alt=""
        src="/rectangle-34624189@2x.png"
      />
      <div className={styles.workspaceA}>Workspace A</div>
      <div className={styles.addNew}>Add new</div>
    </div>
  );
};

export default OticSuiteAdminDashboard;
