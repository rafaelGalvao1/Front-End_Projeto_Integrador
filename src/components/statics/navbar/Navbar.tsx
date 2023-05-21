import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(<> 

<AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Terra Verde
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" >
                                Início
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                        <Link to='/sobre' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Produto
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>


    </>)
}
export default Navbar;