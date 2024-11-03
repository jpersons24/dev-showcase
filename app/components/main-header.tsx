import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import NavLink from './nav-link';

type MenuItem = MenuItemType;

const menuItems: MenuItem[] = [
  { key: 'about', label: <NavLink href='/about'>About Me</NavLink> },
  { key: 'blog', label: <NavLink href='/blog'>Blog</NavLink> },
  { key: 'showcase', label: <NavLink href='/showcase'>Showcase</NavLink> },
  { key: 'formula1', label: <NavLink href='/formula'>Formula 1</NavLink> },
];

export default function MainHeader() {
  return (
    <header id='main-header'>
      <Menu
        style={{ width: '100%', background: 'none', border: 'none' }}
        mode='horizontal'
        items={menuItems}
        id={'nav-menu'}
      />
    </header>
  );
}
