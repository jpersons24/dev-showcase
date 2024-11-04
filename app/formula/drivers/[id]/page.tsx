import { getDriverByNumber } from '@/app/actions';

export default async function DriverPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const driver = await getDriverByNumber(id);

  const driverName = driver.first_name + ' ' + driver.last_name;
  return (
    <div>
      <h1>{driverName}</h1>
      <p>{`#${driver.driver_number}`}</p>
      <p>{`Team: ${driver.team_name}`}</p>
    </div>
  );
}
