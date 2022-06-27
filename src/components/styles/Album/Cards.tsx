import React, { useState } from "react";

import { Tooltip, Typography } from "@mui/material";
import {
  StyledCard,
  StyledCardMedia,
  StyledContainer,
  StyledFab,
  StyledGridContainer,
  StyledGridLayout,
  StyledCardContent,
} from "./Cards.styled";
import { AddCard } from "../Album/AddCard/AddCard";
import { StyledAddIcon } from "../Icons/Icons.styled";
import {
  StyledModal,
  StyledModalBlock,
} from "../Modal/Modal.styled";
import { IAlbumItem } from "../../../context/AlbumContext";

interface ICardsProps {
  album: IAlbumItem[],
}

export const Cards: React.FC<ICardsProps> = ({ album }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <StyledContainer maxWidth="md">
      <Tooltip title="Add new activity" onClick={handleOpen}>
        <StyledFab size="large" color="primary" aria-label="add">
          <StyledAddIcon />
        </StyledFab>
      </Tooltip>

      <StyledGridContainer container spacing={4}>
        {album.map((card) => (
          <StyledGridLayout item key={card.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardMedia
                component="img"
                image={card.imgUrl}
                alt="random"
              />
    
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>

                <Typography>{card.notes}</Typography>
              </StyledCardContent>
            </StyledCard>
          </StyledGridLayout>
        ))}
      </StyledGridContainer>

      <StyledModal open={isOpen} onClose={handleClose}>
        <StyledModalBlock>
          <AddCard onClose={() => setIsOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </StyledContainer>
  );
};
