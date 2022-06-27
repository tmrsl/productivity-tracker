import React from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";

import { StyledFolderIcon, StyledDeleteIcon } from "../../Icons/Icons.styled";

const SidebarListItem = (props) => {
  return (
    <ListItem>
      <Tooltip title="Details">
        <IconButton>
          <Avatar>
            <StyledFolderIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <ListItemText primary={props.name} secondary={props.date} />
      <Tooltip title="Delete">
        <IconButton edge="end" aria-label="delete">
          <StyledDeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default SidebarListItem;
