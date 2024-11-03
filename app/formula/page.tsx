import React from 'react';
import { getDrivers, Driver } from '@/app/actions';
import { Table } from 'antd';
import type { TableProps } from 'antd';

async function FormulaOnePage() {
  const drivers = await getDrivers();

  const columns: TableProps<Driver>['columns'] = [
    {
      title: 'Driver',
      dataIndex: 'full_name',
      key: 'driver',
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
    },
  ];
  return (
    <div>
      <h1>Current Formula 1 Drivers</h1>
      <Table columns={columns} dataSource={drivers} />
    </div>
  );
}

export default FormulaOnePage;
