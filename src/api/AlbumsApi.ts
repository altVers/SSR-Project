import { Albums, Photos } from "../models";
import { BASE_URL } from "./config";

export const getAlbums = async (): Promise<Albums> => {
	const url = `${BASE_URL}/users/1/albums`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const getPhotos = async (albumId: number): Promise<Photos> => {
	const url = `${BASE_URL}/albums/${albumId}/photos`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
