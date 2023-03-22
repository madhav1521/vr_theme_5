import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { customers, successarrow } from '../Assets/Images'

export default function Sticker(props: any) {
    return (
        <div>
            <Card className="card">
                <Box>
                    <Typography component="h5" variant="h6" className="card-head">{props.heading}</Typography>
                </Box>
                <Box className="card-content">
                    <div className="left-card">
                        <div>
                            <Typography component="h5" variant="h6" className="card-num">{props.num}</Typography>
                        </div>
                        <div className="column-stat">
                            <Typography component="h6" variant="body1" className={props.class}><img src={props.arrow} alt="" /> {props.percentage}</Typography>
                            <Typography component="h6" variant="body2" className="month">Since Last Month</Typography>
                        </div>
                    </div>
                    <div className='right-card'>
                        <img src={props.cardimg} alt="" className='img-fluid sticker-img'/>
                    </div>
                </Box>
            </Card>
        </div>
    )
}
