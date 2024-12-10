import { FC } from "react";
import AppSidebar from "./sidebars/AppSidebar";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../configartion/CustomTheme";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppSidebar />
      <Box>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout;
