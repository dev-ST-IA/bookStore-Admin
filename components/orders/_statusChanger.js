import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function _statusChanger({ currentStatus, changeStatus }) {
  const [alert, setAlert] = useState({ message: "", severity: "" });
  const cantChange =
    currentStatus === "Cancelled" || currentStatus === "Returned";

  const handleChange = async (event) => {
    changeStatus(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="top-status-label">Status</InputLabel>
      <Select
        id="status"
        value={currentStatus}
        label="Status"
        onChange={handleChange}
        disabled={cantChange}
        defaultValue={currentStatus}
      >
        <MenuItem value={"Ordered"} disabled>
          Ordered
        </MenuItem>
        <MenuItem value={"Returned"}>Returned</MenuItem>
        <MenuItem value={"Delivered"}>Delivered</MenuItem>
        <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
      </Select>
    </FormControl>
  );
}
