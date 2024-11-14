import DriverAndLaps from './DriverAndLaps';
import { getDriverByNumber, getRacesByYear } from '@/app/actions';

export default async function DriverPageWrapper({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const driver = await getDriverByNumber(id);
  const races = await getRacesByYear('2024');

  const raceOptions = races.map((r) => ({
    label: r.meeting_name,
    value: r.meeting_key.toString(),
  }));

  return (
    <div>
      <h1>{driver.first_name + ' ' + driver.last_name}</h1>
      <p>{`#${driver.driver_number}`}</p>
      <p>{`Team: ${driver.team_name}`}</p>
      <DriverAndLaps
        raceOptions={raceOptions}
        selectPlaceholder='Choose a race...'
        driver={driver}
      />
    </div>
  );
}
