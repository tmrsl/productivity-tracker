import React from "react";

import {
  SidebarBlock,
  StyledListItemIcon,
  StyledSidebarListItem,
  StyledBadge,
} from "./Sidebar.styled";
import {
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from "../List/List.styled";
import {
  StyledAlbumIcon,
  StyledBrightness2Icon,
  StyledGoalsIcon,
  StyledHomeIcon,
  StyledLightModeIcon,
} from "../Icons/Icons.styled";
import { StyledDivider } from "../Divider/Divider.styled";
import { StyledSwitch } from "../Switch/Switch.styled";
import { useNavigate } from "react-router-dom";

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

export default function SideBar({ mode, onToggle, activities }, anchor) {
  const navigate = useNavigate();

  return (
    <SidebarBlock>
      <StyledList
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <StyledListItemButton onClick={() => navigate("/")} component="a">
          <StyledListItemIcon>
            <StyledHomeIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Home" />
        </StyledListItemButton>
        <StyledListItemButton onClick={() => navigate("/list")}>
          <StyledListItemIcon>
            <StyledBadge badgeContent={activities.length} color="primary">
              <StyledGoalsIcon />
            </StyledBadge>
          </StyledListItemIcon>
          <StyledListItemText primary="Tasks" />
        </StyledListItemButton>
        <StyledListItemButton onClick={() => navigate("/album")}>
          <StyledListItemIcon>
            <StyledAlbumIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Album" />
        </StyledListItemButton>
      </StyledList>
      <StyledListItem>
        <StyledListItemIcon>
          {mode === "dark" ? (
            <StyledLightModeIcon />
          ) : (
            <StyledBrightness2Icon />
          )}
        </StyledListItemIcon>
        <StyledListItemText
          primary={mode === "dark" ? "Light Mode" : "Dark Mode"}
        />
        <StyledSwitch checked={mode === "dark"} onChange={onToggle} />
      </StyledListItem>
      <StyledDivider />
      <StyledList component="nav" aria-label="secondary mailbox folder">
        {folders.map((folder) => {
          return (
            <StyledSidebarListItem
              key={folder.name}
              name={folder.name}
              date={folder.date}
            />
          );
        })}
      </StyledList>
    </SidebarBlock>
  );
}
