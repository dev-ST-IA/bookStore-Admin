import { Tooltip, Legend, PieChart, Pie } from "recharts";
import Title from "./_title";
import { useGetSalesByCategoryQuery } from "../services/bookStoreApi";
import { Box } from "@mui/system";

export default function _salesBycategory() {
  const { data, ...args } = useGetSalesByCategoryQuery();

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
      <Title>Sales By Book Category</Title>
      <PieChart width={300} height={300} margin={"auto"}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="category"
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
