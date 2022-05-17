import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import {
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
} from "@mui/material";

import {
  StyledListItemIcon,
  StyledAvatar,
} from "../components/styles/Sidebar.styled";

export default function SideBar() {
  return (
    <Box sx={{ overflow: "auto" }}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <StyledListItemIcon>
            <HomeIcon />
          </StyledListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <StyledListItemIcon>
            <AssignmentTurnedInIcon />
          </StyledListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton>
          <StyledListItemIcon>
            <EmojiEventsIcon />
          </StyledListItemIcon>
          <ListItemText primary="Goals" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem>
          <ListItemAvatar>
            <StyledAvatar>
              <FolderIcon />
            </StyledAvatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <StyledAvatar>
              <FolderIcon />
            </StyledAvatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <StyledAvatar>
              <FolderIcon />
            </StyledAvatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
}
