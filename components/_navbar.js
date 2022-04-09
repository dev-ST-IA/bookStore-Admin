import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import UserMenu from "./_userMenu";
import { useSelector } from "react-redux";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: (theme) => theme.palette.grey.A100,
        minWidth: 1,
      }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <Link href="/">
          <Button variant="text" color="inherit">
            <Typography variant="h6" color="inherit" noWrap>
              E-Book
            </Typography>
          </Button>
        </Link>
        <Button
          href="/auth/login"
          variant="contained"
          color="success"
          sx={{ my: 1, mx: 1.5 }}
        >
          Login
        </Button>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
