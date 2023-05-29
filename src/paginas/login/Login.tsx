import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box, colors } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { start } from 'repl';


function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })
    
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')

        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, usuarioLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/fOHICkH.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '102vh', backgroundSize: 'cover', backgroundPosition: 'center'    
            }}>

            </Grid>
            <Grid alignItems='center' xs={6}>
            {/*<Box  alignContent={'start'} maxHeight={2} maxWidth={2}>
                <img src="https://i.imgur.com/vbc1Bd5.png" alt="Logo Terra Verde" className='logoImage'/>
        </Box>  */}
                <Box paddingX={20} >
                    <form onSubmit={onSubmit}>
                    
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3'  className='bemvindo'>
                            SEJA
                        </Typography>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3'   className='bemvindo'>
                            BEM VINDO
                        </Typography>
                        <Box marginTop={5} width={400}>
                        <Typography variant='subtitle2' style={{marginBottom:-15}}>
                            Faça login para continuar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth value={usuarioLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}> </TextField>
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth value={usuarioLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} > </TextField>
                        <Link to={''} className='text-decorator-none'>
                        <Typography variant='subtitle2' style={{marginTop:10, display:'flex', justifyContent:'end'}}>
                            Esqueceu sua senha?</Typography>
                            </Link>
                        </Box>
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary' className='btnLogin'>
                                Login
                            </Button>

                        </Box>
                    </form>
                    
                </Box>
                <Box display='flex' justifyContent='center' marginTop={10}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Ainda não é TerraVerdista?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='cadastro'>Crie uma conta</Typography>
                        </Link>
                    </Box>
            </Grid>
            
        </Grid>
    );
}

export default Login;
