import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import _modelWithButton from "./_modelWithButton";

import { useSelector } from "react-redux";

export default function _customersTable() {
  const VISIBLE_FIELDS = [     
    "name",
    "rating",
    "country",
    "dateCreated",
    "isAdmin",
  ];
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  const models = useSelector((state) => state.model);
  const createModel = models.createOpen;
  const editModel = models.editOpen;
  const deleteModel = models.deleteOpen;

  return (
    <React.Fragment>
      <Box sx={{ margin: "1rem auto", width: "90%" }}>
        <TextField
          id="standard-basic"
          label="Search Sales"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box
        sx={{
          height: 500,
          maxHeight: 500,
          margin: "1rem auto",
          width: "90%",
        }}
      >
        <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
      </Box>
      <Box
        sx={{
          margin: "1rem auto",
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 1,
            flexGrow: 1,
          }}
        >
        </Box>
     
      </Box>
    </React.Fragment>
  );
}
