import { Space } from "antd";
import { FC } from "react";
import Api from "../../api/api";
import { Todos } from "../../models";
import Todo from "../Todo/Todo";

const getData = async (): Promise<Todos> => {
  const data = await Api.getTodos();
  return data;
};

const TodosList: FC = async () => {
  const data = await getData();

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      {data.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </Space>
  );
};

export default TodosList;
