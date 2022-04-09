import { Typography } from "@mui/material";
import { Link } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ bgcolor: (theme) => theme.palette.grey.A100 }}
    >
      {"Copyright © "}
      <Link href={"/"}>
        {/* <Link color="inherit" href="https://mui.com/"> */}
        <a>E-Book</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
