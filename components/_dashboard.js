import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./_chart";
import Deposits from "./_deposits";
import Orders from "./_orders";
import _Drawer from "./_drawer";
import _salesChart from "./_salesChart";
import _customerRegistrations from "./_customerRegistrations";
import _salesBycategory from "./_salesBycategory";
import _salesByBook from "./_salesByBook";

export default function DashboardContent() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "30rem",
          }}
        >
          <_salesChart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "25rem",
          }}
        >
          <_salesBycategory />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "25rem",
          }}
        >
          <_customerRegistrations />
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "30rem",
          }}
        >
          <_salesByBook />
        </Paper>
      </Grid>
    </Grid>
  );
}
