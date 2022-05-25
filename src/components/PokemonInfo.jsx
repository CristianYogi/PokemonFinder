import React from "react";
import {Card, CardContent, CardActions, Typography, Button} from "@mui/material"

const PokemonInfo = ({name: {english}, base, setSelectedPokemon}) => {
    return(
       <Card sx={{marginLeft:'10%',height:350, width:280, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
           <CardContent>
                <Typography variant="h5" gutterBottom>{english}</Typography>
                {Object.keys(base).map((key) => {
                    return <Typography key={key}>{key}: {base[key]}</Typography>
                })}
           </CardContent>
           <CardActions>
               <Button variant="text" color="warning" onClick={() => setSelectedPokemon(null)}>Cerrar</Button>
           </CardActions>
       </Card>
    )
}

export default PokemonInfo