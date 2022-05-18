import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PreviewIcon from "@mui/icons-material/Preview";
import _modelWithButton from "../_modelWithButton";
import _addNewBook from "./_addNewBook";
import _editBook from "./_editBook";
import _deleteBook from "./_deleteBook";
import _viewImage from "./_viewImage";
import {
  setCreateOpen,
  setEditOpen,
  setDeleteOpen,
  setViewImageOpen,
} from "../../store/modelSlice";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllBooksQuery } from "../../services/bookStoreApi";
import { booksColumns } from "../../utils/datagrids";
import {
  addSize,
  addPage,
  setSearch,
  addSort,
} from "../../store/booksQuerySlice";
import _sorting from "../_sorting";
import { useEffect, useState } from "react";
import _generalDataGrid from "../_generalDataGrid";

export default function _booksTable() {
  const dispatch = useDispatch();
  const queries = useSelector((state) => state.booksQuery);
  const { ...args } = useGetAllBooksQuery(queries);
  const models = useSelector((state) => state.model);
  const createModel = models.createOpen;
  const editModel = models.editOpen;
  const deleteModel = models.deleteOpen;
  const viewModel = models.viewImageOpen;
  const sortValue = queries.Sort;
  const search = queries.search;

  return (
    <>
      <_generalDataGrid
        sorting={
          <_sorting
            action={addSort}
            sortables={[
              "popular",
              "name_asc",
              "name_desc",
              "date_asc",
              "date_desc",
              "price_asc",
              "price_desc",
            ]}
            sx={{ alignSelf: "flex-end" }}
            value={sortValue}
          />
        }
        search={
          <TextField
            id="standard-basic"
            label="Search For Books"
            variant="standard"
            fullWidth
            onChange={(e) => dispatch(setSearch(e.target.value))}
            value={search}
          />
        }
        columns={booksColumns}
        getData={{ ...args }}
        pagination={{ addSize, addPage }}
        queries={queries}
        rowToolBar={(row) => {
          return (
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
                  disabled={!row?.id}
                >
                  <_editBook id={row?.id} />
                </_modelWithButton>

                <_modelWithButton
                  buttonColor={"error"}
                  buttonText="Delete Book"
                  buttonIcon={<DeleteIcon />}
                  setOpen={setDeleteOpen}
                  open={deleteModel}
                  width={300}
                  disabled={!row?.id}
                >
                  <_deleteBook id={row?.id} />
                </_modelWithButton>
                <_modelWithButton
                  buttonColor={"primary"}
                  buttonText="View Book Image"
                  buttonIcon={<PreviewIcon />}
                  setOpen={setViewImageOpen}
                  open={viewModel}
                  width={300}
                  disabled={!row?.id}
                >
                  <_viewImage id={row?.id} />
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
          );
        }}
      />
    </>
  );
}
