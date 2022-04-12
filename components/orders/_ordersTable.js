import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import _modelWithButton from "../_modelWithButton";
import _editOrder from "./_editOrder";
import { setEditOpen } from "../../store/modelSlice";
import { useSelector } from "react-redux";

export default function _ordersTable() {
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
  const editModel = models.editOpen;

  return (
    <React.Fragment>
      <Box sx={{ margin: "1rem auto", width: "90%" }}>
        <TextField
          id="standard-basic"
          label="Search For Orders"
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
            justifyContent: "flex-end",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <_modelWithButton
            buttonColor={"secondary"}
            buttonText="Change Order Status"
            buttonIcon={<EditIcon />}
            setOpen={setEditOpen}
            open={editModel}
          >
            <_editOrder id={1} />
          </_modelWithButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}
