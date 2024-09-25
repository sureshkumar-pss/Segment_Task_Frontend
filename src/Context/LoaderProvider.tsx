import { createContext, Fragment, useContext, useState } from "react";

// Import MUI components
// Import MUI Icons
// Import External Libraries
// Import constants, functions and services
// Import Custom Styles
// Import Customized Components
import Loader from "../components/Loader";
// import Loader from "../components/Loader/index";
// import Loader from "components/Loader";
// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

//Initializing a Context by assigning to a variable
const LoaderContext: any = createContext(null);

/**
 * Provider component for managing loading state.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode | React.ReactElement} props.children - The children components.
 * @returns {JSX.Element} The rendered component.
 */
const LoaderProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactElement;
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false); //State for loader

  //State for showing loader
  function showLoader() {
    setIsLoading(true);
  }

  //State for hiding loader
  function hideLoader() {
    setIsLoading(false);
  }

  return (
    <Fragment>
      {/* Loader component */}
      {isLoading && <Loader />}

      {/* Loader Context Provider */}
      <LoaderContext.Provider value={{ showLoader, hideLoader, isLoading }}>
        {children}
      </LoaderContext.Provider>
    </Fragment>
  );
};

//Custom hooks for loader context
function useLoader() {
  try {
    return useContext(LoaderContext);
  } catch (error) {
    // Handle error here, such as logging or displaying an error message
    console.error("Error using Loader:", error);
    // Return a default value or fallback behavior if necessary
    return null;
  }
}

export { useLoader, LoaderProvider };
