import AlbumsList from "../../components/AlbumsList/AlbumsList";
import { FC } from "react";

const AlbumsPage: FC = () => {
	return (
		<div className="page-wrapper">
			<h1>Albums</h1>
			<AlbumsList />
		</div>
	);
};

export default AlbumsPage;
