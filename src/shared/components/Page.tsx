import { Adb } from "@mui/icons-material";
import { AppBar, Toolbar, Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  title : string
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} | kmavillanosa`}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
