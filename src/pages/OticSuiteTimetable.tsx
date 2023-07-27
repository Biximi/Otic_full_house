import { FunctionComponent } from "react";
import Header from "../components/Header";
import FormContainer7 from "../components/FormContainer7";
import FormContainer5 from "../components/FormContainer5";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteTimetable.module.css";
const OticSuiteTimetable: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteTimetable}>
      <Header
        dimensionCode="/link--logopng1@2x.png"
        dimensionText="/headericon04svg1.svg"
        carDimensions="/headericon05svg1.svg"
        linkCursor="unset"
      />
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divcontent}>
        <div className={styles.divcol}>
          <div className={styles.heading3}>
            <div className={styles.timeTable}>Time Table</div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.linkDashboard}>Dashboard</div>
            </div>
            <div className={styles.item1}>
              <div className={styles.div}>/</div>
              <div className={styles.timeTable1}>Time Table</div>
            </div>
          </div>
        </div>
        <div className={styles.divcard}>
          <div className={styles.divcardBody}>
            <div className={styles.divrow}>
              <div className={styles.divcol1}>
                <div className={styles.timeTable}>Time Table</div>
              </div>
              <div className={styles.divcolAuto}>
                <div className={styles.link}>
                  <div className={styles.div1}></div>
                  <div className={styles.download}> Download</div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.div1}></div>
                </div>
              </div>
            </div>
            <div className={styles.divtableResponsive}>
              <div className={styles.divdatatablesTable0Wrapper}>
                <div className={styles.label}>
                  <div className={styles.show}>{`Show `}</div>
                  <div className={styles.options}>
                    <div className={styles.div3}>
                      <div className={styles.wamalaNansamba}>10</div>
                    </div>
                  </div>
                  <div className={styles.entries}> entries</div>
                </div>
                <div className={styles.grid}>
                  <div className={styles.headerRow}>
                    <div className={styles.cellIdActivateToSortCo}>
                      <div className={styles.id}>ID</div>
                    </div>
                    <div className={styles.cellNameActivateToSort}>
                      <div className={styles.name}>Name</div>
                    </div>
                    <div className={styles.cellClassActivateToSort}>
                      <div className={styles.name}>Class</div>
                    </div>
                    <div className={styles.cellSubjectActivateToSo}>
                      <div className={styles.name}>Subject</div>
                    </div>
                    <div className={styles.cellStartTimeActivateTo}>
                      <div className={styles.name}>Start Time</div>
                    </div>
                    <div className={styles.cellEndTimeActivateToS}>
                      <div className={styles.name}>End Time</div>
                    </div>
                    <div className={styles.cellDateActivateToSort}>
                      <div className={styles.name}>Date</div>
                    </div>
                    <div className={styles.cellActionActivateToSor}>
                      <div className={styles.action}>Action</div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.headerRow}>
                      <div className={styles.data}>
                        <div className={styles.tr001}>TR001</div>
                      </div>
                      <div className={styles.data1}>
                        <div className={styles.heading2}>
                          <div className={styles.link2}>
                            <img
                              className={styles.avatar07jpgIcon}
                              alt=""
                              src="/avatar07jpg@2x.png"
                            />
                          </div>
                          <div className={styles.link3}>
                            <div className={styles.wasswaBalikuddembe}>
                              Wasswa Balikuddembe
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.data2}>
                        <div className={styles.english}>4</div>
                      </div>
                      <div className={styles.data3}>
                        <div className={styles.englishWrapper}>
                          <div className={styles.english}>English</div>
                        </div>
                      </div>
                      <div className={styles.data4}>
                        <div className={styles.english}>00:00 AM</div>
                      </div>
                      <div className={styles.data5}>
                        <div className={styles.english}>00:00 AM</div>
                      </div>
                      <div className={styles.data6}>
                        <div className={styles.am2}>00:00 AM</div>
                      </div>
                      <div className={styles.data7}>
                        <div className={styles.divactions} />
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.data}>
                        <div className={styles.tr001}>TR002</div>
                      </div>
                      <div className={styles.dataWrapper}>
                        <div className={styles.data9}>
                          <div className={styles.heading21}>
                            <div className={styles.link2}>
                              <img
                                className={styles.avatar07jpgIcon}
                                alt=""
                                src="/avatar05jpg@2x.png"
                              />
                            </div>
                            <div className={styles.link5}>
                              <div className={styles.namazziSsengooba}>
                                Namazzi Ssengooba
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.data10}>
                        <div className={styles.english}>4</div>
                      </div>
                      <div className={styles.data11}>
                        <div className={styles.maths}>Maths</div>
                      </div>
                      <div className={styles.data4}>
                        <div className={styles.english}>00:00 AM</div>
                      </div>
                      <div className={styles.data13}>
                        <div className={styles.english}>00:00 AM</div>
                      </div>
                      <div className={styles.data14}>
                        <div className={styles.am2}>00:00 AM</div>
                      </div>
                      <div />
                    </div>
                    <div className={styles.headerRow}>
                      <div className={styles.data}>
                        <div className={styles.tr001}>TR003</div>
                      </div>
                      <div className={styles.dataWrapper}>
                        <div className={styles.data16}>
                          <div className={styles.heading21}>
                            <div className={styles.link2}>
                              <img
                                className={styles.avatar07jpgIcon}
                                alt=""
                                src="/avatar04jpg@2x.png"
                              />
                            </div>
                            <div className={styles.link3}>
                              <div className={styles.wamalaNansamba}>
                                Wamala Nansamba
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.data2}>
                        <div className={styles.english}>4</div>
                      </div>
                      <div className={styles.data18}>
                        <div className={styles.science}>Science</div>
                      </div>
                      <div className={styles.data4}>
                        <div className={styles.english}>00:00 AM</div>
                      </div>
                      <div className={styles.data13}>
                        <div className={styles.english}>00:00 AM</div>
                      </div>
                      <div className={styles.data21}>
                        <div className={styles.am2}>00:00 AM</div>
                      </div>
                    </div>
                    <FormContainer7
                      tR004="TR004"
                      avatar08jpg="/avatar08jpg@2x.png"
                      ndagireKiwanuka="Ndagire Kiwanuka"
                      science="Science"
                    />
                    <FormContainer5
                      itemCode="TR005"
                      itemImageCode="/avatar02jpg@2x.png"
                      personName="Nanteza Kato"
                      subjectName="English"
                    />
                    <FormContainer7
                      tR004="TR006"
                      avatar08jpg="/avatar03jpg@2x.png"
                      ndagireKiwanuka="Lubwama Namutebi"
                      science="Social studies"
                      propWidth="159px"
                      propWidth1="61px"
                      propPadding="16.5px 144.83999633789062px 16.5px var(--padding-xs)"
                      propWidth2="unset"
                      propPadding1="25.25px 120.97000122070312px 24.75px var(--padding-5xs)"
                      propDisplay="inline-block"
                      propAlignItems="unset"
                      propWidth3="unset"
                      propFlexShrink="unset"
                      propWidth4="187px"
                      propPadding2="25.25px 126.69000244140625px 24.75px var(--padding-xs)"
                      propWidth5="144px"
                      propWidth6="unset"
                      propPadding3="25.25px 123.19000244140625px 24.75px var(--padding-xs)"
                      propPadding4="25.25px 91.77000427246094px 24.75px var(--padding-xs)"
                    />
                  </div>
                </div>
                <div className={styles.divrow1}>
                  <div className={styles.divcolSm12}>
                    <div className={styles.statusShowing}>
                      Showing 6 entries
                    </div>
                  </div>
                  <div className={styles.divcolSm121}>
                    <div className={styles.list1}>
                      <div className={styles.englishWrapper}>
                        <div className={styles.link8}>
                          <div className={styles.english}>Previous</div>
                        </div>
                      </div>
                      <div className={styles.item3}>
                        <div className={styles.link9}>
                          <div className={styles.english}>1</div>
                        </div>
                      </div>
                      <div className={styles.item4}>
                        <div className={styles.link10}>
                          <div className={styles.english}>Next</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className={styles.link11}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.students}></div>
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
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.item}>
                      <div className={styles.students}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.wamalaNansamba}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.item}>
                      <div className={styles.students}>Teachers</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.wamalaNansamba}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas2}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.students}>Departments</div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.wamalaNansamba}></div>
                  </div>
                </div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span3}>
                      <div className={styles.students}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.wamalaNansamba}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas4}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.item}>
                      <div className={styles.students}>Accounts</div>
                    </div>
                  </div>
                  <div className={styles.pseudo1}>
                    <div className={styles.wamalaNansamba}></div>
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <div className={styles.ifas5}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.item}>
                      <div className={styles.students}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas6}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper2}>
                    <div className={styles.item}>
                      <div className={styles.students}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink7}>
                  <div className={styles.ifas6}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper1}>
                    <div className={styles.item}>
                      <div className={styles.students}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span8}>
                    <div className={styles.dataWrapper}>
                      <div className={styles.englishWrapper}>
                        <div className={styles.students}>Authentication</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pseudo6}>
                    <div className={styles.wamalaNansamba}></div>
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

export default OticSuiteTimetable;
