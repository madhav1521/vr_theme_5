import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Typography } from '@mui/material';

const StyledMenu = styled((props: MenuProps) => (
    
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
}));

export default function CustomizedMenus(props:any) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        className={props.classname}
      >
            {props.img && <img alt="" src={props.img} className="" />}
            {props.name && <Typography component="h5" variant="body1" className="profile-name">
              {props.name}
            </Typography>}
            {props.arrow && <img src={props.arrow} alt="" className='profile-arrow' />}
          
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu-list"
      >
        <MenuItem onClick={handleClose} disableRipple>
          My Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Help
        </MenuItem>
        
        <MenuItem onClick={()=>{navigate('/');}} disableRipple>
          Logout
        </MenuItem>
      </StyledMenu>
    </div>
  );
}