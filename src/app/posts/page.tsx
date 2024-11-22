import PostsList from "../../components/PostsList/PostsList";
import { FC } from "react";

const PostsPage: FC = () => {
	return (
		<div className="page-wrapper">
			<h1>Posts</h1>
			<PostsList />
		</div>
	);
};

export default PostsPage;
