import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

const settings = [
    {
        nome: 'Perfil',
        link: ''
    },
    {
        nome: 'Cadastrar Produto',
        link: '/formularioProduto'
    },
    {
        nome: 'Cadastrar Categoria',
        link: '/formularioCategoria'
    },
    {
        nome: 'Recomendações',
        link: ''
    },
]

const pages = [
    {
        nome: 'Inicio',
        link: '/home'
    },
    {
        nome: 'Meus Produtos',
        link: '/produtos'
    },
    {
        nome: 'Minhas Categorias',
        link: '/categorias'
    },
    {
        nome: 'BlogTV',
        link: ''
    }

    
]

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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

        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#1fb8f5" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Terra Verde
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.nome} style={{ display: "block", margin: "10px" }} onClick={handleCloseNavMenu}>
                                    <Link to={page.link} className="text-decorator-none">
                                        <Typography textAlign="center" color="inherit" style={{ color: 'black' }}>{page.nome}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Terra Verde
                    </Typography>
                    <Box gap={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.nome}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#ffff', display: 'block' }}
                                style={{ color: "#ffff" }}
                            >
                                <Link to={page.link} className="text-decorator-none">
                                    <Typography textAlign="center" color="inherit" style={{ color: 'white' }}>{page.nome}</Typography>
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Foto Perfil" src="https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.nome} style={{ display: "block", margin: "10px" }} onClick={handleCloseUserMenu}>
                                    <Link to={setting.link} className="text-decorator-none">
                                        <Typography textAlign="center" color="inherit" style={{ color: 'black' }}>{setting.nome}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem style={{ display: "block", margin: "10px" }}>
                                <Typography onClick={goLogout} textAlign="center" color="inherit" style={{ color: 'black' }}>Sair</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>


    }

    return (
        <>
            {navbarComponent}
        </>
    )
};

export default Navbar;