import { FunctionComponent } from "react";
import styles from "./FormContainer6.module.css";
const FormContainer6: FunctionComponent = () => {
  return (
    <div className={styles.divrow}>
      <div className={styles.divcolSm4}>
        <div className={styles.link}>
          <div className={styles.div}>+</div>
          <div className={styles.addRoles}> Add Roles</div>
        </div>
        <div className={styles.list}>
          <div className={styles.itemLink}>
            <div className={styles.administrator}>Administrator</div>
          </div>
          <div className={styles.itemLink1}>Teachers</div>
          <div className={styles.itemLink2}>Stuff</div>
        </div>
      </div>
      <div className={styles.divcolSm8}>
        <div className={styles.heading6}>Module Access</div>
        <div className={styles.list1}>
          <div className={styles.item}>
            <div className={styles.admin}>Admin</div>
            <div className={styles.label}>
              <div className={styles.pseudo} />
            </div>
          </div>
          <div className={styles.item1}>
            <div className={styles.teachers}>Teachers</div>
            <div className={styles.label1}>
              <div className={styles.pseudo1} />
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.teachers}>Stuff</div>
            <div className={styles.label1}>
              <div className={styles.pseudo1} />
            </div>
          </div>
        </div>
        <div className={styles.divtableResponsive}>
          <div className={styles.table}>
            <div className={styles.headerRow}>
              <div className={styles.cell}>
                <b className={styles.administrator}>Module Permission</b>
              </div>
              <div className={styles.cell1}>
                <b className={styles.administrator}>Read</b>
              </div>
              <div className={styles.cell2}>
                <b className={styles.administrator}>Write</b>
              </div>
              <div className={styles.cell3}>
                <b className={styles.administrator}>Create</b>
              </div>
              <div className={styles.cell4}>
                <b className={styles.administrator}>Delete</b>
              </div>
              <div className={styles.cell5}>
                <b className={styles.administrator}>Import</b>
              </div>
              <div className={styles.cell6}>
                <b className={styles.administrator}>Export</b>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.row}>
                <div className={styles.data}>
                  <div className={styles.administrator}>Admin</div>
                </div>
                <div className={styles.data1}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data2}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data3}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data4}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data5}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data6}>
                  <div className={styles.input} />
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.data7}>
                  <div className={styles.administrator}>Teachers</div>
                </div>
                <div className={styles.data8}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data9}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data10}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data11}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data12}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data13}>
                  <div className={styles.input} />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.data14}>
                  <div className={styles.administrator}>Stuff</div>
                </div>
                <div className={styles.data1}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data2}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data3}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data4}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data5}>
                  <div className={styles.input} />
                </div>
                <div className={styles.data6}>
                  <div className={styles.input} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer6;
