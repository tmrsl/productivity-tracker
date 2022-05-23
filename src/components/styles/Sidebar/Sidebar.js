import React from "react";

import {
  SidebarBlock,
  StyledListItemIcon,
  StyledSidebarListItem,
} from "./Sidebar.styled";
import {
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from "../List/List.styled";
import {
  StyledBrightness2Icon,
  StyledEventsIcon,
  StyledGoalsIcon,
  StyledHomeIcon,
  StyledLightModeIcon,
} from "../Icons/Icons.styled";
import { StyledDivider } from "../Divider/Divider.styled";
import { StyledSwitch } from "../Switch/Switch.styled";

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

export default function SideBar({ mode, onToggle }) {
  return (
    <SidebarBlock>
      <StyledList
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <StyledListItemButton component="a">
          <StyledListItemIcon>
            <StyledHomeIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Home" />
        </StyledListItemButton>
        <StyledListItemButton>
          <StyledListItemIcon>
            <StyledGoalsIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Tasks" />
        </StyledListItemButton>
        <StyledListItemButton>
          <StyledListItemIcon>
            <StyledEventsIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Goals" />
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
