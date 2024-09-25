// Import MUI components
import { Stack, Button } from "@mui/material";
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
import { useSegment } from "./SegmentContext";
// Import Custom Styles
// Import Customized Components

import SegmentDrawer from "./SegmentDrawer";
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * Segment component responsible for rendering and managing segment creation.
 * @returns {JSX.Element} Segment component
 */
const Segment = () => {
  // State to manage the open state of the segment
  const { setOpen, open }: any = useSegment();

  return (
    <Stack
      direction={"row"}
      sx={{ alignItems: "center", height: "80vh", justifyContent: "center" }}
    >
      {/* Button to save segment */}
      <Button
        sx={{
          backgroundColor: "#5CBB91",
          color: "white",
          "&:hover": {
            backgroundColor: "#5CBB91",
          },
        }}
        onClick={() => setOpen(true)}
      >
        Save segment
      </Button>
      {/* Render SegmentDrawer component if 'open' is true */}
      {open && <SegmentDrawer open={open} />}
    </Stack>
  );
};

export default Segment;
