import { getRacesByYear } from '@/app/actions';

export default async function RacesPage() {
  const races = await getRacesByYear('2024');
  return (
    <div>
      {races.map((race) => {
        return (
          <div key={race.meeting_key}>
            <h1>{race.meeting_name}</h1>
            <p>Country: {race.country_name}</p>
            <p>City: {race.location}</p>
            <p>Circuit: {race.circuit_short_name}</p>
          </div>
        );
      })}
    </div>
  );
}
