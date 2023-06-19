import { Box, Container, Typography } from "@mui/material"

const Home = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ backgroundColor: 'black', height: '500px', fullWidth: true }}>
                <Typography sx={{
                    color: 'white',
                    display: 'flex',
                    fontWeight: 700,
                    alignItems: 'center',
                    letterSpacing: '.2rem',
                    fontFamily: 'Pokemon X and Y'
                }}>
                    Home
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: '#141A40', height: '200px', fullWidth: true }}>
            </Box>
        </Container>
    )
}

export default Home