// Import MUI components
// Import MUI Icons
import { Box } from "@mui/material";
// Import External Libraries
import { Outlet } from "react-router-dom";
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
import Header from "../components/Header";
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration
/**
 * AppLayout component serves as a layout for the entire application.
 * It includes a Header component and renders child components.
 */
const AppLayout = () => {
  return (
    <Box>
      {/* Header component */}
      <Header />

      {/* Main component */}
      <Box
        component="main"
        sx={{
          bgcolor: "#white",
          //   p: 2,
          minHeight: "100vh",
        }}
      >
        {/* Rendering of child components */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
