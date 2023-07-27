import { FunctionComponent } from "react";
import Header from "../components/Header";
import LessonCard from "../components/LessonCard";
import ItemLink from "../components/ItemLink";
import styles from "./OticSuiteTeachersDashboard.module.css";
const OticSuiteTeachersDashboard: FunctionComponent = () => {
  return (
    <div className={styles.oticSuiteTeachersDashboard}>
      <Header
        dimensionCode="/link--logopng@2x.png"
        dimensionText="/headericon04svg1.svg"
        carDimensions="/headericon05svg1.svg"
        linkCursor="unset"
      />
      <div className={styles.divpageSubHeader}>
        <div className={styles.heading3}>
          <div className={styles.teacher}>Teacher</div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.linkHome}>Home</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.linkHome}>/</div>
            <div className={styles.linkHome}>Teacher</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright2023}>Copyright © 2023 Otic</div>
      </div>
      <div className={styles.divrow}>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo}>
                <div className={styles.heading6}>Total students</div>
                <div className={styles.heading31}>55</div>
              </div>
              <div className={styles.divdbIcon}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon01svg1}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector8@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo1}>
                <div className={styles.heading61}>Total Classes</div>
                <div className={styles.heading32}>02/07</div>
              </div>
              <div className={styles.divdbIcon1}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon02svg1}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector9@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo2}>
                <div className={styles.heading62}>Total Lessons</div>
                <div className={styles.heading33}>07</div>
              </div>
              <div className={styles.divdbIcon2}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon03svg1}>
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector10@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divcolXl3}>
          <div className={styles.divcard}>
            <div className={styles.divdbWidgets}>
              <div className={styles.divdbInfo3}>
                <div className={styles.heading63}>Total Hours</div>
                <div className={styles.heading34}>14</div>
              </div>
              <div className={styles.divdbIcon3}>
                <div className={styles.dashIcon01svg}>
                  <div className={styles.dashIcon04svg1}>
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector11@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcardWrapper}>
        <div className={styles.divcard4}>
          <div className={styles.divcardBody}>
            <div className={styles.divcalendar}>
              <div className={styles.headerHeading2}>
                <div className={styles.july}>july</div>
                <div className={styles.div1}>2023</div>
              </div>
              <div className={styles.link} />
              <div className={styles.link1} />
              <div className={styles.table}>
                <div className={styles.header}>
                  <div className={styles.dataSun}>sun</div>
                  <div className={styles.dataMon}>mon</div>
                  <div className={styles.dataTue}>tue</div>
                  <div className={styles.dataWed}>wed</div>
                  <div className={styles.dataThu}>thu</div>
                  <div className={styles.dataFri}>fri</div>
                  <div className={styles.dataSat}>sat</div>
                </div>
                <div className={styles.body}>
                  <div className={styles.row}>
                    <div className={styles.data25}>25</div>
                    <div className={styles.data26}>26</div>
                    <div className={styles.data27}>27</div>
                    <div className={styles.data28}>28</div>
                    <div className={styles.data29}>29</div>
                    <div className={styles.data30}>30</div>
                    <div className={styles.data1}>1</div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.data16}>2</div>
                    <div className={styles.data17}>3</div>
                    <div className={styles.data18}>4</div>
                    <div className={styles.data19}>5</div>
                    <div className={styles.data}>
                      <div className={styles.div2}>6</div>
                      <div className={styles.pseudo} />
                    </div>
                    <div className={styles.data2}>
                      <div className={styles.div3}>7</div>
                    </div>
                    <div className={styles.data3}>
                      <div className={styles.div4}>8</div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.data9}>9</div>
                    <div className={styles.data10}>10</div>
                    <div className={styles.data11}>11</div>
                    <div className={styles.data12}>12</div>
                    <div className={styles.data13}>13</div>
                    <div className={styles.data14}>14</div>
                    <div className={styles.data15}>15</div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.data4}>
                      <div className={styles.div2}>16</div>
                      <div className={styles.pseudo} />
                    </div>
                    <div className={styles.data26}>17</div>
                    <div className={styles.data27}>18</div>
                    <div className={styles.data28}>19</div>
                    <div className={styles.data29}>20</div>
                    <div className={styles.data30}>21</div>
                    <div className={styles.data291}>22</div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.data4}>
                      <div className={styles.div2}>23</div>
                      <div className={styles.pseudo} />
                    </div>
                    <div className={styles.data26}>24</div>
                    <div className={styles.data27}>25</div>
                    <div className={styles.data28}>26</div>
                    <div className={styles.data29}>27</div>
                    <div className={styles.data30}>28</div>
                    <div className={styles.data291}>29</div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.data301}>30</div>
                    <div className={styles.data31}>31</div>
                    <div className={styles.data110}>1</div>
                    <div className={styles.data21}>2</div>
                    <div className={styles.data32}>3</div>
                    <div className={styles.data41}>4</div>
                    <div className={styles.data51}>5</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divcalendarInfo}>
              <div className={styles.divupComeHeader}>
                <div className={styles.heading2}>
                  <div className={styles.upcomingEvents}>Upcoming Events</div>
                </div>
                <div className={styles.span}>
                  <div className={styles.link2}></div>
                </div>
              </div>
              <div className={styles.divupcomeEventDate}>
                <div className={styles.pseudo3} />
                <div className={styles.heading35}>
                  <div className={styles.jan}>16 Jan</div>
                </div>
                <div className={styles.span1}>
                  <div className={styles.div7}></div>
                </div>
              </div>
              <div className={styles.divcalendarDetails}>
                <div className={styles.item}>
                  <div className={styles.am}>08:00 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName}>
                    <div className={styles.heading4}>Maths</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>08:00 - 09:00 am</div>
                  </div>
                  <div className={styles.pseudo4} />
                </div>
              </div>
              <div className={styles.divcalendarDetails1}>
                <div className={styles.item}>
                  <div className={styles.am}>09:00 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName}>
                    <div className={styles.heading4}>Science</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>09:00 - 10:00 am</div>
                  </div>
                  <div className={styles.pseudo4} />
                </div>
              </div>
              <div className={styles.divcalendarDetails2}>
                <div className={styles.item}>
                  <div className={styles.am}>10:00 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName2}>
                    <div className={styles.heading4}>Music</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>10:00 - 11:00 am</div>
                  </div>
                  <div className={styles.pseudo6} />
                </div>
              </div>
              <div className={styles.divupcomeEventDate1}>
                <div className={styles.pseudo3} />
                <div className={styles.heading35}>
                  <div className={styles.jan}>14 Jan</div>
                </div>
                <div className={styles.span1}>
                  <div className={styles.div7}></div>
                </div>
              </div>
              <div className={styles.divcalendarDetails3}>
                <div className={styles.item}>
                  <div className={styles.am}>08:00 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName2}>
                    <div className={styles.heading4}>Social Studies</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>08:00 - 09:30 am</div>
                  </div>
                  <div className={styles.pseudo8} />
                </div>
              </div>
              <div className={styles.divcalendarDetails4}>
                <div className={styles.item}>
                  <div className={styles.am}>09:30 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName}>
                    <div className={styles.heading4}>Maths</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>09:30 - 10:00 am</div>
                  </div>
                  <div className={styles.pseudo4} />
                </div>
              </div>
              <div className={styles.divcalendarDetails5}>
                <div className={styles.item}>
                  <div className={styles.am}>10:00 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName}>
                    <div className={styles.heading4}>Science</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>10:00 - 11:00 am</div>
                  </div>
                  <div className={styles.pseudo10} />
                </div>
              </div>
              <div className={styles.divcalendarDetails6}>
                <div className={styles.item}>
                  <div className={styles.am}>11:00 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName2}>
                    <div className={styles.heading4}>Music</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>11:00 - 12:30 am</div>
                  </div>
                  <div className={styles.pseudo8} />
                </div>
              </div>
              <div className={styles.divcalendarDetails7}>
                <div className={styles.item}>
                  <div className={styles.am}>11:30 am</div>
                </div>
                <div className={styles.divcalendarBox}>
                  <div className={styles.divcalandarEventName2}>
                    <div className={styles.heading4}>Social Studies</div>
                    <div className={styles.heading5}>Lorem ipsum sit amet</div>
                  </div>
                  <div className={styles.span2}>
                    <div className={styles.am1}>11:30 - 12:30 am</div>
                  </div>
                  <div className={styles.pseudo8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.oticSuiteTeachersDashboardChild} />
      <div className={styles.oticSuiteTeachersDashboardItem} />
      <div className={styles.oticSuiteTeachersDashboardInner} />
      <img
        className={styles.svgjspath1124Icon}
        alt=""
        src="/svgjspath1124.svg"
      />
      <img
        className={styles.svgjspath1110Icon}
        alt=""
        src="/svgjspath1110.svg"
      />
      <div className={styles.teachingTrend}>Teaching trend</div>
      <div className={styles.lessonsDoneWrapper}>
        <div className={styles.lessonsDone}>Lessons Done</div>
      </div>
      <div className={styles.lessonsLeftWrapper}>
        <div className={styles.lessonsDone}>Lessons Left</div>
      </div>
      <div className={styles.divcard5}>
        <div className={styles.divcardHeader}>
          <div className={styles.heading58}>
            <div className={styles.teachingHistory}>Teaching History</div>
          </div>
          <div className={styles.list1}>
            <div className={styles.itemLink}>
              <div className={styles.div9}></div>
            </div>
          </div>
        </div>
        <div className={styles.divcardBody1}>
          <div className={styles.divteachingCard}>
            <div className={styles.list2}>
              <div className={styles.item2}>
                <div className={styles.divdolorActivity}>
                  <div className={styles.linkMathematics}>Social studies</div>
                  <div className={styles.list3}>
                    <div className={styles.item3}>
                      <div className={styles.div10}></div>
                      <div className={styles.september52022}>
                        September 5, 2022
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.completed}>|</div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.div10}></div>
                      <div className={styles.am930}>
                        08:00 am - 9:30 am (90 Minutes)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divactivityBtns}>
                  <div className={styles.button}>
                    <div className={styles.completed}>Completed</div>
                  </div>
                </div>
                <div className={styles.pseudo13} />
                <div className={styles.pseudo14} />
              </div>
              <div className={styles.item6}>
                <div className={styles.divdolorActivity}>
                  <div className={styles.linkMathematics}>Maths</div>
                  <div className={styles.list3}>
                    <div className={styles.item3}>
                      <div className={styles.div10}></div>
                      <div className={styles.september52022}>
                        September 5, 2022
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.completed}>|</div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.div10}></div>
                      <div className={styles.am930}>
                        02:00 am - 3:30 am (90 Minutes)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divactivityBtns}>
                  <div className={styles.button1}>
                    <div className={styles.completed}>In Progress</div>
                  </div>
                </div>
                <div className={styles.pseudo13} />
                <div className={styles.pseudo14} />
              </div>
              <div className={styles.item10}>
                <div className={styles.divdolorActivity}>
                  <div className={styles.linkMathematics}>Science</div>
                  <div className={styles.list3}>
                    <div className={styles.item3}>
                      <div className={styles.div10}></div>
                      <div className={styles.september52022}>
                        September 5, 2022
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.completed}>|</div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.div10}></div>
                      <div className={styles.am930}>
                        08:00 am - 9:30 am (90 Minutes)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divactivityBtns}>
                  <div className={styles.button2}>
                    <div className={styles.completed}>In Progress</div>
                  </div>
                </div>
                <div className={styles.pseudo13} />
                <div className={styles.pseudo14} />
              </div>
              <div className={styles.item6}>
                <div className={styles.divdolorActivity}>
                  <div className={styles.linkMathematics}>Maths</div>
                  <div className={styles.list3}>
                    <div className={styles.item3}>
                      <div className={styles.div10}></div>
                      <div className={styles.september52022}>
                        September 5, 2022
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.completed}>|</div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.div10}></div>
                      <div className={styles.am930}>
                        02:00 am - 3:30 am (90 Minutes)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divactivityBtns}>
                  <div className={styles.button1}>
                    <div className={styles.completed}>In Progress</div>
                  </div>
                </div>
                <div className={styles.pseudo13} />
                <div className={styles.pseudo14} />
              </div>
              <div className={styles.item6}>
                <div className={styles.divdolorActivity}>
                  <div className={styles.linkMathematics}>Maths</div>
                  <div className={styles.list3}>
                    <div className={styles.item3}>
                      <div className={styles.div10}></div>
                      <div className={styles.september52022}>
                        September 5, 2022
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.completed}>|</div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.div10}></div>
                      <div className={styles.am930}>
                        02:00 am - 3:30 am (90 Minutes)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divactivityBtns}>
                  <div className={styles.button1}>
                    <div className={styles.completed}>In Progress</div>
                  </div>
                </div>
                <div className={styles.pseudo13} />
                <div className={styles.pseudo14} />
              </div>
              <div className={styles.item6}>
                <div className={styles.divdolorActivity}>
                  <div className={styles.linkMathematics}>Maths</div>
                  <div className={styles.list3}>
                    <div className={styles.item3}>
                      <div className={styles.div10}></div>
                      <div className={styles.september52022}>
                        September 5, 2022
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.completed}>|</div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.div10}></div>
                      <div className={styles.am930}>
                        02:00 am - 3:30 am (90 Minutes)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divactivityBtns}>
                  <div className={styles.button1}>
                    <div className={styles.completed}>In Progress</div>
                  </div>
                </div>
                <div className={styles.pseudo13} />
                <div className={styles.pseudo14} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divcard6}>
        <div className={styles.divcardHeader1}>
          <div className={styles.divrow1}>
            <div className={styles.divcol6}>
              <div className={styles.teachingHistory}>Upcoming Lesson</div>
            </div>
            <div className={styles.divcol61}>
              <div className={styles.completed}>View All Courses</div>
            </div>
          </div>
        </div>
        <div className={styles.divpt3}>
          <div className={styles.divtableResponsive}>
            <div className={styles.tableBody}>
              <LessonCard
                lessonTitle="Lessons 2"
                lessonDescription="1.2 Ipsuum dolor"
                timeSlotLabel="08:00 - 09:00 am"
              />
              <LessonCard
                lessonTitle="Lessons 5"
                lessonDescription="1.3 Ipsuum dolor"
                timeSlotLabel="02:00 - 04:00 am"
                propHeight="calc(100% - 33px)"
                propTop="calc(50% - 48.75px)"
                propTop1="calc(50% + 1.25px)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divsidebarWrapper}>
        <div className={styles.divsidebar}>
          <div className={styles.divslimscrolldiv}>
            <div className={styles.divsidebarInner}>
              <div className={styles.link3}>
                <div className={styles.ifeatherGrid}>
                  <div className={styles.students}></div>
                </div>
                <div className={styles.dashboard}>Dashboard</div>
                <div className={styles.span11} />
                <div className={styles.pseudo25} />
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
                <div className={styles.itemLink1}>
                  <div className={styles.ifas}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanWrapper}>
                    <div className={styles.span12}>
                      <div className={styles.students}>Students</div>
                    </div>
                  </div>
                  <div className={styles.pseudo26}>
                    <div className={styles.am1}></div>
                  </div>
                </div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas1}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span13}>
                    <div className={styles.students}>Departments</div>
                  </div>
                  <div className={styles.pseudo26}>
                    <div className={styles.am1}></div>
                  </div>
                </div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas2}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanContainer}>
                    <div className={styles.span14}>
                      <div className={styles.students}>Subects</div>
                    </div>
                  </div>
                  <div className={styles.pseudo26}>
                    <div className={styles.am1}></div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Management</div>
                <div className={styles.itemLink4}>
                  <div className={styles.ifas3}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span12}>
                      <div className={styles.students}>Exam list</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <div className={styles.ifas4}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span12}>
                      <div className={styles.students}>Time Table</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemLink6}>
                  <div className={styles.ifas4}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.spanFrame}>
                    <div className={styles.span12}>
                      <div className={styles.students}>Settings</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemManagement}>Pages</div>
                <div className={styles.itemLink1}>
                  <div className={styles.ifas2}>
                    <div className={styles.students}></div>
                  </div>
                  <div className={styles.span18}>
                    <div className={styles.tableBody}>
                      <div className={styles.item}>
                        <div className={styles.students}>Authentication</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.pseudo29}>
                    <div className={styles.am1}></div>
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

export default OticSuiteTeachersDashboard;
