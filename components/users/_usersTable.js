import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";
import _modelWithButton from "../_modelWithButton";
import _addNewUsers from "./_addNewUsers";
import _deleteUsers from "./_deleteUsers";
import { setCreateOpen, setDeleteOpen } from "../../store/modelSlice";
import { useSelector, useDispatch } from "react-redux";
import _generalDataGrid from "../_generalDataGrid";
import { useGetAllUsersQuery } from "../../services/bookStoreApi";
import {
  addSize,
  addPage,
  setSearch,
  addSort,
  addRange,
} from "../../store/customersQuerySlice";
import _sorting from "../_sorting";
import { customersColumns } from "../../utils/datagrids";

export default function _usersTable() {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.model);
  const queries = useSelector((state) => state.customersQuery);
  const { ...args } = useGetAllUsersQuery(queries);
  const sort = queries.Sort;
  const search = queries.search;
  const createModel = models.createOpen;
  const deleteModel = models.deleteOpen;

  return (
    <_generalDataGrid
      sorting={
        <_sorting
          action={addSort}
          sortables={[
            "name_asc",
            "name_desc",
            "date_asc",
            "date_desc",
            "price_asc",
            "price_desc",
          ]}
          sx={{ alignSelf: "flex-end" }}
          value={sort}
        />
      }
      search={
        <TextField
          id="standard-basic"
          label="Search For Users"
          variant="standard"
          fullWidth
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
        />
      }
      columns={customersColumns}
      getData={{ ...args }}
      pagination={{ addSize, addPage }}
      queries={{ ...queries }}
      rowToolBar={(row) => {
        return (
          <Box
            sx={{
              margin: "1rem auto",
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <_modelWithButton
              buttonColor={"error"}
              buttonText="Delete User"
              buttonIcon={<DeleteIcon />}
              setOpen={setDeleteOpen}
              open={deleteModel}
              width={300}
            >
              <_deleteUsers id={row?.id} />
            </_modelWithButton>
            <_modelWithButton
              buttonColor={"primary"}
              buttonText="Add New Users"
              buttonIcon={<AddBoxIcon />}
              setOpen={setCreateOpen}
              open={createModel}
            >
              <_addNewUsers />
            </_modelWithButton>
          </Box>
        );
      }}
    />
  );
}
