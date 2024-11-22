import { FC } from "react";
import TodosList from "../../components/TodosList/TodosList";

const TodoPage: FC = () => {
	return (
		<div className="page-wrapper">
			<h1>Todos</h1>
			<TodosList />
		</div>
	);
};

export default TodoPage;
