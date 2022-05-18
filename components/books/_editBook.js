import React from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setEditOpen } from "../../store/modelSlice";
import { useFormik } from "formik";
import { bookSchema } from "../../schemas/bookSchema";
import { useState, useEffect } from "react";
import {
  useGetBookQuery,
  useEditBookMutation,
} from "../../services/bookStoreApi";

export default function _editBook({ id }) {
  const { data, isError, isLoading, isFetching, error, refetch } =
    useGetBookQuery(id);
  const [initialValues, setInitialValues] = useState({
    title: "",
    author: "",
    categoryName: "",
    publisher: "",
    price: "",
    cost: "",
    units: "",
    description: "",
    image: null,
  });
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Id: "",
      Title: "",
      AuthorName: "",
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

  const isChanged = () => {
    const formikVals = formik.values;
    const isTitle = formikVals.Title != initialValues?.title;
    const isAuthor = formikVals.AuthorName != initialValues?.authorName;
    const isCategoryName =
      formikVals.CategoryName != initialValues?.categoryName;
    const isPublisher = formikVals.Publisher != initialValues?.publisher;
    const isPrice = formikVals.Price != initialValues?.price;
    const isCost = formikVals.Cost != initialValues?.cost;
    const isUnits = formikVals.Units != initialValues?.units;
    const isDescription = formikVals.Description != initialValues?.description;
    const isImage = formikVals.Image != null;
    if (
      isTitle ||
      isAuthor ||
      isCategoryName ||
      isPublisher ||
      isPrice ||
      isCost ||
      isUnits ||
      isDescription ||
      isImage
    ) {
      return true;
    }
    return false;
  };

  const setInitialToFormikVals = (data) => {
    formik.setValues({
      Id: data.id,
      Title: data.title,
      AuthorName: data?.authorName,
      CategoryName: data.categoryName,
      Publisher: data.publisher,
      Price: data.price,
      Cost: data.cost,
      Units: data.units,
      Description: data.description,
      Image: null,
    });
  };

  useEffect(() => {
    if (data) {
      setInitialValues(data);
      setInitialToFormikVals(data);
    }
    if (isError) {
      dispatch(setEditOpen(false));
    }
  }, [data]);
  const [
    edit,
    {
      isError: isEditError,
      isLoading: isEditLoading,
      isSuccess: isEditSuccess,
      data: editedData,
    },
  ] = useEditBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formikValues = formik.values;
      var form_data = new FormData();

      for (var key in formikValues) {
        form_data.append(key, formikValues[key]);
      }

      const response = await edit(form_data).unwrap();
      formik.resetForm();
      formik.setValues(formikValues);
    } catch (error) {
      formik.setValues(initialValues);
    }
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
        Edit Book
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
        }}
      >
        <Box
          sx={{
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 2,
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
            name="AuthorName"
            autoComplete="author"
            autoFocus
            value={formik.values.AuthorName}
            onChange={formik.handleChange}
            error={
              formik.touched.AuthorName && Boolean(formik.errors.AuthorName)
            }
            helperText={formik.errors.AuthorName}
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
              onChange={(e) => formik.setFieldValue("Image", e.target.files[0])}
              name="Image"
            />
            {formik.touched.Image && Boolean(formik.errors.Image) && (
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
            disabled={!isChanged()}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => dispatch(setEditOpen(false))}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
