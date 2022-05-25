import React from "react"
import PokemonRow from "./PokemonRow"
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"
const PokemonTable = ({data, filter, setSelectedPokemon}) => {
    return(
        <TableContainer style={{boxShadow:'1px 1px 2px 3px rgba(0, 0, 0, 0.2)'}} component={Paper} sx={{display: 'flex', mt:2}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                     {data
                        .filter(({name: {english}}) => english.toLowerCase().includes(filter.toLowerCase()))
                        .slice(0, 10)
                        .map((pokemon) => 
                            <PokemonRow key={pokemon.id} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon}></PokemonRow>
                     )}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default PokemonTable