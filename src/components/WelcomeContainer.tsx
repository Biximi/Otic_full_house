import { FunctionComponent } from "react";
import styles from "./WelcomeContainer.module.css";
const WelcomeContainer: FunctionComponent = () => {
  return (
    <div className={styles.divloginRightWrap}>
      <div className={styles.heading1}>Welcome to</div>
      <div className={styles.paccountSubtitle}>
        <div className={styles.needAnAccountContainer}>
          <span>{`Need an account? `}</span>
          <span className={styles.signUp}>Sign Up</span>
        </div>
      </div>
      <div className={styles.heading2}>Sign in</div>
      <div className={styles.form}>
        <div className={styles.divformGroup}>
          <div className={styles.input} />
          <div className={styles.label}>
            <div className={styles.username}>
              <span className={styles.usernameTxtContainer}>
                <span>{`Username `}</span>
                <span className={styles.span}>*</span>
              </span>
            </div>
          </div>
          <div className={styles.div}></div>
        </div>
        <div className={styles.divformGroup1}>
          <div className={styles.input} />
          <div className={styles.label1}>
            <div className={styles.password}>
              <span className={styles.usernameTxtContainer}>
                <span>{`Password `}</span>
                <span className={styles.span}>*</span>
              </span>
            </div>
          </div>
          <div className={styles.div1}></div>
        </div>
        <div className={styles.divforgotpass}>
          <div className={styles.divrememberMe}>
            <div className={styles.label2}>
              <div className={styles.rememberMe}>Remember me</div>
              <div className={styles.spancheckmark} />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.forgotPassword}>Forgot Password?</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.needAnAccountContainer}>Login</div>
        </div>
      </div>
      <div className={styles.divsocialLogin}>
        <div className={styles.link1}>
          <div className={styles.div2}></div>
        </div>
        <div className={styles.link2}>
          <div className={styles.div2}></div>
        </div>
        <div className={styles.link3}>
          <div className={styles.div2}></div>
        </div>
        <div className={styles.link4}>
          <div className={styles.div2}></div>
        </div>
      </div>
      <div className={styles.divloginOr}>
        <div className={styles.spanorLine} />
        <div className={styles.spanspanOr}>
          <div className={styles.or}>or</div>
        </div>
      </div>
      <img
        className={styles.divloginRightWrapChild}
        alt=""
        src="/frame-7@2x.png"
      />
    </div>
  );
};

export default WelcomeContainer;
