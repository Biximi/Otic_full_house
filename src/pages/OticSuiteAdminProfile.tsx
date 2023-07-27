import { FunctionComponent } from "react";
import Header from "../components/Header";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteAdminProfile.module.css";
const OticSuiteAdminProfile: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteAdminProfile}>
      <Header
        dimensionCode="/link--logopng@2x.png"
        dimensionText="/headericon04svg1.svg"
        carDimensions="/headericon05svg1.svg"
        linkCursor="unset"
      />
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <img
        className={styles.oticSuiteAdminProfileChild}
        alt=""
        src="/ellipse-7@2x.png"
      />
      <div className={styles.divpageSubHeader}>
        <div className={styles.heading3}>
          <div className={styles.admin}>Admin</div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.linkHome}>Admin</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.linkHome}>/</div>
            <div className={styles.linkHome}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.nameWrapper}>
        <div className={styles.linkHome}>Name:</div>
      </div>
      <div className={styles.emailAddressWrapper}>
        <div className={styles.linkHome}>Email Address:</div>
      </div>
      <div className={styles.tellWrapper}>
        <div className={styles.linkHome}>Tell:</div>
      </div>
      <div className={styles.addressWrapper}>
        <div className={styles.linkHome}>Address:</div>
      </div>
      <div className={styles.stuffIdWrapper}>
        <div className={styles.linkHome}>Stuff Id:</div>
      </div>
      <div className={styles.departmentWrapper}>
        <div className={styles.linkHome}>Department:</div>
      </div>
      <div className={styles.subjectsWrapper}>
        <div className={styles.linkHome}>Subjects</div>
      </div>
      <div className={styles.registerdWrapper}>
        <div className={styles.linkHome}>Registerd:</div>
      </div>
      <div className={styles.roleWrapper}>
        <div className={styles.linkHome}>Role:</div>
      </div>
      <div className={styles.paulNestaKatendeWrapper}>
        <div className={styles.linkHome}>Paul Nesta Katende</div>
      </div>
      <div className={styles.pauloutlookcomWrapper}>
        <div className={styles.linkHome}>Paul@outlook.com</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.linkHome}>+256 774612 1156</div>
      </div>
      <div className={styles.bugolobiKimatheAvenuePlotWrapper}>
        <div className={styles.bugolobiKimatheAvenueContainer}>
          <p className={styles.bugolobi}>{`Bugolobi, `}</p>
          <p className={styles.bugolobi}>Kimathe Avenue,</p>
          <p className={styles.bugolobi}>Plot 52,</p>
          <p className={styles.bugolobi}>King stone</p>
        </div>
      </div>
      <div className={styles.pl00001Wrapper}>
        <div className={styles.linkHome}>PL00001</div>
      </div>
      <div className={styles.scienceWrapper}>
        <div className={styles.linkHome}>Science</div>
      </div>
      <div className={styles.mathsscienceenglishWrapper}>
        <div className={styles.linkHome}>Maths,Science,English</div>
      </div>
      <div className={styles.yesWrapper}>
        <div className={styles.linkHome}>Yes</div>
      </div>
      <div className={styles.superAdministratorWrapper}>
        <div className={styles.linkHome}>Super Administrator</div>
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
                    <div className={styles.div4}></div>
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
                    <div className={styles.div4}></div>
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
                    <div className={styles.div4}></div>
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
                    <div className={styles.div4}></div>
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
                    <div className={styles.div4}></div>
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
                  <div className={styles.spanWrapper3}>
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
                    <div className={styles.div4}></div>
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

export default OticSuiteAdminProfile;
