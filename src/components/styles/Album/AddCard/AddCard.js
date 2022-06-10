import { useFormik } from "formik";
import React from "react";

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  StyledFormBlock,
  StyledMainBlock,
  StyledTitleBlock,
} from "./AddCard.styled";
import { useAlbum } from "../../../../context/AlbumContext";
import { StyledAvatar } from "../../Avatar/Avatar.styled";
import { StyledButton } from "../../Button/Button.styled";
import { StyledTextField } from "../../Form/TextField/TextField.styled";
import { StyledAddActivityIcon } from "../../Icons/Icons.styled";
import { StyledTypography } from "../../Typography/Typography.styled";

const initialVal = {
  title: "",
  notes: "",
  imgFile: "",
};

const validation = Yup.object({
  title: Yup.string().required("Required"),
  notes: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  imgFile: Yup.mixed().required("File is required"),
});

export default function AddCard({ onClose }) {
  const { addAlbumCard } = useAlbum();
  const navigate = useNavigate();

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: initialVal,
      validationSchema: validation,
      onSubmit: async (values) => {
        await addAlbumCard(values);
        onClose();
        navigate("/album");
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
          Add Photo
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
        <StyledTextField
          id="imgFile"
          label="Image Upload"
          name="file"
          type="file"
          sx={{ mb: 3 }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={(event) => {
            setFieldValue("imgFile", event.target.files[0]);
          }}
          error={touched.imgFile && Boolean(errors.imgFile)}
          helperText={touched.imgFile && errors.imgFile}
        />
        <StyledButton type="submit" fullWidth sx={{ mb: 2 }}>
          Add
        </StyledButton>
      </StyledFormBlock>
    </StyledMainBlock>
  );
}
