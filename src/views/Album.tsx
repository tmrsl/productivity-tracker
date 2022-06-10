import CardContent from "@mui/material/CardContent";

import React, { useState } from "react";
import AddCard from "../components/styles/Album/AddCard/AddCard";
import {
  StyledCard,
  StyledCardMedia,
  StyledContainer,
  StyledFab,
  StyledGridContainer,
  StyledGridLayout,
} from "../components/styles/Album/Album.styled";
import { StyledAddIcon } from "../components/styles/Icons/Icons.styled";
import {
  StyledModal,
  StyledModalBlock,
} from "../components/styles/Modal/Modal.styled";
import { StyledTooltip } from "../components/styles/Tooltip/Tooltip.styled";
import { StyledTypography } from "../components/styles/Typography/Typography.styled";
import { useAlbum } from "../context/AlbumContext";

export default function Album() {
  const [open, setOpen] = useState(false);
  const { album } = useAlbum();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledContainer maxWidth="md">
      <StyledTooltip title="Add new activity" onClick={handleOpen}>
        <StyledFab size="large" color="primary" aria-label="add">
          <StyledAddIcon />
        </StyledFab>
      </StyledTooltip>

      <StyledGridContainer container spacing={4}>
        {album.map((card) => (
          <StyledGridLayout item key={card.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia
                component="img"
                image={card.imgUrl}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <StyledTypography gutterBottom variant="h5" component="h2">
                  {card.title}
                </StyledTypography>
                <StyledTypography>{card.notes}</StyledTypography>
              </CardContent>
            </StyledCard>
          </StyledGridLayout>
        ))}
      </StyledGridContainer>
      <StyledModal open={open} onClose={handleClose}>
        <StyledModalBlock>
          <AddCard onClose={() => setOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </StyledContainer>
  );
}
