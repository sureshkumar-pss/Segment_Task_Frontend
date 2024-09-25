// Import MUI components
import Backdrop from "@mui/material/Backdrop";
// Import MUI Icons
// Import External Libraries
import BeatLoader from "react-spinners/BeatLoader";
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

const override = {
  display: "block",
  margin: "0 auto",
};
/**
 * Loader component represents a loading spinner.
 * @returns {JSX.Element} Loader component
 */
const Loader = () => {
  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: "999" }} open={true}>
        <BeatLoader
          color={"#1CB280"}
          loading={true}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Backdrop>
    </>
  );
};

export default Loader;
