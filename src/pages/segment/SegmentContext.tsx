import { createContext, useContext, useState } from "react";
// Import MUI components
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

// Initializing the context here
const SegmentContext: any = createContext(null);
/**
 * Provider component for SegmentContext.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider
 * @returns {JSX.Element} SegmentContextProvider component
 */
const SegmentContextProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <SegmentContext.Provider value={{ open, setOpen }}>
      {children}
    </SegmentContext.Provider>
  );
};

/**
 * Custom hook to consume SegmentContext.
 * @returns {object | null} Context value or null if there's an error
 */
function useSegment() {
  try {
    return useContext(SegmentContext);
  } catch (error) {
    console.log("Error using Coupons:", error);
    return null;
  }
}

export { useSegment, SegmentContextProvider };
