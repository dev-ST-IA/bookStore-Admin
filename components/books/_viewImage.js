import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setViewImageOpen } from "../../store/modelSlice";
import { useState, useEffect } from "react";
import { useGetBookQuery } from "../../services/bookStoreApi";

export default function _viewImage({ id }) {
  const { data, isError, isLoading, isSuccess, error } = useGetBookQuery(id);
  const dispatch = useDispatch();

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
      {isSuccess && (
        <img
          src={data?.imageUrl}
          alt={data?.title}
          loading="lazy"
          style={{
            minWidth: "100%",
            maxWidth: `auto`,
            maxHeight: `40rem`,
            objectFit: "contain",
          }}
        />
      )}
      <Box
        sx={{
          margin: " auto",
          display: "flex",
          flexDirection: "row",
          gap: 1,
          width: 0.7,
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="small"
          color="warning"
          onClick={() => dispatch(setViewImageOpen(false))}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
}
