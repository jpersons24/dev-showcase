import { getDrivers } from '@/app/actions';
import DriverTable from '@/app/components/driver-table';

export default async function DriversPage() {
  const drivers = await getDrivers();

  return (
    <div>
      <h1>Current Formula 1 Drivers</h1>
      <DriverTable data={drivers} />
    </div>
  );
}
