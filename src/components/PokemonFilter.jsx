import {TextField} from "@mui/material"

import React from "react"

const PokemonFilter = ({setFilter}) => {
    return <TextField sx={{width: '100%'}} label='Find...' variant="filled" onChange={(e) => setFilter(e.target.value)}></TextField>
}

export default PokemonFilter