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
	store.planetas.map(element => {
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
	});
	return (
		<div className="container character">
			<div className="row">
				<div className="col-6">
					<img src="https://i.pinimg.com/originals/94/51/13/94511343f06c6db611a64c59d6164085.gif" alt="" />
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
					Population:
					<br />
					{propiedades.population}
				</div>
				<div>
					Climate:
					<br />
					{propiedades.climate}
				</div>
				<div>
					Terrain:
					<br />
					{propiedades.terrain}
				</div>
				<div>
					Surface water:
					<br /> {propiedades.surface_water}
				</div>
				<div>
					Diameter:
					<br /> {propiedades.diameter}
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
