import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  SidebarBlock, SidebarList,
} from "./Sidebar.styled";
import SidebarListItem from "./SidebarListItem/SidebarListItem";
import {
  StyledAlbumIcon,
  StyledBrightness2Icon,
  StyledGoalsIcon,
  StyledHomeIcon,
  StyledLightModeIcon,
} from "../Icons/Icons.styled";
import { IActivityItem } from "../../../context/UserActivitiesContext";

interface ISidebarProps {
  mode: string,
  toggleColorMode: () => void,
  activities: IActivityItem[],
}

const folders = [
  {
    name: "Photos",
    date: "Jan 9, 2014",
  },
  {
    name: "Work",
    date: "Jan 5, 2014",
  },
  {
    name: "Vacation",
    date: "Jan 7, 2014",
  },
];

export const SideBar = ({ mode, toggleColorMode, activities }: ISidebarProps) => {
  const navigate = useNavigate(); 

  return (
    <SidebarBlock>
      <SidebarList
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => navigate("/")} component="a">
          <ListItemIcon>
            <StyledHomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/list")}>
          <ListItemIcon>
            <Badge badgeContent={activities.length} color="primary">
              <StyledGoalsIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/album")}>
          <ListItemIcon>
            <StyledAlbumIcon />
          </ListItemIcon>
          <ListItemText primary="Album" />
        </ListItemButton>
      </SidebarList>
      <ListItem>
        <ListItemIcon>
          {mode === "dark" ? (
            <StyledLightModeIcon />
          ) : (
            <StyledBrightness2Icon />
          )}
        </ListItemIcon>
        <ListItemText primary={mode === "dark" ? "Light Mode" : "Dark Mode"} />
        <Switch checked={mode === "dark"} onChange={toggleColorMode} />
      </ListItem>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        {folders.map((folder) => {
          return (
            <SidebarListItem
              key={folder.name}
              name={folder.name}
              date={folder.date}
            />
          );
        })}
      </List>
    </SidebarBlock>
  );
};
