import { useState } from "react";
import { Tooltip, Legend, PieChart, Pie } from "recharts";
import Title from "./_title";
import { useGetAllBooksQuery } from "../services/bookStoreApi";
import _dateRange from "./_dateRange";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

export default function _salesByBook() {
  const [noBooks, setNoBooks] = useState(10);
  const { data, ...args } = useGetAllBooksQuery({ Size: noBooks });
  const theme = useTheme();

  const rows = data?.rows?.map((row) => ({
    name: row?.title,
    sales: Number(row?.sales),
    id: row?.id,
  }));

  const handleNoBooks = (e) => {
    const val = e.target.value;
    if (val > 0 && val <= 100) {
      setNoBooks(e.target.value);
    } else {
      setNoBooks(10);
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        height: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title>Popular Books Sales</Title>
      <TextField
        id="sales-days"
        label="Number Of Popular Books(Max: 100)"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        value={noBooks}
        onChange={handleNoBooks}
        sx={{ maxWidth: 0.2, left: "5rem" }}
      />
      <PieChart width={300} height={300} margin={"auto"}>
        <Pie
          data={rows}
          dataKey="sales"
          nameKey="title"
          cx="50%"
          cy="50%"
          fill="#8884d8"
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
  );
}
