import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/cards.scss";
const Character = props => {
	let [propiedades, setPropiedades] = useState({});
	let params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);
	let url;
	store.personas.map(element => {
		if (params.id === element.uid) {
			url = element.url;
		}
	});
	useEffect(() => {
		fetch(url)
			.then(data => data.json())
			.then(data => {
				let properties = data.result.properties;
				setPropiedades(properties);
			});
	}, []);
	return (
		<div className="container character">
			<div className="row">
				<div className="col-6">
					<img
						src="https://cdn.statically.io/img/i.pinimg.com/originals/10/44/81/104481797596426f291079b37cd65294.gif"
						alt=""
					/>
				</div>
				<div className="col-6">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nulla, accusantium quasi
						necessitatibus eveniet labore cumque ipsa libero accusamus, ipsum excepturi, facere repellendus
						assumenda possimus id! Tempore nemo quisquam ab!
					</p>
				</div>
			</div>
			<div className="propiedades">
				<div>
					Name: <br />
					{propiedades.name}
				</div>
				<div>
					BirthYear:
					<br />
					{propiedades.birth_year}
				</div>
				<div>
					Gender:
					<br />
					{propiedades.gender}
				</div>
				<div>
					Height:
					<br />
					{propiedades.height}
				</div>
				<div>
					Skin Color:
					<br /> {propiedades.skin_color}
				</div>
				<div>
					Eyes Color:
					<br /> {propiedades.eye_color}
				</div>
				<div className="tc">
					<button
						onClick={() => {
							history.goBack();
						}}
						className="btn btn-success come">
						Come Back{" "}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Character;
