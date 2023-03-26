import { Typography } from '@mui/material'
import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default function Setting() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <div className="wrapper">
          <div className="leftsection">
            <Sidebar />
          </div>
          <div className="main-content">
            <Typography component="h2" variant="h4" className="page-title">
              Setting
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
