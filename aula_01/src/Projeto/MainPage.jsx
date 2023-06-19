import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "@mui/material"
import SobreProjeto from "./SobreProjeto"
import Home from "./Home"
import Menu from "./Menu"

const MainPage = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Container sx={{mt: 8}}>
                <Routes>
                    <Route path="SobreProjeto" element={<SobreProjeto/>} />
                    <Route path="Home" element={<Home/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage