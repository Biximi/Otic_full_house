import { FunctionComponent } from "react";
import Header from "../components/Header";
import GenderFilterContainer from "../components/GenderFilterContainer";
import FormContainer4 from "../components/FormContainer4";
import PhoneForm from "../components/PhoneForm";
import PasswordFormContainer from "../components/PasswordFormContainer";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteEditIndividualDet.module.css";
const OticSuiteEditIndividualDet: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteEditIndividualDet}>
      <Header
        dimensionCode="/link--logopng1@2x.png"
        dimensionText="/headericon04svg.svg"
        carDimensions="/headericon05svg.svg"
        linkCursor="unset"
      />
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divcardWrapper}>
        <div className={styles.divcard}>
          <div className={styles.form}>
            <div className={styles.divcol12}>
              <div className={styles.heading5}>
                <div className={styles.basicDetails}>Basic Details</div>
              </div>
            </div>
            <div className={styles.divcol121}>
              <div className={styles.divformGroup}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder}>
                    <div className={styles.teacherId}>Teacher ID</div>
                  </div>
                </div>
                <div className={styles.label}>
                  <div className={styles.teacherIdContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Teacher ID `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol122}>
              <div className={styles.divformGroup}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder1}>
                    <div className={styles.teacherId}>Enter Name</div>
                  </div>
                </div>
                <div className={styles.label1}>
                  <div className={styles.name}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Name `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <GenderFilterContainer
              genderLabel="Male"
              genderOptionLabel="Male"
            />
            <FormContainer4 personalInfoText="Date Of Birth " />
            <PhoneForm
              inputLabel="Enter Phone"
              mobileInputLabelExperienc="Mobile "
            />
            <FormContainer4
              personalInfoText="Joining Date "
              propRight="0.05px"
              propLeft="1049.97px"
              propHeight="calc(100% - 813px)"
              propBottom="668px"
              propWidth="calc(100% - 408.84px)"
            />
            <div className={styles.divcol123}>
              <div className={styles.input}>
                <div className={styles.divplaceholder2}>
                  <div className={styles.teacherId}>Enter Joining Date</div>
                </div>
              </div>
              <div className={styles.label2}>
                <div className={styles.qualification}>
                  <span className={styles.nameTxtContainer}>
                    <span>{`Qualification `}</span>
                    <span className={styles.span}>*</span>
                  </span>
                </div>
              </div>
            </div>
            <PhoneForm
              inputLabel="Enter Experience"
              mobileInputLabelExperienc="Experience "
              propTop="230px"
              propBottom="583px"
              propPadding="var(--padding-0) 369.9800109863281px var(--padding-0) var(--padding-0)"
              propWidth="calc(100% - 417.92px)"
              propRight="407.92px"
              propWidth1="73.27px"
            />
            <div className={styles.divcol124}>
              <div className={styles.heading51}>
                <div className={styles.basicDetails}>Login Details</div>
              </div>
            </div>
            <div className={styles.divcol125}>
              <div className={styles.divformGroup}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder3}>
                    <div className={styles.teacherId}>Enter Username</div>
                  </div>
                </div>
                <div className={styles.label3}>
                  <div className={styles.username}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Username `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <PhoneForm
              inputLabel="Enter Mail Id"
              mobileInputLabelExperienc="Email ID "
              propTop="375px"
              propBottom="438px"
              propPadding="var(--padding-0) 396.9800109863281px var(--padding-0) var(--padding-0)"
              propWidth="calc(100% - 434.25px)"
              propRight="424.25px"
              propWidth1="56.94px"
            />
            <PasswordFormContainer
              inputLabel="Enter Password"
              inputPlaceholder="Password "
            />
            <div className={styles.divcol126}>
              <div className={styles.divformGroup}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder4}>
                    <div className={styles.teacherId}>Repeat Password</div>
                  </div>
                </div>
                <div className={styles.label4}>
                  <div className={styles.repeatPasswordContainer}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Repeat Password `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol127}>
              <div className={styles.heading5}>
                <div className={styles.basicDetails}>Address</div>
              </div>
            </div>
            <div className={styles.divcol128}>
              <div className={styles.divformGroup4}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder5}>
                    <div className={styles.teacherId}>Enter address</div>
                  </div>
                </div>
                <div className={styles.label5}>
                  <div className={styles.address1}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Address `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol129}>
              <div className={styles.divformGroup}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder6}>
                    <div className={styles.teacherId}>Enter City</div>
                  </div>
                </div>
                <div className={styles.label6}>
                  <div className={styles.city}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`City `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <PhoneForm
              inputLabel="Enter State"
              mobileInputLabelExperienc="State "
              propTop="690px"
              propBottom="123px"
              propPadding="var(--padding-0) 405.9800109863281px var(--padding-0) var(--padding-0)"
              propWidth="calc(100% - 451.48px)"
              propRight="441.48px"
              propWidth1="39.7px"
            />
            <PasswordFormContainer
              inputLabel="Enter Zip"
              inputPlaceholder="Zip Code "
              propTop="690px"
              propBottom="123px"
              propPadding="var(--padding-0) 418.9800109863281px var(--padding-0) var(--padding-0)"
              propWidth="calc(100% - 430.07px)"
              propRight="420.07px"
              propWidth1="61.11px"
            />
            <div className={styles.divcol1210}>
              <div className={styles.divformGroup}>
                <div className={styles.input}>
                  <div className={styles.divplaceholder7}>
                    <div className={styles.teacherId}>Enter Country</div>
                  </div>
                </div>
                <div className={styles.label7}>
                  <div className={styles.country}>
                    <span className={styles.nameTxtContainer}>
                      <span>{`Country `}</span>
                      <span className={styles.span}>*</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcol1211}>
              <div className={styles.button}>
                <div className={styles.submit}>Submit</div>
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
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span8}>
                      <div className={styles.submit}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span8}>
                      <div className={styles.submit}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas2}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.span10}>
                    <div className={styles.submit}>Departments</div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span11}>
                      <div className={styles.submit}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas4}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span8}>
                      <div className={styles.submit}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.div2}></div>
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <div className={styles.ifas5}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span8}>
                      <div className={styles.submit}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas6}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span8}>
                      <div className={styles.submit}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink7}>
                  <div className={styles.ifas6}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.span8}>
                      <div className={styles.submit}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.submit}></div>
                  </div>
                  <div className={styles.span16}>
                    <div className={styles.spanInner}>
                      <div className={styles.authenticationWrapper}>
                        <div className={styles.submit}>Authentication</div>
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
    </div>
  );
};

export default OticSuiteEditIndividualDet;
