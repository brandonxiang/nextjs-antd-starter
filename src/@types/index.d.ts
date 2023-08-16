interface MenuType {
  path: string;
  title: string;
  icon: any;
  noMenu?: boolean;
  hasPermission?: boolean;
  subMenu?: {
    path: string;
    title: string;
    icon: any;
    ret?: boolean;
    redirect?: string;
    noMenu?: boolean;
    hasPermission?: boolean;
  }[];
  redirect?: string;
}
