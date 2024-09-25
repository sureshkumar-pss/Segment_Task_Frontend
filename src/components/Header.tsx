// Import MUI components
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
// Import MUI Icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * Header component represents the top navigation bar.
 * It includes a back arrow icon and a title.
 * @returns {JSX.Element} Header component
 */
export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#08CEB6",
        py: 2,
        boxShadow: "0",
      }}
    >
      <Toolbar variant="dense">
        <ArrowBackIosIcon fontSize="small" />

        <Typography variant="h6" color="inherit">
          View Audience
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
