import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./_navbar";
import { Box } from "@mui/system";
import MetaHead from "./_head";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import Footer from "./_footer";

export default function Layout({ children, pageTitle = "" }) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <MetaHead title={pageTitle} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar pageTitle={pageTitle} />
        <Box
          component="main"
          sx={{
            margin: "auto",
            width: 1,
            minHeight: 1,
            bgcolor: (theme) => theme.palette.grey.A100,
          }}
        >
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {children}
            </Container>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
