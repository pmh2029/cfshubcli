import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Badge, Typography } from "@mui/material";
import { BiBell } from "react-icons/bi";

const NotificationsDropdown = ({ notifications }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="notifications-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={10} color="secondary">
          <BiBell />
        </Badge>
      </IconButton>
      <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      ></Menu>
    </>
  );
};

export default NotificationsDropdown;
