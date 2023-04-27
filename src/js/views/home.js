import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [tacos, setTacos] = useState([])


	const comerTacos = async () => {
		const response = await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/chucho_esta_presente')
		const data = await response.json()
		console.log(data)
		setTacos(data)
	}

	useEffect(() => {
		comerTacos()
	}, [])


	const handleEliminarTaco = (taco) => {
		const newTacos = tacos.filter((t) => t !== taco);
		
		fetch(`https://assets.breatheco.de/apis/fake/contact/${taco.id}`, {
		  method: "DELETE",
		  headers: {
			"Content-Type": "application/json",
		  },
		})
		  .then((response) => response.json())
		  .then(() => {
			setTacos(newTacos);
		  })
		  .catch((error) => console.log("error", error));
	  };
	  

	
	return (
		<div className="text-center mt-5 row">

			{tacos.map((taco, index) => (
				<div key={index} className="col card">
					<p>{taco.full_name}</p>
					<p>{taco.email}</p>
					<Link to={`/formularioEdit/${taco.id}`}>
					<button className="btn btn-warning">Editar</button>
					</Link>
					<div>
					<button onClick={() => handleEliminarTaco(taco)} className="btn btn-danger">Delete</button>
					</div>
				</div>
			))}


		</div>
	)
};
