import axios from "./API/axios";
import { useEffect, useState } from "react";
import "./index.css";

const Display = () => {
	const [myData, setMyData] = useState([]);
	const [isError, setIsError] = useState("");

	// METHOD #1
	// useEffect(() => {
	// 	axios
	// 		.get("https://6506a0c63a38daf4803e8937.mockapi.io/project1")
	// 		.then((res) => setMyData(res.data))
	// 		.catch((err) => setIsError("Error: Couldn't find the data"));
	// }, []);

	const getApiData = async () => {
		try {
			const res = await axios.get("/project1");
			setMyData(res.data);
		} catch (err) {
			setIsError(err.message);
		}
	};

	useEffect(() => {
		getApiData();
	}, []);

	return (
		<>
			{isError !== "" && (
				<h2
					style={{
						color: "red",
						fontSize: "28px",
						fontWeight: "bold",
						display: "flex",
					}}>
					{isError.toUpperCase()}
				</h2>
			)}
			{myData.map((post) => {
				const { id, name, contact, email } = post;
				return (
					<div className="content" key={id}>
						<h2>{name.toUpperCase()}</h2>
						<p>{email}</p>
						<p>{contact}</p>
					</div>
				);
			})}
		</>
	);
};

export default Display;
