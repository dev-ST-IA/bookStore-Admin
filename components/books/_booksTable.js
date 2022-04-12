import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import _modelWithButton from "../_modelWithButton";
import _addNewBook from "./_addNewBook";
import _editBook from "./_editBook";
import _deleteBook from "./_deleteBook";
import {
  setCreateOpen,
  setEditOpen,
  setDeleteOpen,
} from "../../store/modelSlice";
import { useSelector } from "react-redux";

export default function _booksTable() {
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
            justifyContent: "flex-start",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <_modelWithButton
            buttonColor={"secondary"}
            buttonText="Edit Book"
            buttonIcon={<EditIcon />}
            setOpen={setEditOpen}
            open={editModel}
          >
            <_editBook id={1} />
          </_modelWithButton>

          <_modelWithButton
            buttonColor={"error"}
            buttonText="Delete Book"
            buttonIcon={<DeleteIcon />}
            setOpen={setDeleteOpen}
            open={deleteModel}
            width={300}
          >
            <_deleteBook id={1} />
          </_modelWithButton>
        </Box>
        <_modelWithButton
          buttonColor={"primary"}
          buttonText="Add New Book"
          buttonIcon={<AddBoxIcon />}
          setOpen={setCreateOpen}
          open={createModel}
        >
          <_addNewBook />
        </_modelWithButton>
      </Box>
    </React.Fragment>
  );
}
