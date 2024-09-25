import { useState } from "react";
// Import MUI components
import {
  Drawer,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Grid,
  Autocomplete,
} from "@mui/material";
// Import MUI Icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Remove as RemoveIcon } from "@mui/icons-material";
// Import External Libraries
import axios from "axios";
// Import constants, functions and services
import { useSegment } from "./SegmentContext";
// Import Custom Styles
// Import Customized Components

// Global Scope Variable and Constant Declarations
// Component Input Props Declaration

/**
 * Interface for defining the schema structure
 * @interface
 */
interface Schema {
  label: string;
  value: string;
}
/**
 * Interface for defining the props of the SegmentDrawer component
 * @interface
 */
interface Props {
  open: boolean;
}
// Global Scope Variable and Constant Declarations
const list: Schema[] = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];
/**
 * SegmentDrawer component responsible for managing segments
 * @param {Props} props - Props for the SegmentDrawer component
 * @returns {React.Component} - SegmentDrawer component
 */
const SegmentDrawer: React.FC<Props> = ({ open }) => {
  const { setOpen }: any = useSegment();
  // const { showLoader, hideLoader }: any = useLoader();
  // State variables
  const [options, setoptions] = useState<Schema[]>(list);
  const [inputValue, setInputValue] = useState<string>("");
  const [segmentList, setSegmentList] = useState<Schema[]>([]);
  const [value, setValue] = useState<Schema | null>(null);
  const [text, setText] = useState<string>("");
  /**
   * Handles click event on a schema item
   * @param {Schema} item - The selected schema item
   * @param {number} index - Index of the item in the list
   */
  const handleClick = (item: Schema, index: number) => {
    const updatedArray = [...segmentList];
    updatedArray.splice(index, 1);
    setSegmentList(updatedArray);
    setoptions([...options, item]);
  };
  /**
   * Handles addition of a new schema
   */ /**
   * Handles change event on segment name input field
   * @param {React.ChangeEvent<HTMLInputElement>} e - Event object
   */
  const handleAddSchema = () => {
    if (inputValue !== "") {
      setSegmentList([...segmentList, { ...(value as any) }]);
      const updatedOptions = options.filter(
        (opt) => opt.value !== value?.value
      );
      setoptions(updatedOptions);
      setValue(null);
    }
  };
  /**
   * Handles change event on segment name input field
   * @param {React.ChangeEvent<HTMLInputElement>} e - Event object
   */
  const handleNameSegmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  /**
   * Handles edit of a segment
   * @param {Schema | null} newValue - New value for the schema
   * @param {Schema} _item - The selected schema item
   * @param {number} index - Index of the item in the list
   */
  const handleEdit = (
    newValue: Schema | null,
    _item: Schema,
    index: number
  ) => {
    if (newValue) {
      const updatedArray = [...segmentList];
      updatedArray[index] = newValue;
      const updatedOptions = list.filter(
        (opt) => !updatedArray.find((a) => a.value === opt.value)
      );
      setSegmentList(updatedArray);
      setoptions(updatedOptions);
    }
  };

  /**
   * Makes an API request for segment
   */
   function SegmentApiRequest() {
    const postData: any = {
      segment_name: text,
      schema: segmentList,
    };
    if(postData.segment_name &&  postData.schema?.length > 0)
    axios
      .post(
        "https://webhook.site/685c118a-59b0-40e3-b7aa-4b24b96cb800",
        postData
      )
      .then( (response: any)=> {
        console.log("🚀 ~ response:", response);
      })
      .catch( (error: any)=> {
        // hideLoader();
        console.log("🚀 ~ postUser ~ error:", error);
      })
      .finally(() => {
        // hideLoader(); // Hide loader after promise settles
      });
  }
  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick_Cancel();
    SegmentApiRequest();
  };
  /**
   * Handles click event for cancel button
   */
  const handleClick_Cancel = () => {
    setOpen(false);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      elevation={0}
      PaperProps={{ sx: { width: { md: "38vw", xl: "30vw" } } }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={customStyles.scrollBar}>
          <Box sx={{ backgroundColor: "#08CEB6", p: 1.5 }}>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
              <ArrowBackIosIcon
                style={{ fontSize: "18px", color: "#FFFF", cursor: "pointer" }}
                onClick={handleClick_Cancel}
              />

              <Typography sx={{ fontSize: "18px", color: "#FFFF" }}>
                Saving Segment
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ p: 2 }}>
            <Stack spacing={2}>
              <Typography sx={customStyles.selectTab}>
                Enter the Name of the segment
              </Typography>
              <TextField
                size="small"
                sx={{ width: "100%" }}
                placeholder="Name of the segment"
                onChange={handleNameSegmentChange}
              />
              <Typography sx={customStyles.selectTab}>
                To save your segment, you need to add the schemas to build the
                query
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  justifyContent: "flex-end",

                  m: 1,
                }}
              >
                {/* Stack for user traits */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Box
                    style={{
                      backgroundColor: "#04DF30",
                      ...customStyles.indicator,
                    }}
                  />
                  <Typography sx={customStyles.Traits}>
                    - User Traits
                  </Typography>
                </Stack>
                {/* Stack for group traits */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Box
                    style={{
                      backgroundColor: "red",
                      ...customStyles.indicator,
                    }}
                  />
                  <Typography sx={customStyles.Traits}>
                    - Group Traits
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Grid container spacing={1}>
                  {/* Mapping through segment schemas */}
                  {segmentList.map((item: any, index) => (
                    <Grid item key={index} xs={12}>
                      <Grid sx={{ alignItems: "center" }} container spacing={1}>
                        <Grid item xs={1}>
                          <Box
                            style={{
                              backgroundColor: "#04DF30",
                              ...customStyles.indicator,
                            }}
                          ></Box>
                        </Grid>
                        {/* Autocomplete field for selecting schema */}
                        <Grid item xs={9}>
                          <Autocomplete
                            size="small"
                            value={item}
                            onChange={(_event, newValue) =>
                              handleEdit(newValue, item, index)
                            }
                            disablePortal
                            options={options}
                            renderInput={(params) => (
                              <TextField {...params} size="small" />
                            )}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          {/* Button to remove schema */}
                          <Button onClick={() => handleClick(item, index)}>
                            <RemoveIcon />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid container sx={{ alignItems: "center" }} spacing={1}>
                  <Grid item xs={1}>
                    <Box
                      style={{
                        backgroundColor: "#888E89",
                        ...customStyles.indicator,
                      }}
                    ></Box>
                  </Grid>
                  <Grid item xs={9}>
                    {/* Autocomplete field for selecting schema */}
                    <Autocomplete
                      value={value}
                      onChange={(_event, newValue) => setValue(newValue)}
                      inputValue={inputValue}
                      onInputChange={(_event, newInputValue) =>
                        setInputValue(newInputValue)
                      }
                      options={options}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          // sx={{ width: "80%" }}
                          placeholder="Add schema to segment"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Stack>
              {/* Button to Add schema */}
              <Typography sx={customStyles.addText} onClick={handleAddSchema}>
                + Add new schema
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ pt: 1, px: 1, borderTop: "1px solid #ccc" }}>
          <Stack direction="row" spacing={1}>
            {/* Button to Save schema */}
            <Button
              type="submit"
              sx={{
                ...customStyles.buttonprops,
              }}
            >
              Save the Segment
            </Button>
            <Button
              onClick={handleClick_Cancel}
              variant="outlined"
              sx={{
                ...customStyles.buttonprops,
                color: "red",
                background: "#FFFFFF",border:"1px solid #08CEB6"
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </form>
    </Drawer>
  );
};

const customStyles = {
  selectTab: {
    fontWeight: "500",
    textTransform: "none",
    fontSize: "14px",
    color: "#090909",
  },
  Traits: {
    fontWeight: "500",
    textTransform: "none",
    fontSize: "13px",
    color: "#090909",
  },

  scrollBar: {
    height: "90vh",
    overflowY: "auto",
    position: "relative",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  addText: {
    mt: 2,
    fontSize: "0.9rem",
    color: "#07A18E",
    cursor: "pointer",
    textDecoration: "underline",
  },
  buttonprops: {
    background: "#08CEB6",
    textTransform: "capitalize",
    color: "#ffff",
    fontWeight: "600",fontSize:"0.8rem"
  },
  indicator: {
    height: 13,
    width: 13,
    borderRadius: "50%",
  },
};

export default SegmentDrawer;
