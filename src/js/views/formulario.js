import React, { useState } from "react";



export function Formulario () {

    const [full_name, setFull_name] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")


    const handleAgregarTaco = () => {
		fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"full_name": full_name,
				"email": email,
				"agenda_slug": "chucho_esta_presente",
				"address": address,
				"phone": phone
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				// setAnimal([...animal, data]);
                console.log(data)
			})
			.catch((error) => console.log("error", error));
	};


    return (
        <div className="container d-flex justify-content-center bg-light p-5">
        <form className="contenido_formulario" onSubmit={(e) => e.preventDefault()}>

			<div className="m-2 contenido_inputs">
			<label htmlFor="full_name">Full name</label>
			<input type="text" id="full_name" placeholder="Full name"
            value={full_name} onChange={(e) => setFull_name(e.target.value)}
            ></input>
			</div>
			
			<div className="m-2 contenido_inputs">
			<label htmlFor="email">Email</label>
			<input type="email" id="email" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            ></input>
			</div>
			

			<div className="m-2 contenido_inputs">
			<label htmlFor="address">Address</label>
			<input type="text" id="address" placeholder="Address"
            value={address} onChange={(e) => setAddress(e.target.value)}
            ></input>
			</div>
			
            <div className="m-2 contenido_inputs">
			<label htmlFor="phone">Phone</label>
			<input type="text" id="phone" placeholder="Phone"
            value={phone} onChange={(e) => setPhone(e.target.value)}
            ></input>
			</div>

            <button onClick={handleAgregarTaco} className="btn btn-success">Save</button>
			
		</form>
        </div>
    )
}