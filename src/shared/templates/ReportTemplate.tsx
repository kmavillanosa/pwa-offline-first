import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Courier New",
  src: `/fonts/courier-new.ttf`,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: "7",
    fontFamily: "Courier New",
    flexDirection: "row",
    backgroundColor: "#fff",
    // padding: 20,
    padding: 30,
  },
  column: {
    flex: 1,
    // marginLeft: 10,
    // marginRight: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 5,
  },
  stack: {
    position: "relative",
  },
  stackItem: {
    // position: "absolute",
    top: 0,
    left: 0,
  },
  strong: {
    fontWeight: "bold",
  },
  padBigTop: {
    marginTop: "50px",
  },
  padTop: {
    marginTop: "10px",
  },
  flexBetween: {
    flex: "between",
  },
  between: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  right: {
    alignSelf: "flex-end",
  },
  left: {
    alignSelf: "flex-start",
  },
  center: {
    alignSelf: "center",
  },
});

interface ReportTemplate {
  data: Entities.Transaction;
}
const ReportTemplate: React.FC<ReportTemplate> = ({ data }) => (
  <Document>
    <Page size="A6" style={styles.page}>
      <View style={styles.column}>
        <View style={[styles.center, styles.padBigTop]}>
          <Text>Branch Tel No :{data.telNo}</Text>
        </View>
        <View style={[styles.between]}>
          <Text style={[styles.center, styles.padBigTop, styles.strong]}>
            <strong>{data.tranx_code}</strong>
          </Text>
          <View style={[styles.stack, styles.right]}>
            <Text>{data.tranx_date}</Text>
            <Text>{data.tranx_timestamp}</Text>
          </View>
        </View>
        <View style={[styles.flexBetween, styles.padTop]}>
          <Text style={styles.center}>{data.tranx_code}</Text>
          <Text style={styles.right}>{data.code_1}</Text>
        </View>
        <View style={styles.padTop}>
          <Text style={styles.center}>{data.receiver_name}</Text>
        </View>

        <View>
          <Text style={[styles.padTop, styles.center]}>Test Document</Text>
        </View>

        <View style={[styles.padTop]}>
          <Text>{data.amount_humanized}</Text>
        </View>

        <View>
          <Text style={styles.right}>{data.fee_total}</Text>
          <Text style={styles.right}>{data.fee_breakdown}</Text>
          <Text style={styles.right}>{data.amount_transferred}</Text>
        </View>

        <View style={[styles.flexBetween, styles.padTop]}>
          <Text>{data.receiver_name}</Text>
          <Text style={styles.right}>{data.sender_name}</Text>
        </View>


        <View style={[styles.padTop]}>
          <Text>{data.code_2}</Text>
        </View>

        <View style={[styles.padTop, styles.right]}>
          <Text>{`${data.tranx_date} ${data.tranx_timestamp}`}</Text>
        </View>
      </View>
      {/* <View style={styles.column}></View> */}
    </Page>
  </Document>
);

export default ReportTemplate;
