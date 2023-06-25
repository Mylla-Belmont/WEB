import { Box, Paper, Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CadernoPokemon = () => {

    const pokemons = [
        { id: 0, nome: "Bubasauro", habitat: "AQU" },
        { id: 1, nome: "Pikashu", habitat: "SEL" },
        { id: 2, nome: "Charmander", habitat: "VOL" },
        { id: 3, nome: "Squirtle", habitat: "AQU" },
        { id: 4, nome: "Bulbasaur", habitat: "PLA" }
    ]

    function deletePokemonById() {
        if (window.confirm("Vai me matar msm seu fdp?!"))
            alert("Pokemon morto com sucesso!")
    }

    const typeconfig = {
        color: "white",
        fontFamily: 'Pokemon X and Y',
        display:"flex",
        justifyContent:"center",
    };

    return (
        <Box>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={typeconfig}
            >
                Lista de pokemon
            </Typography>
            <TableContainer
                component={Paper}
                sx={{ mt: 4 }}
            >
                <Table
                    sx={{
                        minWidth: 650
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> ID </StyledTableCell>
                            <StyledTableCell> NOME </StyledTableCell>
                            <StyledTableCell> HABITAT </StyledTableCell>
                            <StyledTableCell> AÇÕES </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            pokemons.map(
                                (pokemon) => {
                                    return (
                                        <StyledTableRow key={pokemon.id}>
                                            <StyledTableCell> {pokemon.id} </StyledTableCell>
                                            <StyledTableCell> {pokemon.nome} </StyledTableCell>
                                            <StyledTableCell> {pokemon.habitat} </StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton 
                                                        aria-label="edit" 
                                                        sx={{ color: "#00e676" }}
                                                        component={Link}
                                                        to={`/Editar/${pokemon.id}`}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton 
                                                        aria-label="delete" 
                                                        sx={{ color: "#00e676" }}
                                                        onClick={()=>deletePokemonById(pokemon.id)}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>

            </TableContainer>
            <Box sx={{ height: '300px', backgroundColor: 'none' }} />
        </Box>
    )
}

export default CadernoPokemon