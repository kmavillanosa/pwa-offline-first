import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({ family: "Courier New", src: "g" });

// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: "12px",
  },
  text: {
    fontFamily: "Courier New",
  },
});

interface ReportTemplate {
  data: Entities.Transaction;
}
const ReportTemplate: React.FC<ReportTemplate> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        style={{
          textAlign: "center",
        }}
      >
        <Text>Branch Tel No : {data.telNo}</Text>
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          {data.tranx_code}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
          }}
        >
          {data.tranx_date}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
          }}
        >
          {data.tranx_timestamp}
        </Text>
      </View>

      <View>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          {data.tranx_code}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
          }}
        >
          {data.code_1}
        </Text>
      </View>
      <View>
        <Text
          style={{
            alignSelf: "flex-start",
          }}
        >
          {data.receiver_name}
        </Text>
      </View>
      <View>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Test Document
        </Text>
      </View>

      <View>
        <Text>{data.amount_humanized}</Text>
      </View>

      <View>
        <Text
          style={{
            alignSelf: "flex-end",
          }}
        >
          {data.fee_total}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
          }}
        >
          {data.fee_breakdown}
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
          }}
        >
          {data.amount_transferred}
        </Text>
      </View>

      <View>
        <Text style={{ textAlign: "left" }}>{data.receiver_name}</Text>
        <Text style={{ textAlign: "right" }}>{data.sender_name}</Text>
        <Text style={{ textAlign: "right" }}>{data.amount_transferred}</Text>
      </View>

      <View style={{ textAlign: "left" }}>
        <Text>{data.code_2}</Text>
      </View>

      <View style={{ textAlign: "right" }}>
        <Text>{`${data.tranx_date} ${data.tranx_timestamp}`}</Text>
      </View>
    </Page>
  </Document>
);

export default ReportTemplate;
