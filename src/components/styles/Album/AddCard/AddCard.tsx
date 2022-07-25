import React from "react";
import { useFormik } from "formik";

import { useRouter } from "next/router";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import {
  StyledFormBlock,
  StyledMainBlock,
  StyledTitleBlock,
  StyledButton,
  StyledAvatar,
  StyledTypography,
} from "./AddCard.styled";
import { IAddAlbumCardPayload, useAlbum } from "../../../../context/AlbumContext";
import { StyledAddActivityIcon } from "../../Icons/Icons.styled";

interface IAddCardProps {
  onClose: () => void,
}

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
  imgFile: Yup.mixed<File>().required("File is required"),
});

export const AddCard = ({ onClose }: IAddCardProps) => {
  const { addAlbumCard } = useAlbum();
  const router = useRouter();

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: initialVal,
      validationSchema: validation,
      // @ts-ignore
      onSubmit: async (values: IAddAlbumCardPayload) => {
        await addAlbumCard(values);
        onClose();
        router.push("/album");
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
          Add Photo
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
        <TextField
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
            // @ts-ignore
            setFieldValue("imgFile", event.target.files[0]);
          }}
          error={touched.imgFile && Boolean(errors.imgFile)}
          helperText={touched.imgFile && errors.imgFile}
        />
        <StyledButton type="submit" fullWidth>
          Add
        </StyledButton>
      </StyledFormBlock>
    </StyledMainBlock>
  );
};
