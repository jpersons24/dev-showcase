'use server';

const BASE_API = 'https://api.openf1.org/v1';

export async function getLatestRaceSessionKey(): Promise<[]> {
  // session_type: Race;
  // meeting_key: latest;
  let data;
  try {
    const response = await fetch(
      `${BASE_API}/sessions?session_type=Race&meeting_key=latest`
    );
    data = await response.json();
    // console.log(data);
  } catch (err) {
    throw new Error(`ERROR: ${err}`);
  }

  return data;
}

export type Driver = {
  session_key: number;
  meeting_key: number;
  broadcast_name: string;
  country_code: string;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  driver_number: number;
  team_colour: string;
  team_name: string;
  name_acronym: string;
};

export async function getDrivers(): Promise<Driver[]> {
  let driverData;

  try {
    const response = await fetch(
      'https://api.openf1.org/v1/drivers?meeting_key=latest&session_key=latest'
    );
    driverData = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return driverData;
}
