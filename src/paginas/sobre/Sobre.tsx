import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import './Sobre.css';

function Sobre() {
    return (
        <>
        <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={6} alignItems={'center'}>
                <Box paddingX={20}>

                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold'}}>Sobre nós</Typography>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight:'bold'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et nemo laudantium numquam esse omnis unde voluptas. Exercitationem ullam quibusdam modi tenetur iure in quidem et, nihil sunt, totam dolor. </Typography>

                </Box>
                </Grid>
                <Grid className='imageLogo' item xs={6}>  </Grid>
            </Grid>
        </>
    )
}

export default Sobre
