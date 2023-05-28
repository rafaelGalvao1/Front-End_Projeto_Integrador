import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {

        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense">
            <Box style={{ cursor: "pointer" }} >
                <Typography variant="h5" color="inherit">
                    Terra Verde
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to='/home' className='text-decorator-none'>
                    <Typography variant="h6" color="inherit" >
                        Início
                    </Typography>
                    </Link>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to='/produtos' className='text-decorator-none'>
                    <Typography variant="h6" color="inherit">
                        Produtos
                    </Typography>
                    </Link>
                </Box>
                <Link to='/sobre' className='text-decorator-none'>
                <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                    <Typography variant="h6" color="inherit">
                        Sobre Nós
                    </Typography>
                </Box>
                </Link>
                <Box mx={1} style={{ cursor: "pointer" }}>
                <Link to='/cadastrarproduto' className='text-decorator-none'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar Produto
                    </Typography>
                    </Link>
                </Box>
                <Link to='/login' className='text-decorator-none'>
                    <Box mx={1} style={{ cursor: "pointer", color: "white" }}>
                        <Typography onClick={goLogout} variant="h6" color="inherit">
                            Sair
                        </Typography>
                    </Box>
                </Link>
            </Box>

        </Toolbar>
    </AppBar>
    }

    return(<> 


        {navbarComponent}

    </>
    )
}
export default Navbar;