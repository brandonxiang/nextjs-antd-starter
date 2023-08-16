'use client'

import { Menu as AntMenu } from 'antd';
import Link from 'next/link'
import { MenuProps as AntMenuProps } from 'antd/lib/menu';

interface MenuItem {
  path: string;
  title?: string;
  icon?: string;
  redirect?: string;
  subMenu?: MenuItem[];
  noMenu?: boolean;
  ret?: boolean;
}

type MenuProps = {
  menu: MenuItem[];
} & AntMenuProps;

const renderMenuItem = (item: MenuItem) => (
  <AntMenu.Item
    key={item.path}
    onClick={() => {
      if (item.redirect) {
        window.location.href = item.redirect;
      }
    }}
  >
    {item.ret ? (
      <div>
        {item.icon}
        <span className="nav-text">{item.title}</span>
      </div>
    ) : (
      <Link href={item.redirect || item.path}>
        {item.icon}
        <span className="nav-text">{item.title}</span>
      </Link>
    )}
  </AntMenu.Item>
);

const renderSubMenu = (item: MenuItem) => (
  <AntMenu.SubMenu
    key={item.path}
    title={
      <span>
        {item.icon}
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item
      .subMenu!.filter((item) => !item.noMenu)
      .map((item) => renderMenuItem(item))}
  </AntMenu.SubMenu>
);

export const BaseMenu = ({ menu, ...props }: MenuProps) => (
  <AntMenu {...props}>
    {menu.map((item) => {
      return item.subMenu ? renderSubMenu(item) : renderMenuItem(item)
    }
      
    )}
  </AntMenu>
);
