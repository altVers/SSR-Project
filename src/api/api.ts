import { getAlbums, getPhotos } from "./AlbumsApi";
import { getPost, getPosts } from "./PostsApi";
import { getTodos } from "./TodosApi";

const Api = {
	getPosts,
	getPost,
	getAlbums,
	getPhotos,
	getTodos,
};

export default Api;
