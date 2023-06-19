import React from "react";
import { AppBar, Container, Toolbar, Typography, Box, Menu, MenuItem, Button, Tooltip } from "@mui/material";
import AdbIcon from "@mui/icons-material/CatchingPokemon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import paisagem from "./images/paisagem.jpg";

const MyMenu = () => {
    const [anchorElPokemon, setAnchorElPokemon] = React.useState(null);
    const [caughtPokemons, setCaughtPokemons] = React.useState(0);

    const handleOpenPokemonMenu = (event) => {
        setAnchorElPokemon(event.currentTarget);
    };

    const handleClosePokemonMenu = () => {
        setAnchorElPokemon(null);
    };

    const handleCatchPokemon = () => {
        setCaughtPokemons(caughtPokemons + 1);
    };

    function pokemonDropMenu() {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir opções">
                    <Button
                        onClick={handleOpenPokemonMenu}
                        sx={{ my: 2, mx: 0, color: 'white', fontWeight: 700, }}
                    >
                        Pokédex
                    </Button>
                </Tooltip>
                <Menu
                    id="menu-appbar-pokemon"
                    anchorEl={anchorElPokemon}
                    open={Boolean(anchorElPokemon)}
                    onClose={handleClosePokemonMenu}
                    sx={{ marginLeft: 1 }}
                >
                    <MenuItem onClick={handleCatchPokemon}>
                        <Typography textAlign="center">Registrar</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClosePokemonMenu}>
                        <Typography textAlign="center">Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        );
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ backgroundImage: `url(${paisagem})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            My Pokédex
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0.1, display: { xs: 'flex', md: 'flex' } }}>
                        {pokemonDropMenu()}
                        <Button
                            onClick={() => alert('Pokémons!')}
                            sx={{ my: 2, mx: 0, color: 'white', fontWeight: 700, }}
                        >
                            Pokémons
                        </Button>
                        <Button
                            onClick={() => alert('Treinadores!')}
                            sx={{ my: 2, mx: 0, color: 'white', fontWeight: 700, }}
                        >
                            Treinadores
                        </Button>
                        <Button
                            onClick={() => alert('Sobre!')}
                            sx={{ my: 2, mx: 0, color: 'white', fontWeight: 700, }}
                        >
                            Sobre
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Tooltip title="Notificações">
                            <NotificationsIcon sx={{ color: 'white', mx: 1 }} />
                        </Tooltip>
                        <Tooltip title="Configurações">
                            <SettingsIcon sx={{ color: 'white', mx: 1 }} />
                        </Tooltip>
                        <Tooltip title="Perfil">
                            <AccountCircleIcon sx={{ color: 'white', mx: 1 }} />
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyMenu;