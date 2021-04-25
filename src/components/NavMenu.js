import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span className="text-white">Menu</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/about" className="">
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contact" className="">
            Contact
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/support" className="">
            Support Us
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/our_belief" className="">
            Our Belief
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link to="/events" className="">
            Events
          </Link>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
