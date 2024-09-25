import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import Link from 'next/link';
import NavLink from './nav-link';
import PartyTime from './party-time';

type MenuItem = MenuItemType;

const menuItems: MenuItem[] = [
  { key: 'about', label: <NavLink href='/about'>About Me</NavLink> },
  { key: 'blog', label: <NavLink href='/blog'>Blog</NavLink> },
  { key: 'showcase', label: <NavLink href='/showcase'>Showcase</NavLink> },
];

export default function MainHeader() {
  return (
    <header id={'main-header'}>
      <div id='logo'>
        <Link href='/'>DevShowcase</Link>
      </div>
      <Menu
        style={{ width: '100%', background: 'none', border: 'none' }}
        mode='horizontal'
        items={menuItems}
      />
      <PartyTime />
    </header>
  );
}
