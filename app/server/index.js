import axios from "axios";

const BackendApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const getDashboardData = async () => {
	const response = await BackendApi.get("/dashboard");
	return response.data;
}



