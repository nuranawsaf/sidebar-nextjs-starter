// export const links: LinkProps[] =
import { IconType } from 'react-icons';
import { IoMdSettings } from 'react-icons/io';
import {
  MdBarChart,
  MdMessage,
  MdOutlineHistory,
  MdViewList,
} from 'react-icons/md';
import { TiHome } from 'react-icons/ti';

export interface NavdataProps {
  id: number;
  title: string;
  icon: IconType;
  href: string;
}

export const navdata: Array<NavdataProps> = [
  {
    id: 1,
    title: 'Home',
    icon: TiHome,
    href: '/',
  },
  {
    id: 2,
    title: 'Order history',
    icon: MdOutlineHistory,
    href: '/orderhistory',
  },
  {
    id: 3,
    title: 'Messages',
    icon: MdMessage,
    href: '/messages',
  },
  {
    id: 4,
    title: 'Dashboard',
    icon: MdBarChart,
    href: '/dashboard',
  },
  {
    id: 5,
    title: 'Products',
    icon: MdViewList,
    href: '/products',
  },
  {
    id: 6,
    title: 'Settings',
    icon: IoMdSettings,
    href: '/setting',
  },
];
