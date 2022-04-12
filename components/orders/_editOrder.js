import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setEditOpen } from "../../store/modelSlice";
import { useFormik } from "formik";
import { bookSchema } from "../../schemas/bookSchema";
import { useState, useEffect } from "react";
import { Autocomplete } from "@mui/material";

export default function _editOrder({ id }) {
  const [initialValues, setInitialValues] = useState({
    Title: "",
    Author: "",
    CategoryName: "",
    Publisher: "",
    Price: "",
    Cost: "",
    Units: "",
    Description: "",
    Image: null,
  });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Title: "",
      Author: "",
      CategoryName: "",
      Publisher: "",
      Price: "",
      Cost: "",
      Units: "",
      Description: "",
      Image: null,
    },
    validationSchema: bookSchema,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        margin: " auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: 1,
      }}
    >
      <Typography textAlign={"left"} variant="h5" component="h5">
        Change Order Status
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxHeight: 400,
          width: 1,
          margin: "1rem auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            overflow: "auto",
            margin: "auto",
            width: 1,
            padding: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="h6">
              Order Id
            </Typography>
            <Typography variant="body1" component="h6">
              2
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="h6">
              Date
            </Typography>
            <Typography variant="body1" component="h6">
              2
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="h6">
              Customer Name
            </Typography>
            <Typography variant="body1" component="h6">
              customer
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="h6">
              Total Price
            </Typography>
            <Typography variant="body1" component="h6">
              2000
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="h6">
              Books Ordered
            </Typography>
            <Typography variant="body1" component="h6">
              2
            </Typography>
          </Box>

          <Autocomplete
            options={["Completed", "Cancelled"]}
            //   getOptionLabel
            id="order-status"
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Order Status"
                name="OrderStatus"
                variant="standard"
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            type="submit"
            // disabled={!isChanged()}
          >
            Change Status
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => dispatch(setEditOpen(false))}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
