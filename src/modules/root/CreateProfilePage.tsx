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

const CreateProfilePage: React.FC = () => {
  return <ProfileForm />
};

export default CreateProfilePage;
