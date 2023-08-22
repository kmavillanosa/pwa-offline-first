import { Layout, Page } from "@/shared/components";
import { db } from "@/shared/database/DbContext";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import ReportTemplate from "@/shared/templates/ReportTemplate";
import { renderToStaticMarkup } from "react-dom/server";
import { PDFDownloadLink } from "@react-pdf/renderer";

const PrintingPage: React.FC = () => {
  const allItems = useLiveQuery(() => db.tranx.toArray(), []) ?? [];

  const [selectedValue, SetSelectedValue] = useState<Entities.Transaction>();

  const queryValue = async (id: number) => {
    return await db.tranx.where({ id: id }).first();
  };

  const handleChange = (event: SelectChangeEvent) => {
    queryValue(parseInt(event.target.value as string)).then((resp) =>
      SetSelectedValue(resp)
    );
  };

  return (
    <Page title="Printing Page">
      <Layout>
        <FormControl fullWidth>
          <InputLabel id="sender_id">Sender</InputLabel>
          <Select
            labelId="sender_id"
            label="From Sender"
            onChange={handleChange}
          >
            {allItems.map((item, idx) => (
              <MenuItem key={idx} value={item.id}>
                {item.sender_name}
              </MenuItem>
            ))}
          </Select>

          {!selectedValue ? (
            ""
          ) : (
            <PDFViewer style={{
              margin : "10px"
            }} height={500}>
              <ReportTemplate data={selectedValue} />
            </PDFViewer>
          )}

          <Box margin={1}>
            {!selectedValue ? (
              <p>Please select sender</p>
            ) : (
              <>
                <Box margin={1}>
                  <PDFDownloadLink
                    document={<ReportTemplate data={selectedValue} />}
                    fileName={`tranx-${selectedValue.sender_name}.pdf`}
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        "Loading document..."
                      ) : (
                        <Button style={{ margin: 1 }} variant="contained">
                          Print Me
                        </Button>
                      )
                    }
                  </PDFDownloadLink>
                  <Button
                    style={{ margin: 1 }}
                    variant="contained"
                    onClick={() => SetSelectedValue(undefined)}
                  >
                    Reset
                  </Button>
                </Box>
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(selectedValue as Entities.Transaction).map(
                      (field) => (
                        <tr key={field}>
                          <td>{field}</td>
                          <td>
                            {selectedValue[field as keyof Entities.Transaction]}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </>
            )}
          </Box>
        </FormControl>
      </Layout>
    </Page>
  );
};

export default PrintingPage;
