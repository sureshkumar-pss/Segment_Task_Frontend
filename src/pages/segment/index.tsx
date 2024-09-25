// Import MUI components
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
import { SegmentContextProvider } from "./SegmentContext";
// Import Custom Styles
// Import Customized Components
import Segment from "./Segment";
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * Main index component to initialize the Segment component wrapped in the SegmentContextProvider.
 * @returns {JSX.Element} Index component
 */
const index = () => {
  return (
    <SegmentContextProvider>
      {/* Render the Segment component */}
      <Segment />
    </SegmentContextProvider>
  );
};

export default index;
