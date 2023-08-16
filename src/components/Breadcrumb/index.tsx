'use client'
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import './index.scss';
import { urlToList } from '@/utils';
import { getMenus } from '@/config/router';

const findTitleByPath = (path: string) => {
  let result = {
    title: '',
    parentTitle: '',
  };
  getMenus().forEach((menu) => {
    if (menu.subMenu) {
      menu.subMenu.forEach((item) => {
        if (item.path === path) {
          result = {
            title: item.title,
            parentTitle: menu.title,
          };
        }
      });
    }
  });
  return result;
};

export const BreadcrumbView = () => {
  const pathname = usePathname();

  let path = urlToList(pathname);
  if (path.length === 0) {
    path = ['/dashboard'];
  }
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <span>{findTitleByPath(pathname).parentTitle}</span>
      </Breadcrumb.Item>

      {path[1] && (
        <Breadcrumb.Item>
          <span>{findTitleByPath(pathname).title}</span>
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};
