import { Box, Typography } from "@mui/material"

const SobreProjeto = () => {
    return(
        <Box sx={{ backgroundColor: 'black', height: '800px', fullWidth: true }}>
            <Typography sx={{
                color: 'white',
                display: 'flex',
                fontWeight: 700,
                alignItems: 'center',
                letterSpacing: '.2rem',
                fontFamily: 'Pokemon X and Y'
            }}>
                Sobre o Projeto
            </Typography>
        </Box>
    )
}

export default SobreProjeto