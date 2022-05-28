import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setToken, setUserDetails } from "../store/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";

export default function _logOutListItemButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(setToken());
    dispatch(setUserDetails({}));
    router.push("auth/login");
  };
  return (
    <ListItemButton onClick={handleLogOut}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary={"Logout"} />
    </ListItemButton>
  );
}
