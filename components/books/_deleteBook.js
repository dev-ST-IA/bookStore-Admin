import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDeleteOpen } from "../../store/modelSlice";
import { useFormik } from "formik";
import { bookSchema } from "../../schemas/bookSchema";
import { useState, useEffect } from "react";

export default function _deleteBook({ id }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        gap: 2,
        width: 1,
      }}
    >
      <Typography component="body" variant="body1" textAlign={"center"}>
        Are You Sure?
      </Typography>
      <Box
        sx={{
          margin: " auto",
          display: "flex",
          flexDirection: "row",
          gap: 1,
          width: 0.7,
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" size="small" color="error" type="submit">
          Delete
        </Button>
        <Button
          variant="contained"
          size="small"
          color="warning"
          onClick={() => dispatch(setDeleteOpen(false))}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
