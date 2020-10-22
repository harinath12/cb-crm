import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Leads',
    icon: 'home-outline',
    link: '/pages/leads',
  },
  {
    title: 'Reports',
    icon: 'home-outline',
    link: '/pages/leads/reports',
  },
  {
    title: 'Users',
    icon: 'people',
    link: '/pages/leads/user',
  },
  {
    title: 'User Role',
    icon: 'home-outline',
    link: '/pages/leads/user-role',
  }
];
