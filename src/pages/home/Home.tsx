import React from "react";
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import TabProduto from "../../components/produtos/tabProduto/TabProduto";
import Perguntas from "../../components/perguntas/Perguntas";

function Home(){
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Cadastre seus aliemntos e venda conosco!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Meus Produtos</Button>
                    </Box>
                    <Perguntas/>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://raw.githubusercontent.com/TerraVerdePI/Front-End_Projeto_Integrador/35a693784fbd471d6eec42f58e4d70af7676d7fc/src/assets/frutasHome.png" alt="" width="700px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
            <TabProduto/>
        </>
    );
}

export default Home;