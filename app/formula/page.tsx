import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import Link from 'next/link';

type MenuItem = MenuItemType;

const menuItems: MenuItem[] = [
  { key: 'drivers', label: <Link href='formula/drivers'>Drivers</Link> },
  { key: 'meetings', label: 'Races' },
];

export default function FormulaOnePage() {
  return (
    <div>
      <Menu
        style={{
          width: '15%',
          border: `none`,
          borderRadius: '10px',
        }}
        items={menuItems}
      />
    </div>
  );
}
