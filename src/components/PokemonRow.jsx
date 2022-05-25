import React from "react"
import {TableRow, TableCell, Button} from "@mui/material"
const PokemonRow = ({pokemon, setSelectedPokemon}) => {
    return(
        <TableRow >
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(" - ")}</TableCell>
            <TableCell align="center" ><Button variant="contained" onClick={() => setSelectedPokemon(pokemon)}>Info</Button></TableCell>
        </TableRow>
    )
}

export default PokemonRow