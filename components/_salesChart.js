import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Title from "./_title";
import { useGetAllSalesQuery } from "../services/bookStoreApi";
import _dateRange from "./_dateRange";
import { useSelector } from "react-redux";
import { addRange } from "../store/salesQuerySlice";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function _salesChart() {
  const [days, setDays] = useState(10);
  const queries = useSelector((state) => state.salesQuery);
  const start = queries.start;
  const end = queries.end;

  const { data, ...args } = useGetAllSalesQuery({ start, end, Size: days });
  const rows = data?.rows?.map((row) => ({
    date: new Date(row?.date).toISOString().split("T")[0],
    totalSales: Number(row?.totalSales),
  }));

  const handleDays = (e) => {
    const val = e.target.value;
    if (val > 0 && val <= 365 * 3) {
      setDays(e.target.value);
    } else {
      setDays(10);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 1,
        height: "100%",
      }}
    >
      <Title>Sales Chart (Upto 3 Years)</Title>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
        {/* <_dateRange update={addRange} startDate={start} endDate={end} /> */}
        <TextField
          id="sales-days"
          label="Maximum No Of Days"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={days}
          onChange={handleDays}
        />
      </Box>
      <ResponsiveContainer>
        <LineChart
          width={"100%"}
          height={"80%"}
          data={rows}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalSales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
