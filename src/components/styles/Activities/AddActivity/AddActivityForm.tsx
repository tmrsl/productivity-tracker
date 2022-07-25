import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import {
  StyledFormBlock,
  StyledMainBlock,
  StyledTitleBlock,
  StyledDateBlock,
  StyledButton,
  StyledAvatar,
  StyledTypography,
} from "./AddActivityForm.styled";

import { StyledAddActivityIcon } from "../../Icons/Icons.styled";
import { TAddActivity } from "../../../../context/UserActivitiesContext";

const initialVal = {
  startDate: new Date(),
  endDate: new Date(),
  title: "",
  notes: "",
};

const validation = Yup.object({
  title: Yup.string().required("Required"),
  notes: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  startDate: Yup.date().required("Required"),
  endDate: Yup.date().required("Required"),
});

interface IAddActivityFromProps {
  addActivity: TAddActivity,
  onClose: () => void,
}

export const AddActivityFrom = ({ onClose, addActivity }: IAddActivityFromProps) => {
  const navigate = useRouter();

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: initialVal,
      validationSchema: validation,
      onSubmit: async (values) => {
        await addActivity(values);
        onClose();
        navigate.replace("/list");
      },
    });

  return (
    <StyledMainBlock component="main" maxWidth="xs">
      <StyledTitleBlock>
        <StyledAvatar
          variant="circular"
        >
          <StyledAddActivityIcon />
        </StyledAvatar>
        <StyledTypography component="h1" variant="h5">
          Add Activity
        </StyledTypography>
      </StyledTitleBlock>
      <StyledFormBlock component="form" onSubmit={handleSubmit}>
        <TextField
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
        <TextField
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
          <DateTimePicker
            label="Start"
            renderInput={(params) => <TextField {...params} />}
            value={values.startDate}
            onChange={(value: Date) => {
              setFieldValue("startDate", new Date(value));
            }}
            // @ts-ignore
            error={touched.startDate && Boolean(errors.startDate)}
            helperText={touched.startDate && errors.startDate}
          />
          <DateTimePicker
            label="End"
            renderInput={(params) => <TextField {...params} />}
            value={values.endDate}
            onChange={(value: Date) => {
              setFieldValue("endDate", new Date(value));
            }}
            // @ts-ignore
            error={touched.endDate && Boolean(errors.endDate)}
            helperText={touched.endDate && errors.endDate}
          />
        </StyledDateBlock>

        <StyledButton type="submit" fullWidth>
          Add
        </StyledButton>
      </StyledFormBlock>
    </StyledMainBlock>
  );
};
