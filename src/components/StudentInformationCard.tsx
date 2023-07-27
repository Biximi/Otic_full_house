import { FunctionComponent } from "react";
import FormContainer from "./FormContainer";
import GenderFilterContainer from "./GenderFilterContainer";
import FormContainer4 from "./FormContainer4";
import FormContainer3 from "./FormContainer3";
import styles from "./StudentInformationCard.module.css";
const StudentInformationCard: FunctionComponent = () => {
  return (
    <div className={styles.divcard}>
      <div className={styles.form}>
        <div className={styles.divcol12}>
          <div className={styles.heading5}>
            <div className={styles.studentInformation}>Student Information</div>
            <div className={styles.span}>
              <div className={styles.link}></div>
            </div>
          </div>
        </div>
        <div className={styles.divcol121}>
          <div className={styles.divformGroup}>
            <div className={styles.input}>
              <div className={styles.divplaceholder}>
                <div className={styles.enterFirstName}>Enter First Name</div>
              </div>
            </div>
            <div className={styles.label}>
              <div className={styles.firstNameContainer}>
                <span className={styles.religionTxtContainer}>
                  <span>{`First Name `}</span>
                  <span className={styles.span1}>*</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <FormContainer
          inputPlaceholder="Enter First Name"
          inputLabel="Last Name "
        />
        <GenderFilterContainer
          genderLabel="Select Gender"
          genderOptionLabel="Select Gender"
          propHeight="calc(100% - 445px)"
          propBottom="385px"
          propWidth="93.03px"
          propPadding="var(--padding-0) 396.9800109863281px var(--padding-0) var(--padding-mini)"
        />
        <FormContainer4
          personalInfoText="Date Of Birth "
          propRight="1050.02px"
          propLeft="0px"
          propHeight="calc(100% - 445px)"
          propBottom="300px"
          propWidth="calc(100% - 407.15px)"
        />
        <div className={styles.divcol122}>
          <div className={styles.divformGroup}>
            <div className={styles.input}>
              <div className={styles.divplaceholder1}>
                <div className={styles.enterFirstName}>Country</div>
              </div>
            </div>
            <div className={styles.label1}>
              <div className={styles.countryWrapper}>
                <div className={styles.country1}>Country</div>
              </div>
            </div>
          </div>
        </div>
        <FormContainer3
          selectionText="Please Select Group"
          selectionPlaceholder="Please Select Group"
          selectionLabel="Blood Group "
        />
        <div className={styles.divcol123}>
          <div className={styles.divformGroup2}>
            <div className={styles.options}>
              <div className={styles.div}>
                <div className={styles.pleaseSelectReligion}>
                  Please Select Religion
                </div>
              </div>
            </div>
            <div className={styles.combobox}>
              <div className={styles.textbox}>
                <div className={styles.pleaseSelectCity}>
                  Please Select Religion
                </div>
              </div>
            </div>
            <div className={styles.presentation} />
            <div className={styles.label2}>
              <div className={styles.religion}>
                <span className={styles.religionTxtContainer}>
                  <span>{`Religion `}</span>
                  <span className={styles.span1}>*</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <FormContainer
          inputPlaceholder="Enter Email Address"
          inputLabel="E-Mail "
          propTop="230px"
          propBottom="215px"
          propPadding="var(--padding-0) 348.9800109863281px var(--padding-0) var(--padding-0)"
          propWidth="calc(100% - 445.31px)"
          propRight="435.31px"
          propWidth1="45.88px"
        />
        <FormContainer3
          selectionText="Please Select Class"
          selectionPlaceholder="Please Select Class"
          selectionLabel="Class "
          propTop="230px"
          propBottom="215px"
          propWidth="130.75px"
          propPadding="var(--padding-0) 361.9800109863281px var(--padding-0) var(--padding-mini)"
          propWidth1="calc(100% - 449.73px)"
          propRight="439.73px"
          propWidth2="41.45px"
        />
        <div className={styles.divcol124}>
          <div className={styles.divformGroup2}>
            <div className={styles.options}>
              <div className={styles.div}>
                <div className={styles.pleaseSelectSection}>
                  Please Select Section
                </div>
              </div>
            </div>
            <div className={styles.combobox}>
              <div className={styles.textbox1}>
                <div className={styles.pleaseSelectCity}>
                  Please Select City
                </div>
              </div>
            </div>
            <div className={styles.presentation} />
            <div className={styles.label3}>
              <div className={styles.city}>
                <span className={styles.religionTxtContainer}>
                  <span>{`City `}</span>
                  <span className={styles.span1}>*</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcol125}>
          <div className={styles.divformGroup}>
            <div className={styles.input}>
              <div className={styles.divplaceholder2}>
                <div className={styles.enterFirstName}>Enter Admission ID</div>
              </div>
            </div>
            <div className={styles.label4}>
              <div className={styles.admissionId}>Admission ID</div>
            </div>
          </div>
        </div>
        <div className={styles.divcol126}>
          <div className={styles.divformGroup}>
            <div className={styles.input}>
              <div className={styles.divplaceholder3}>
                <div className={styles.enterFirstName}>Enter Parent Name</div>
              </div>
            </div>
            <div className={styles.label5}>
              <div className={styles.parentName}>Parent Name</div>
            </div>
          </div>
        </div>
        <div className={styles.divcol127}>
          <div className={styles.divformGroup6}>
            <div className={styles.labelUpload}>{`Upload Student Photo `}</div>
            <div className={styles.label6}>
              <div className={styles.chooseFile}>Choose File</div>
            </div>
          </div>
        </div>
        <div className={styles.divcol128}>
          <div className={styles.button}>
            <div className={styles.submit}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInformationCard;
