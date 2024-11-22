import { Todos } from "../models";
import { BASE_URL } from "./config";

export const getTodos = async (): Promise<Todos> => {
	const url = `${BASE_URL}/users/1/todos`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
