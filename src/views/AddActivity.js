import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  StyledFormBlock,
  StyledMainBlock,
  StyledTitleBlock,
  StyledDateBlock,
} from "../components/styles/Activities/AddActivity/AddActivity.styled";
import { StyledAvatar } from "../components/styles/Avatar/Avatar.styled";
import { StyledButton } from "../components/styles/Button/Button.styled";

import { StyledDateTimePicker } from "../components/styles/Form/DateTimePicker/DateTimePicker.styled";
import { StyledTextField } from "../components/styles/Form/TextField/TextField.styled";
import { StyledAddActivityIcon } from "../components/styles/Icons/Icons.styled";
import { StyledTypography } from "../components/styles/Typography/Typography.styled";
import { useActivities } from "../context/UserActivitiesContext";

export default function AddActivity({ onClose }) {
  const { addActivity } = useActivities();
  const navigate = useNavigate();

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: {
        startDate: new Date(),
        endDate: new Date(),
        title: "",
        notes: "",
      },
      validationSchema: Yup.object({
        title: Yup.string().required("Required"),
        notes: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        startDate: Yup.date().required("Required"),
        endDate: Yup.date().required("Required"),
      }),
      onSubmit: async (values) => {
        await addActivity(values);
        onClose();
        navigate("/list");
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
      <StyledFormBlock component="form" onSubmit={handleSubmit}>
        <StyledTextField
          id="title"
          label="Enter Title"
          type="text"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          value={values.title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
        <StyledTextField
          id="notes"
          label="Enter Note"
          type="text"
          multiline
          fullWidth
          variant="outlined"
          sx={{ mb: 3 }}
          value={values.notes}
          onChange={handleChange}
          error={touched.notes && Boolean(errors.notes)}
          helperText={touched.notes && errors.notes}
        />
        <StyledDateBlock>
          <StyledDateTimePicker
            label="Start"
            renderInput={(params) => <StyledTextField {...params} />}
            value={values.startDate}
            onChange={(value) => {
              setFieldValue("startDate", new Date(value));
            }}
            error={touched.startDate && Boolean(errors.startDate)}
            helperText={touched.startDate && errors.startDate}
          />
          <StyledDateTimePicker
            label="End"
            renderInput={(params) => <StyledTextField {...params} />}
            value={values.endDate}
            onChange={(value) => {
              setFieldValue("endDate", new Date(value));
            }}
            error={touched.endDate && Boolean(errors.endDate)}
            helperText={touched.endDate && errors.endDate}
          />
        </StyledDateBlock>

        <StyledButton type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
          Add
        </StyledButton>
      </StyledFormBlock>
    </StyledMainBlock>
  );
}
