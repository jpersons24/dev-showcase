'use client';

import React, { useState } from 'react';

import { Menu, MenuProps } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type MenuItem = MenuItemType;

const menuItems: MenuItem[] = [
  { key: 'about', label: <Link href='/about'>About Me</Link> },
  { key: 'blog', label: <Link href='/blog'>Blog</Link> },
  { key: 'showcase', label: <Link href='/showcase'>Showcase</Link> },
  { key: 'formula', label: <Link href='/formula'>Formula 1</Link> },
];

export default function MainHeader() {
  const path = usePathname();
  const [currentKey, setCurrentKey] = useState<string>(path.substring(1));

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentKey(e.key);
  };

  return (
    <header id='main-header'>
      <Menu
        style={{ width: '100%', background: 'none', border: 'none' }}
        mode='horizontal'
        items={menuItems}
        id={'nav-menu'}
        onClick={onClick}
        selectedKeys={[currentKey]}
      />
    </header>
  );
}
