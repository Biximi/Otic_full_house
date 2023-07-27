import { FunctionComponent } from "react";
import PriceContainer from "../components/PriceContainer";
import styles from "./Pricing.module.css";
const Pricing: FunctionComponent = () => {
  return (
    <div className={styles.pricing}>
      <div className={styles.pricingChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/frame-6@2x.png" />
          <div className={styles.frameContainer}>
            <div className={styles.pricingWrapper}>
              <div className={styles.products}>Pricing</div>
            </div>
            <div className={styles.pricingWrapper}>
              <div className={styles.products}>Products</div>
            </div>
            <div className={styles.pricingWrapper}>
              <div className={styles.products}>Support</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.pricingWrapper}>
            <div className={styles.products}>Login</div>
          </div>
          <div className={styles.getStartedWrapper}>
            <div className={styles.products}>Get started</div>
          </div>
        </div>
      </div>
      <div className={styles.pricingContainer}>
        <div className={styles.pricing2}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.categoryParent}>
            <PriceContainer
              planType="Basic"
              pricingText="$20"
              studentCount="500 Students"
            />
            <PriceContainer
              planType="Standard"
              pricingText="$99"
              studentCount="10000 Students"
              propLeft="calc(50% - 57.5px)"
              propBorder="unset"
              propBackgroundColor="#0066ff"
              propColor="#fff"
            />
            <PriceContainer
              planType="Enterprise"
              pricingText="Let’s talk!"
              studentCount="10000+ Students"
              propLeft="calc(50% - 101.5px)"
              propBorder="1px solid var(--color-gray-1600)"
              propBackgroundColor="unset"
              propColor="#8f8f8f"
            />
          </div>
          <b className={styles.chooseYourPlan}>Choose your plan</b>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a ga
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.monthly}>Monthly</div>
            </div>
            <div className={styles.annualy}>Annualy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
