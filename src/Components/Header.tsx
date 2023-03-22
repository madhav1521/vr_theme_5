import { alpha, Box, Button, InputBase, SelectChangeEvent, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react'
import {  useNavigate } from 'react-router';
import { black_arrow, cmp_logo, notification, profile, searchicon, toggleicon } from '../Assets/Images';
import Dropdown from './Dropdown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SearchIcon from '@mui/icons-material/Search';  


export default function Header() {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [alignment, setAlignment] = React.useState<string | null>('left');
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const [status, setStatus] = React.useState(true)
  const [search,setSearch] =React.useState(true)
    function toggle (){
      document.body.classList.toggle('setStatus')
    }
   

    function searchbar(){
      document.body.classList.toggle('setSearch')
    }

  return (
    <div>
      <div className='overlay' onClick={toggle}></div>
        <div className="header">
          <Box className="leftnav">
            {/* <ToggleButtonGroup
              value={alignment}
              className="toggle-btn"
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned" >
                <FormatAlignLeftIcon  color="warning" />
              </ToggleButton>
            </ToggleButtonGroup> */}
             <Button onClick={searchbar} className="toggle-icon">
              <img src={toggleicon} alt="" className="toggle" onClick={toggle} />
            </Button>
            
            <img src={cmp_logo} alt="" className="brand" /> 

            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            
            {/* <div className="search-input">
              <input type="search" className="form-control"  placeholder="Search" ></input>
            </div> */}
            <Button onClick={searchbar} className="btn-close-search btn-close"><CloseRoundedIcon color="primary"/></Button> 

            <Button className="search-btn" onClick={searchbar}>
              <img src={searchicon} alt="search-icon" />
            </Button>
          </Box>

          <Box className="rightnav" marginRight="27px">

            <Dropdown img={notification} />

            <Dropdown img={profile} name="John Doe" arrow={black_arrow} />
          </Box>
        </div>
    </div>
  )
}
