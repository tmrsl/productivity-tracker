import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useActivities } from "../context/UserActivitiesContext";

import { StyledButton } from "../components/styles/Button/Button.styled";
import { StyledTextField } from "../components/styles/Form/TextField/TextField.styled";
import { StyledAvatar } from "../components/styles/Avatar/Avatar.styled";
import { StyledAddActivityIcon } from "../components/styles/Icons/Icons.styled";
import { StyledDateTimePicker } from "../components/styles/Form/DateTimePicker/DateTimePicker.styled";
import {
  StyledFormBlock,
  StyledMainBlock,
  StyledTitleBlock,
} from "../components/styles/Activities/AddActivity/AddActivity.styled";
import { StyledTypography } from "../components/styles/Typography/Typography.styled";

const categories = [
  {
    value: "event",
    label: "event",
  },
  {
    value: "task",
    label: "task",
  },
  {
    value: "reminder",
    label: "reminder",
  },
];

export default function AddActivity({ onClose }) {
  const { addActivity } = useActivities();

  const formik = useFormik({
    initialValues: {
      title: "",
      note: "",
      category: "events",
      selectedDateTime: new Date(),
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      note: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      category: Yup.string().required("Required"),
      selectedDateTime: Yup.date().required("Required"),
    }),
    onSubmit: async (values) => {
      await addActivity(values);
      onClose();
    },
  });

  return (
    <StyledMainBlock component="main" maxWidth="xs">
      <StyledTitleBlock>
        <StyledAvatar
          sx={{ mb: 1, bgcolor: "primary.main" }}
          variant="circular"
        >
          <StyledAddActivityIcon />
        </StyledAvatar>
        <StyledTypography component="h1" variant="h5" sx={{ mb: 3 }}>
          Add Activity
        </StyledTypography>
      </StyledTitleBlock>
      <StyledFormBlock component="form" onSubmit={formik.handleSubmit}>
        <StyledTextField
          id="title"
          label="Enter Title"
          type="text"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <StyledTextField
          id="note"
          label="Enter Note"
          type="text"
          multiline
          fullWidth
          variant="outlined"
          sx={{ mb: 3 }}
          value={formik.values.note}
          onChange={formik.handleChange}
          error={formik.touched.note && Boolean(formik.errors.note)}
          helperText={formik.touched.note && formik.errors.note}
        />
        <StyledTextField
          id="category"
          select
          fullWidth
          label="Choose category"
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          sx={{ mb: 3 }}
        >
          {categories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledTextField>
        <StyledDateTimePicker
          label="Select Date and Time"
          renderInput={(params) => <StyledTextField fullWidth {...params} />}
          value={formik.values.selectedDateTime}
          onChange={(value) => {
            formik.setFieldValue("selectedDateTime", Date.parse(value));
          }}
          error={
            formik.touched.selectedDateTime &&
            Boolean(formik.errors.selectedDateTime)
          }
          helperText={
            formik.touched.selectedDateTime && formik.errors.selectedDateTime
          }
        />
        <StyledButton type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
          Add
        </StyledButton>
      </StyledFormBlock>
    </StyledMainBlock>
  );
}
