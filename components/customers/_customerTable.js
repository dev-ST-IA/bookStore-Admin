import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllCustomersQuery } from "../../services/bookStoreApi";
import { customersColumns } from "../../utils/datagrids";
import {
  addSize,
  addPage,
  setSearch,
  addSort,
  addRange,
} from "../../store/customersQuerySlice";
import _sorting from "../_sorting";
import _generalDataGrid from "../_generalDataGrid";
import _dateRange from "../_dateRange";

export default function _customerTable() {
  const dispatch = useDispatch();
  const queries = useSelector((state) => state.customersQuery);
  const { ...args } = useGetAllCustomersQuery(queries);
  const sort = queries.Sort;
  const search = queries.search;
  const startDate = queries.start;
  const endDate = queries.end;

  console.log(args.data);
  return (
    <>
      <_generalDataGrid
        sorting={
          <_sorting
            action={addSort}
            sortables={["name_asc", "name_desc", "date_asc", "date_desc"]}
            sx={{ alignSelf: "flex-end" }}
            value={sort}
          />
        }
        search={
          <TextField
            id="standard-basic"
            label="Search For Customers"
            variant="standard"
            fullWidth
            onChange={(e) => dispatch(setSearch(e.target.value))}
            value={search}
          />
        }
        columns={customersColumns}
        getData={{ ...args }}
        pagination={{ addSize, addPage }}
        queries={queries}
        rowToolBar={(row) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 1,
              }}
            >
              <_dateRange
                sx={{ flexGrow: 1 }}
                update={addRange}
                startDate={startDate}
                endDate={endDate}
              />
            </Box>
          );
        }}
      />
    </>
  );
}
