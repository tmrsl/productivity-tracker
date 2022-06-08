import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledTooltip } from "../Tooltip/Tooltip.styled";
import { StyledModal, StyledModalBlock } from "../Modal/Modal.styled";
import AddCard from "./AddCard";
import { useAlbum } from "../../../context/AlbumContext";

export default function Album() {
  const [open, setOpen] = React.useState(false);
  const { album } = useAlbum();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <StyledTooltip title="Add new activity" onClick={handleOpen}>
        <Fab
          sx={{
            position: "absolute",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
          }}
          size="large"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </StyledTooltip>

      <Grid container spacing={4}>
        {album.map((card) => (
          <Grid
            item
            key={card.id}
            xs={12}
            sm={6}
            md={4}
            sx={{ scrollBehavior: "smooth", overflow: "auto" }}
          >
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia component="img" image={card.imgUrl} alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.notes}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <StyledModal open={open} onClose={handleClose}>
        <StyledModalBlock>
          <AddCard onClose={() => setOpen(false)} />
        </StyledModalBlock>
      </StyledModal>
    </Container>
  );
}
