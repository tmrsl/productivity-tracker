import React from "react";

import { StyledAvatar } from "../../Avatar/Avatar.styled";
import { StyledIconButton } from "../../Button/Button.styled";
import { StyledFolderIcon, StyledDeleteIcon } from "../../Icons/Icons.styled";
import { StyledListItem, StyledListItemText } from "../../List/List.styled";
import { StyledTooltip } from "../../Tooltip/Tooltip.styled";

export default function SidebarListItem(props) {
  return (
    <StyledListItem>
      <StyledTooltip title="Details">
        <StyledIconButton>
          <StyledAvatar>
            <StyledFolderIcon />
          </StyledAvatar>
        </StyledIconButton>
      </StyledTooltip>
      <StyledListItemText primary={props.name} secondary={props.date} />
      <StyledTooltip title="Delete">
        <StyledIconButton edge="end" aria-label="delete">
          <StyledDeleteIcon />
        </StyledIconButton>
      </StyledTooltip>
    </StyledListItem>
  );
}
