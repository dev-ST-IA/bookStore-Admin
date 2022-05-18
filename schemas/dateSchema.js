import * as yup from "yup";

export const dateSchema = yup.object().shape({
  startDate: yup.date().required(),
  endDate: yup
    .date()
    .when(
      "startDate",
      (startDate, schema) => startDate && schema.min(startDate)
    ),
});
