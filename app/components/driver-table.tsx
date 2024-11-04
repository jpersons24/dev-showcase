'use client';

import { Table } from 'antd';
import type { TableProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Driver } from '@/app/types';

interface DriverTableData extends Driver {
  key: number;
}

interface DriverTableProps {
  data: Driver[];
}

export default function DriverTable({ data }: DriverTableProps) {
  const path = usePathname();

  const driverTableData: DriverTableData[] = data.map((driver) => {
    return { ...driver, key: driver.driver_number };
  });

  const columns: TableProps<Driver>['columns'] = [
    {
      title: 'Driver',
      dataIndex: 'full_name',
      key: 'driver',
      render: (_, record) => {
        return (
          <Link href={`${path}/${record.driver_number}`}>
            {record.full_name}
          </Link>
        );
      },
    },
    {
      title: '#',
      dataIndex: 'driver_number',
      key: 'number',
    },
    {
      title: 'Country',
      dataIndex: 'country_code',
      key: 'country',
    },
    {
      title: 'Team',
      dataIndex: 'team_name',
      key: 'team',
      render: (_, record) => {
        const colorString = `${'#' + record.team_colour}`;
        return <p style={{ color: colorString }}>{record.team_name}</p>;
      },
    },
  ];

  return <Table dataSource={driverTableData} columns={columns} />;
}
