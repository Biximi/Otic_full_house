import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StarStudentsContainer from "../components/StarStudentsContainer";
import CardContainer3 from "../components/CardContainer3";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteAdminDashboard1.module.css";
const OticSuiteAdminDashboard1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onItemContainer2Click = useCallback(() => {
    navigate("/otic-suite-adminprofile");
  }, [navigate]);

  return (
    <div className={styles.oticSuiteAdminDashboard}>
      <Header
        dimensionCode="/link--logopng@2x.png"
        dimensionText="/headericon04svg1.svg"
        carDimensions="/headericon05svg1.svg"
        linkCursor="pointer"
        onItemContainer2Click={onItemContainer2Click}
      />
      <StarStudentsContainer />
      <div className={styles.divpageSubHeader}>
        <div className={styles.heading3}>
          <div className={styles.welcomeAdmin}>Welcome Admin!</div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.linkHome}>Home</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.linkHome}>/</div>
            <div className={styles.linkHome}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.divrow}>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo}>
                <div className={styles.heading6}>Students</div>
                <div className={styles.heading31}>4000</div>
              </div>
              <div className={styles.divdbIcon}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon01svg1}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector12@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo1}>
                <div className={styles.heading6}>Awards</div>
                <div className={styles.heading31}>70+</div>
              </div>
              <div className={styles.divdbIcon1}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon02svg1}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector13@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo2}>
                <div className={styles.heading6}>Department</div>
                <div className={styles.heading31}>5+</div>
              </div>
              <div className={styles.divdbIcon2}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon03svg1}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector14@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo3}>
                <div className={styles.heading6}>Revenue</div>
                <div className={styles.heading34}>UGX 450,000,000</div>
              </div>
              <div className={styles.divdbIcon3}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon04svg1}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector15@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContainer3 />
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
      <img className={styles.createIcon} alt="" src="/create@2x.png" />
    </div>
  );
};

export default OticSuiteAdminDashboard1;
