// Sidebar.js
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  FileOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={80} theme="dark" collapsible>
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<FileOutlined />} />
        <Menu.Item key="2" icon={<UserOutlined />} />
        <Menu.Item key="3" icon={<TeamOutlined />} />
        <Menu.Item key="4" icon={<SettingOutlined />} />
        <Menu.Item key="5" icon={<LogoutOutlined />} />
      </Menu>
    </Sider>
  );
};

export default Sidebar;
