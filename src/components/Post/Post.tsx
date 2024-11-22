import { Card } from "antd";
import { FC } from "react";
import { IPost } from "../../models";

type Props = {
	post: IPost;
};

const Post: FC<Props> = ({ post }: Props) => {
	return (
		<Card title={post.title} size="small">
			<p>{post.body}</p>
		</Card>
	);
};

export default Post;
