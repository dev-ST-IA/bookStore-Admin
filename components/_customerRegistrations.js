import Typography from "@mui/material/Typography";
import Title from "./_title";
import { Box } from "@mui/system";
import { useGetNoOfCustomersRegisteredQuery } from "../services/bookStoreApi";
import { addRange } from "../store/customersQuerySlice";
import { useSelector } from "react-redux";
import _dateRange from "./_dateRange";

export default function _customerRegistrations() {
  const queries = useSelector((state) => state.customersQuery);
  const start = queries.start;
  const end = queries.end;
  const { data, ...args } = useGetNoOfCustomersRegisteredQuery({ start, end });

  return (
    <Box>
      <Title>Customer Registrations</Title>
      <_dateRange update={addRange} startDate={start} endDate={end} />
      <Box
        sx={{
          width: 1,
          height: "100%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title>
          <Typography textAlign={"center"} variant="h4">
            {data}
          </Typography>
        </Title>
      </Box>
    </Box>
  );
}
