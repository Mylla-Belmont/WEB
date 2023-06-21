import { Box, Container } from "@mui/material"
import pokemonCharizard from "./images/pokemonsCharizard.png"

const Home = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <img src={pokemonCharizard} alt="Charizard" style={{ width: '500px', height: 'auto' }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: '900px', weight: '200px', backgroundColor: 'none' }}>
                    {/* <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '30px',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        fontFamily: 'Pokemon X and Y'
                    }}>
                        Home
                    </Typography> */}
                </Box>
            </Box>
        </Container>
    )
}

export default Home