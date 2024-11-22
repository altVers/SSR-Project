import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

type Props = {
	children?: ReactNode[];
};

const items = [
	{ key: 0, label: <Link to={"/"}>Home</Link> },
	{ key: 1, label: <Link to={"/posts"}>Posts</Link> },
	{ key: 2, label: <Link to={"/albums"}>Albums</Link> },
	{ key: 3, label: <Link to={"/todos"}>Todos</Link> },
];

const CusomLayout: FC<Props> = () => {
	return (
		<Layout className="layout">
			<Header className="header">
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["0"]}
					items={items}
					style={{ flex: 1, minWidth: 0 }}
				/>
			</Header>
			<Content className="content">
				<Outlet />
			</Content>
			<Footer className="footer">Footer</Footer>
		</Layout>
	);
};

export default CusomLayout;
