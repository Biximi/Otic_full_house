import { FunctionComponent } from "react";
import CardContainer from "../components/CardContainer";
import CityFilterForm from "../components/CityFilterForm";
import PhoneNumberForm from "../components/PhoneNumberForm";
import MobileNumberForm from "../components/MobileNumberForm";
import FormContainer1 from "../components/FormContainer1";
import styles from "./DivcolMd8.module.css";
const DivcolMd8: FunctionComponent = () => {
  return (
    <div className={styles.divcolMd8}>
      <div className={styles.heading3}>Create account</div>
      <div className={styles.form}>
        <CardContainer />
        <CityFilterForm />
        <PhoneNumberForm />
        <MobileNumberForm />
        <FormContainer1 />
        <div className={styles.button}>
          <div className={styles.submit}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default DivcolMd8;
