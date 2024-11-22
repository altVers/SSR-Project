import { IPost, Posts } from "../models";
import { BASE_URL } from "./config";

export const getPosts = async (): Promise<Posts> => {
	const url = `${BASE_URL}/posts`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const getPost = async (postId: string): Promise<IPost> => {
	const url = `${BASE_URL}/posts/${postId}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};
