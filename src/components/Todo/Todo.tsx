import { Card } from "antd";
import { FC } from "react";
import { ITodo } from "../../models";

type Props = {
	todo: ITodo;
};

const Todo: FC<Props> = ({ todo }: Props) => {
	return (
		<Card title={todo.title} size="small">
			<p>{todo.completed ? "Done" : "To do"}</p>
		</Card>
	);
};

export default Todo;
