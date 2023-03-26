import { Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { star } from '../Assets/Images'

export default function sticker(props:any) {
  return (
    <div>
      <Card component={Paper}>
        <Grid container className='card' >
            <Grid item xs={6} sm={3}>
                <img src={props.image} alt={props.alt} />
            {/* </Grid>
            <Grid item xs={12} sm={9}> */}
                <Typography component="h3" variant="h5" className='card-numbers'>{props.numbers}</Typography>
                <Typography component="h6" variant="body2" className='card-text'>{props.text}</Typography>
            </Grid>
        </Grid>
      </Card>
    </div>
  )
}
        {/* <Sticker image={star} alt="star" numbers="23,456" text="New Products" />
            <Sticker image={add_product} alt="add product" numbers="2345" text="Added Products" />
            <Sticker image={layer} alt="layer image" numbers="32,456" text="Total Products" />
            <Sticker image={dollar} alt="dollar image" numbers="5678" text="Today’s Sale" />
            <Sticker image={money_bag} alt="bag image" numbers="33,5342" text="Total Sale" /> */}