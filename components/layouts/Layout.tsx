import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import Navbar from "../ui/Navbar";
import SideBar from "../ui/SideBar";

interface props {
  title?: string;
}

const Layout: FC<props> = ({ title = "openJira app", children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar/>
      <SideBar/>
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
