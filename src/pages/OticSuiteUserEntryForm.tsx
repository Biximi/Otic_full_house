import { FunctionComponent } from "react";
import Header from "../components/Header";
import FormMonthContainer from "../components/FormMonthContainer";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteUserEntryForm.module.css";
const OticSuiteUserEntryForm: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteUserEntryForm}>
      <Header
        dimensionCode="/link--logopng@2x.png"
        dimensionText="/headericon04svg1.svg"
        carDimensions="/headericon05svg1.svg"
        linkCursor="unset"
      />
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.itemParent}>
        <div className={styles.item}>
          <div className={styles.label}>
            <div className={styles.fullName}>Full Name</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.divcid3}>
            <div className={styles.divextended}>
              <div className={styles.spanformSubLabelContainer}>
                <div className={styles.options}>
                  <div className={styles.div1}>
                    <div className={styles.mr}>Mr.</div>
                  </div>
                  <div className={styles.image}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
                <div className={styles.labelPrefix}>Prefix</div>
              </div>
              <div className={styles.spanformSubLabelContainer1}>
                <div className={styles.input} />
                <div className={styles.labelFirst}>First Name</div>
              </div>
              <div className={styles.spanformSubLabelContainer1}>
                <div className={styles.input} />
                <div className={styles.labelFirst}>Last Name</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.label1}>
            <div className={styles.fullName}>Date of Birth</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.divcid10}>
            <div className={styles.divextended}>
              <FormMonthContainer
                dimensionCode="/vector1.svg"
                dateCode="Month"
              />
              <FormMonthContainer dimensionCode="/vector2.svg" dateCode="Day" />
              <FormMonthContainer
                dimensionCode="/vector3.svg"
                dateCode="Year"
              />
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.label2}>
            <div className={styles.fullName}>Telephone Number</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.divcid5}>
            <div className={styles.input2}>
              <div className={styles.divplaceholder}>
                <div className={styles.div5}>(000) 000-0000</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item3}>
          <div className={styles.label3}>
            <div className={styles.fullName}>E-mail</div>
          </div>
          <div className={styles.divcid13}>
            <div className={styles.input} />
            <div className={styles.labelFirst}>example@example.com</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.submit}>Submit</div>
        </div>
        <div className={styles.item4}>
          <div className={styles.label4}>
            <div className={styles.fullName}>Department</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.divcid5}>
            <div className={styles.optionsAccountType}>
              <div className={styles.div7}>
                <div className={styles.pleaseSelect}>Please Select</div>
              </div>
              <div className={styles.image}>
                <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.label5}>
            <div className={styles.fullName}>Subjects</div>
          </div>
          <div className={styles.divcid5}>
            <div className={styles.optionsAccountType}>
              <div className={styles.div8}>
                <div className={styles.mr}>Please Select</div>
              </div>
              <div className={styles.image}>
                <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item6}>
          <div className={styles.label6}>
            <div className={styles.fullName}>ID Card Upload</div>
          </div>
          <div className={styles.divcid24}>
            <div className={styles.divqqUploadButton}>
              <div className={styles.pseudo}>
                <div className={styles.image3}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector5.svg"
                  />
                </div>
              </div>
              <div className={styles.browseFiles}>Browse Files</div>
              <div className={styles.divjfuploadHeading}>
                <div className={styles.dragAndDrop}>
                  Drag and drop files here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divsidebarWrapper}>
        <div className={styles.divsidebar}>
          <div className={styles.divslimscrolldiv}>
            <div className={styles.divsidebarInner}>
              <div className={styles.link}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.submit}></div>
                </div>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.pseudo1} />
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
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span}>
                      <div className={styles.submit}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div11}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span}>
                      <div className={styles.submit}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div11}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas2}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.submit}>Departments</div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div11}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span3}>
                      <div className={styles.submit}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div11}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas4}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span}>
                      <div className={styles.submit}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo2}>
                    <div className={styles.div11}></div>
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <div className={styles.ifas5}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span}>
                      <div className={styles.submit}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas6}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span}>
                      <div className={styles.submit}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink7}>
                  <div className={styles.ifas6}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span}>
                      <div className={styles.submit}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.span8}>
                    <div className={styles.spanInner}>
                      <div className={styles.authenticationWrapper}>
                        <div className={styles.submit}>Authentication</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pseudo7}>
                    <div className={styles.div11}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newUserWrapper}>
        <div className={styles.submit}>New User</div>
      </div>
    </div>
  );
};

export default OticSuiteUserEntryForm;
