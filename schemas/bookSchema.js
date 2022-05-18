import * as Yup from "yup";
const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const bookSchema = Yup.object().shape({
  Title: Yup.string("Enter Book Title")
    .min(5, "Too Short!")
    .max(60, "Too Long!")
    .required(),
  AuthorName: Yup.string("Enter Author Name")
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required(),
  CategoryName: Yup.string("Enter Category Name")
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required(),
  Description: Yup.string("Enter Book Description")
    .min(5, "Too Short!")
    .required(),
  Publisher: Yup.string("Enter Publisher Name")
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required(),
  Cost: Yup.number("Enter Book Cost")
    .min(50, "Cannot be lower than this")
    .required(),
  Price: Yup.number("Enter Book Price")
    .min(50, "Cannot be lower than this")
    .when("Cost", (cost) => {
      if (cost) {
        return Yup.number()
          .min(cost + 1, "Cannot be lower than the cost")
          .required("Enter Book Price");
      }
    }),
  Image: Yup.mixed()
    .required("An image is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .optional(),
  Units: Yup.number("Enter No of Units")
    .integer("Enter an integer")
    .min(1, "Cannot be lower than this")
    .required("Enter Number of books to add"),
});

// var schema = yup.object().shape(
//   {
//     a: yup.string(),
//     b: yup.string(),
//     c: yup.string().when(["a", "b"], {
//       is: (a, b) => !a && !b,
//       then: yup.string().required(),
//     }),
//   },
//   [["a", "b"]]
// ); // <-- HERE!!!!!!!!
