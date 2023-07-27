import { FunctionComponent } from "react";
import styles from "./CardContainer1.module.css";
const CardContainer1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <div className={styles.group71}>
        <img className={styles.group71Child} alt="" src="/group-16.svg" />
        <b className={styles.overview}>{`Overview `}</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.graph1}>
          <div className={styles.graph1Child} />
          <b className={styles.days}>20 Days</b>
          <div className={styles.averageLikesGained}>Average likes gained</div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <div className={styles.div}>10,5 %</div>
            <img className={styles.arrowIcon} alt="" src="/arrow-2.svg" />
          </div>
          <div className={styles.graph}>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <b className={styles.b}>15</b>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild1} />
              <b className={styles.b1}>20</b>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild2} />
              <b className={styles.b2}>24</b>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.groupChild1} />
              <b className={styles.b1}>20</b>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild4} />
              <b className={styles.b4}>10</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild5} />
        <div className={styles.graph2}>
          <div className={styles.graph1Child} />
          <b className={styles.adsStatuses}>Ads Statuses</b>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.active}>Active</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameChild} />
            <div className={styles.active}>Need action</div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameChild} />
            <div className={styles.active}>Allocated</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild} />
            <div className={styles.active}>Inactive</div>
          </div>
          <div className={styles.ellipseParent1}>
            <div className={styles.frameChild} />
            <div className={styles.active}>Suspended</div>
          </div>
          <div className={styles.ellipseParent2}>
            <div className={styles.frameChild} />
            <div className={styles.active}>Allocated</div>
          </div>
        </div>
        <img className={styles.graph21Icon} alt="" src="/graph2-1.svg" />
      </div>
    </div>
  );
};

export default CardContainer1;
