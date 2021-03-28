import React from 'react'

function Tarjeta (props){
    return(
		
		<div class="tarjeta">
			<img src={""+props.personaje.image+""} alt=""></img>
			<div>
			<h2>{props.personaje.name}</h2>
			<h3>{props.personaje.species} - {props.personaje.status}</h3>
			<h3>{props.personaje.origin.name}</h3>
			</div>
	  </div>
	  
)
}
export default Tarjeta