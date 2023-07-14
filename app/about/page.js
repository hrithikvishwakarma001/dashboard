"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const Api = axios.create({
	baseURL: "https://sulfuric-ringed-watchmaker.glitch.me",
});

export default function ServerComponent() {
	const [data, setData] = useState(null);

	async function fetchData() {
		const response = await Api.get("/dashboard");
		setData(response.data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<code>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</code>
	);
}
