import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import Link from 'next/link';

type MenuItem = MenuItemType;

const menuItems: MenuItem[] = [
  { key: 'drivers', label: <Link href='formula/drivers'>Drivers</Link> },
  { key: 'meetings', label: <Link href='formula/races'>Races</Link> },
];

export default function FormulaPage() {
  return (
    <div>
      <Menu
        style={{
          width: '15%',
          height: 'fit-content',
          border: `none`,
          background: 'none',
          borderRadius: '10px',
        }}
        items={menuItems}
      />
    </div>
  );
}
