import React from 'react';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

const menus: MenuType[] = [
  {
    path: '/',
    title: 'Home',
    icon: <HomeOutlined />,
    subMenu: [
      {
        path: '/home',
        title: 'Home',
        icon: <UnorderedListOutlined />,
      },
    ],
  },
];

export const getMenus = () => {
  return menus;
};
