import { FC } from "react";
import { Photos } from "../../models";
import Api from "../../api/api";
import "./index.css";

type Props = {
	albumId: number;
};

const Album: FC<Props> = async ({ albumId }: Props) => {

	const getData =  async (): Promise<Photos> => {
		const data = await Api.getPhotos(albumId);
		return (data)
	};

	const data = await getData()

	return (
		<div className="album-container">
			{data.map((photo, index) => (
				<div className="photo-container" key={index}>
					<img src={photo.url} className="photo-img" alt="" />
				</div>
			))}
		</div>
	);
};

export default Album;
