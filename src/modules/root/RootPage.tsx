import { Page, Layout } from "@/shared/components";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/shared/database/DbContext";
import {
  DataGrid,
  GridAddIcon,
  GridColDef,
  GridDeleteIcon,
  GridMenuIcon,
  GridRemoveIcon,
  GridRowsProp,
  GridToolbar,
  GridValidRowModel,
} from "@mui/x-data-grid";

import { ModeEdit } from "@mui/icons-material";

import { Button } from "@mui/material";
import { useRouter } from "next/router";

const RootPage: React.FC = () => {
  const allItems = useLiveQuery(() => db.profiles.toArray(), []) ?? [];

  const router = useRouter();
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id #", width: 150 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    {
      field: "Update",
      renderCell: (params) => {
        return (
          <Button
            onClick={async () => {
              var currentValue: Entities.Profile = params.row;
              router.push(`/root/${currentValue.id}`);
            }}
            startIcon={<ModeEdit />}
          >
            Modify
          </Button>
        );
      },
    },
    {
      field: "Delete",
      renderCell: (params) => {
        return (
          <Button
            onClick={async () => {
              var currentValue: Entities.Profile = params.row;
              await db.profiles.delete(currentValue.id ?? 0);
            }}
            startIcon={<GridDeleteIcon />}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <Page title="pwa-demo-app">
      <Layout>
        <DataGrid  density="compact" columns={columns} rows={allItems} />
      </Layout>
    </Page>
  );
};

export default RootPage;
