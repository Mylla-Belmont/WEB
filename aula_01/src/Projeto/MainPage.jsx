import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "@mui/material"
import CadernoPokemon from "./CadernoPokemon"
import SobreProjeto from "./SobreProjeto"
import Treinadores from "./Treinadores"
import Registrar from "./Registrar"
import Pokemon from "./Pokemon"
import Home from "./Home"
import Menu from "./Menu"

const MainPage = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Container sx={{mt: 8}}>
                <Routes>
                    <Route path="Home" element={<Home/>} />
                    <Route path="Pokemon" element={<Pokemon/>} />
                    <Route path="Registrar" element={<Registrar/>} />
                    <Route path="Treinadores" element={<Treinadores/>} />
                    <Route path="SobreProjeto" element={<SobreProjeto/>} />
                    <Route path="CadernoPokemon" element={<CadernoPokemon/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage