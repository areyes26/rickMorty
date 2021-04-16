import React , {Component} from 'react'


class Tarjeta extends Component {
	constructor(props){
		super(props);
		this.state={
			colorOriginal: "#8F9985",
			colorAlt:"red",
			color: "#8F9985",
		}
	};

	cambiarColor=(colorNuevo)=>{
		
		if(this.state.color === this.state.colorOriginal)
			this.setState({color: colorNuevo})
		else
			this.setState({color: this.state.colorOriginal})
		
		};

	render (){
		return(
			<div 
			className="tarjeta"
			onMouseOver={()=>{this.cambiarColor("#5C6454")}}
			onMouseOut={()=>{this.cambiarColor(this.state.colorOriginal)}}
			style={{backgroundColor: this.state.color }}
			>
			<img src={""+this.props.personaje.image+""} alt=""></img>
			<div>
			<h2>{this.props.personaje.name}</h2>
			<h3>{this.props.personaje.species} - {this.props.personaje.status}</h3>
			<h3>{this.props.personaje.origin.name}</h3>
			<button 
			onClick={()=>{this.cambiarColor(this.state.colorAlt)}}
			>Cambiar Color</button>
			<br/>
			<button>
			Eliminar Tarjeta
			</button>
			</div>
	  		</div>
		)
	}
}

export default Tarjeta

/*	

	*/ 
