import React from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";

import { StyledFolderIcon, StyledDeleteIcon } from "../../Icons/Icons.styled";

interface ISidebarLIProps {
  name: string,
  date: string,
}

const SidebarListItem = ({ name, date }: ISidebarLIProps) => {
  return (
    <ListItem>
      <Tooltip title="Details">
        <IconButton>
          <Avatar>
            <StyledFolderIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <ListItemText primary={name} secondary={date} />
      <Tooltip title="Delete">
        <IconButton edge="end" aria-label="delete">
          <StyledDeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default SidebarListItem;
