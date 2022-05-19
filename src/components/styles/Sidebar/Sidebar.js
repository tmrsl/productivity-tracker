import React from "react";

import { SidebarBlock, StyledListItemIcon } from "./Sidebar.styled";
import {
  StyledList,
  StyledListItemButton,
  StyledListItemText,
} from "../List/List.styled";
import {
  StyledEventsIcon,
  StyledGoalsIcon,
  StyledHomeIcon,
} from "../Icons/Icons.styled";
import { StyledDivider } from "../Divider/Divider.styled";
import SidebarListItem from "./SidebarListItem/SidebarListItem";

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

export default function SideBar() {
  return (
    <SidebarBlock>
      <StyledList
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <StyledListItemButton>
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
      <StyledDivider />
      <StyledList component="nav" aria-label="secondary mailbox folder">
        {folders.map((folder) => {
          return (
            <SidebarListItem
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
