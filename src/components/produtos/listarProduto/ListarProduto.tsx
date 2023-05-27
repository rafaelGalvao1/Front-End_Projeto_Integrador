import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produtos from '../../../model/Produtos';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListarProduto.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {Box} from '@mui/material';

function ListarProduto() {
  const [produtos, setProdutos] = useState<Produtos[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProdutos()

  }, [produtos.length])

  return (
    <>
      {
        produtos.map(produtos => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produtos.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produtos.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {produtos.categoria?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/cadastrarProduto/${produtos.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${produtos.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListarProduto;