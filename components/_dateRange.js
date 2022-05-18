import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { dateSchema } from "../schemas/dateSchema";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export default function _dateRange({
  startDate = new Date(),
  endDate = new Date(),
  update,
  sx,
}) {
  const [errors, setErrors] = useState(null);
  const [dateA, setDateA] = useState("");
  const [dateB, setDateB] = useState("");
  const dispatch = useDispatch();

  const validate = (start, end) => {
    dateSchema
      .validate({ startDate: start, endDate: end })
      .then((e) => {
        setDateA(start);
        setDateB(end);
        setErrors(null);
      })
      .catch((err) => {
        console.log(err);
        const todays = new Date();
        const lastMonths = new Date();
        lastMonths.setMonth = lastMonths.getMonth() - 1;
        setDateA(lastMonths.toISOString().split("T")[0]);
        setDateB(todays.toISOString().split("T")[0]);
        setErrors(err?.name);
      });
  };

  useEffect(() => {
    const todays = new Date();
    const lastMonths = new Date();
    lastMonths.setMonth(lastMonths.getMonth() - 1);
    const dateAParsed = dateA ? dateA : lastMonths.toISOString().split("T")[0];
    const dateBParsed = dateB ? dateB : todays.toISOString().split("T")[0];
    dispatch(update({ start: dateAParsed, end: dateBParsed }));
  }, [dateA, dateB]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "center",
          width: 1,
        }}
      >
        <TextField
          id="date"
          label="Start"
          name="startDate"
          type="date"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={startDate}
          defaultValue={new Date().toLocaleDateString()}
          onChange={(e) => validate(e.target.value, dateB)}
        />
        <span>-</span>
        <TextField
          id="date"
          label="End"
          type="date"
          name="endDate"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={endDate}
          onChange={(e) => validate(dateA, e.target.value)}
          defaultValue={new Date().toLocaleDateString()}
        />
      </Box>
      <Box>
        {errors != "" && (
          <Typography textAlign={"center"} variant="body1" component="body">
            {errors}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
