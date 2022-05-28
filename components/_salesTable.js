import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllSalesQuery } from "../services/bookStoreApi";
import { salesColumns } from "../utils/datagrids";
import { addSize, addPage, addSort, addRange } from "../store/salesQuerySlice";
import _sorting from "./_sorting";
import _generalDataGrid from "./_generalDataGrid";
import _dateRange from "./_dateRange";

export default function _customerTable() {
  const dispatch = useDispatch();
  const queries = useSelector((state) => state.salesQuery);
  const { ...args } = useGetAllSalesQuery(queries);
  const sort = queries.Sort;
  const startDate = queries.start;
  const endDate = queries.end;

  return (
    <>
      <_generalDataGrid
        sorting={
          <_sorting
            action={addSort}
            sortables={["date_asc", "date_desc"]}
            sx={{ alignSelf: "flex-end" }}
            value={sort}
          />
        }
        columns={salesColumns}
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
