import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCreateOpen } from "../../store/modelSlice";
import { useFormik } from "formik";
import { bookSchema } from "../../schemas/bookSchema";

export default function _addNewBook() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Title: "",
      Author: "",
      CategoryName: "",
      Publisher: "",
      Price: "",
      Cost: "",
      Units: "",
      Description: "",
      Image: null,
    },
    validationSchema: bookSchema,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        margin: " auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography textAlign={"left"} variant="h5" component="h5">
        Add New Book
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxHeight: 400,
          maxWidth: 500,
          margin: "1rem auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          padding: 2,
        }}
      >
        <Box
          sx={{
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="new-book-title"
            label="Title"
            name="Title"
            autoComplete="title"
            autoFocus
            value={formik.values.Title}
            onChange={formik.handleChange}
            error={formik.touched.Title && Boolean(formik.errors.Title)}
            helperText={formik.errors.Title}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="new-book-author"
            label="Author"
            name="Author"
            autoComplete="author"
            autoFocus
            value={formik.values.Author}
            onChange={formik.handleChange}
            error={formik.touched.Author && Boolean(formik.errors.Author)}
            helperText={formik.errors.Author}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="new-book-category"
            label="Category"
            name="CategoryName"
            autoComplete="category"
            autoFocus
            value={formik.values.CategoryName}
            onChange={formik.handleChange}
            error={
              formik.touched.CategoryName && Boolean(formik.errors.CategoryName)
            }
            helperText={formik.errors.CategoryName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="new-book-description"
            label="Description"
            name="Description"
            autoComplete="description"
            autoFocus
            value={formik.values.Description}
            onChange={formik.handleChange}
            error={
              formik.touched.Description && Boolean(formik.errors.Description)
            }
            helperText={formik.errors.Description}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="new-book-publisher"
            label="Publisher"
            name="Publisher"
            autoComplete="publisher"
            autoFocus
            value={formik.values.Publisher}
            onChange={formik.handleChange}
            error={formik.touched.Publisher && Boolean(formik.errors.Publisher)}
            helperText={formik.errors.Publisher}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="new-book-cost"
              label="Cost"
              name="Cost"
              autoComplete="cost"
              autoFocus
              type="number"
              value={formik.values.Cost}
              onChange={formik.handleChange}
              error={formik.touched.Cost && Boolean(formik.errors.Cost)}
              helperText={formik.errors.Cost}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="new-book-price"
              label="Price"
              name="Price"
              autoComplete="price"
              autoFocus
              type="number"
              value={formik.values.Price}
              onChange={formik.handleChange}
              error={formik.touched.Price && Boolean(formik.errors.Price)}
              helperText={formik.errors.Price}
            />
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="new-book-units"
            label="Units"
            name="Units"
            autoComplete="units"
            autoFocus
            type="number"
            value={formik.values.Units}
            onChange={formik.handleChange}
            error={formik.touched.Units && Boolean(formik.errors.Units)}
            helperText={formik.errors.Units}
          />
          <Box>
            <Input
              type="file"
              accept=".jpg, .jpeg, .png"
              required
              onChange={(e) => formik.setFieldValue("Image", e.target.files[0])}
            />
            {formik.touched.Units && Boolean(formik.errors.Units) && (
              <Typography component="body" variant="body1">
                {formik.errors.Image}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            type="submit"
          >
            Add
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => dispatch(setCreateOpen(false))}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
