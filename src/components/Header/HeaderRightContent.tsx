'use client'
import { LogoutOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Avatar } from 'antd';
import styles from './index.module.scss';
import React from 'react';

interface HeaderProps {
  onMenuClick: (param: any) => void;
  user: {
    [key: string]: string;
  };
}

function HeaderRightContent (props: HeaderProps) {

  const { onMenuClick, user } = props;
  const { name, picture } = user;

  const HeaderMenu = (
    <Menu className={styles.menu} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        <span>logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={HeaderMenu} className={styles.right}>
      <span>
        <Avatar size="small" src={picture} alt="avatar" />
        <span className={styles.name}>{name}</span>
      </span>
    </Dropdown>
  );

}

export default HeaderRightContent;
