import { Box, Button, SelectChangeEvent } from '@mui/material';
import React from 'react'
import {  useNavigate } from 'react-router';
import { black_arrow, cmp_icon, cmp_logo, notification, profile, searchicon, toggleicon } from '../Assets/Images';
import Dropdown from './Dropdown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


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

  const [status, setStatus] = React.useState(true)
  const [search,setSearch] =React.useState(true)
    function toggle (){
      document.body.classList.toggle('setStatus')
      // searchbar();
    }
    function searchbar(){
      document.body.classList.toggle('setSearch')
    }

  return (
    <>
      <div className='overlaysearch' onClick={searchbar}></div>
      <div className='overlay' onClick={toggle}></div>
        <div className="header">
          {/* Right header section starts
          ----------------------------------------------------------------------------------------------------------------------------------- */}
          <Box className="leftnav">
             <Button  className="toggle-icon">
              <img src={toggleicon} alt="" className="toggle" onClick={toggle} />
            </Button>
            <img src={cmp_logo} alt="" className="brand"  onClick={() => {navigate("/");}}/> 
            <img src={cmp_icon} alt="" className="brand-icon"  onClick={() => {navigate("/");}}/> 
            <div className="search-input">
              <input type="search" className="form-control"  placeholder="Search" ></input>
            </div>
            <Button onClick={searchbar} className="btn-close-search btn-close"><CloseRoundedIcon color="primary" /></Button> 
            
          </Box>
          {/* Right header section starts
          ----------------------------------------------------------------------------------------------------------------------------------- */}
          <Box className="rightnav" marginRight="27px">
            <Button className="search-btn" onClick={searchbar}>
              <img src={searchicon} alt="search-icon" />
            </Button>
            <Dropdown img={notification} classname="menu bell" />
            <Dropdown img={profile} name="John Doe" arrow={black_arrow} classname="menu" />
          </Box>
        </div>
    </>
  )
}