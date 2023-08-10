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
  GridValidRowModel,
} from "@mui/x-data-grid";

import { ModeEdit } from "@mui/icons-material";

import { Button } from "@mui/material";
import ProfileForm from "./ProfileForm";
import { useRouter } from "next/router";

const UpdateProfilePage: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;
  const actualId = parseInt(id as string);

  return <ProfileForm id={actualId} />;
};

export default UpdateProfilePage;
