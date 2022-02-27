import React from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import {Link, Outlet} from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


class Container extends React.Component {
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="container">
                <Header className="header">
                    <div className="logo" />
                    <Menu className={"header-menu"} mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="sidebar">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="容器化进展">
                                <Menu.Item key="1"><Link to={"ztjd"}>整体进度</Link></Menu.Item>
                                {/*<Menu.Item key="2">option2</Menu.Item>*/}
                                {/*<Menu.Item key="3">option3</Menu.Item>*/}
                                {/*<Menu.Item key="4">option4</Menu.Item>*/}
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="pod分析">
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Container;