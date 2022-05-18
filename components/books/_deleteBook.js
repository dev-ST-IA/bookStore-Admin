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
import { useDeleteBookMutation } from "../../services/bookStoreApi";

export default function _deleteBook({ id }) {
  const [deleteBook, { isError, data, isLoading, isSuccess, error }] =
    useDeleteBookMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteBook(id);
      dispatch(setDeleteOpen(false));
    } catch (error) {
      dispatch(setDeleteOpen(true));
    }
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
        <Button
          variant="contained"
          size="small"
          color="error"
          type="button"
          onClick={handleSubmit}
        >
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
