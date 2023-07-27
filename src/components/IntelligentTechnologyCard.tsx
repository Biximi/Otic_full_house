import { FunctionComponent } from "react";
import ButtonPrimaryWithIcon from "./ButtonPrimaryWithIcon";
import styles from "./IntelligentTechnologyCard.module.css";
const IntelligentTechnologyCard: FunctionComponent = () => {
  return (
    <div className={styles.contentLeft}>
      <div className={styles.unlockingThePotential}>
        Unlocking the Potential of Intelligent Technology
      </div>
      <div className={styles.info}>
        <div className={styles.joinWith4600Container}>
          <span className={styles.joinWith}>{`Join with `}</span>
          <b className={styles.schools}>{`4600+ Schools `}</b>
          <span className={styles.joinWith}>
            {" "}
            and start getting enchasing AI capabilities
          </span>
        </div>
        <img className={styles.imageIcon} alt="" src="/image.svg" />
      </div>
      <div className={styles.buttons}>
        <ButtonPrimaryWithIcon
          buttonName="Signin"
          iconOutlinearrowRight="/iconoutlineannotation.svg"
          showIcon={false}
          buttonPrimaryWithIconPosition="absolute"
          buttonPrimaryWithIconBackgroundColor="#18181b"
          buttonPrimaryWithIconWidth="232.81px"
          buttonPrimaryWithIconTop="0px"
          buttonPrimaryWithIconLeft="0px"
          buttonPrimaryWithIconBorderRadius="10px"
          buttonPrimaryWithIconHeight="64.49px"
          buttonNameFontWeight="bold"
          buttonNameFontFamily="'Plus Jakarta Sans'"
        />
        <ButtonPrimaryWithIcon
          buttonName="Get started "
          iconOutlinearrowRight="/iconoutlineannotation1.svg"
          showIcon={false}
          buttonPrimaryWithIconPosition="absolute"
          buttonPrimaryWithIconBackgroundColor="#18181b"
          buttonPrimaryWithIconWidth="232.81px"
          buttonPrimaryWithIconTop="0px"
          buttonPrimaryWithIconLeft="275.74px"
          buttonPrimaryWithIconBorderRadius="10px"
          buttonPrimaryWithIconHeight="64.49px"
          buttonNameFontWeight="bold"
          buttonNameFontFamily="'Plus Jakarta Sans'"
        />
      </div>
    </div>
  );
};

export default IntelligentTechnologyCard;
