import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";

export default function DrawerItem({ text, navigateTo = "#", icon }) {
  const router = useRouter();
  return (
    <ListItemButton onClick={() => router.push(navigateTo)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}
