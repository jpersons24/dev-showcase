'use server';

import { Driver } from './types';

const BASE_API = 'https://api.openf1.org/v1';

export async function getDrivers(): Promise<Driver[]> {
  let driverData;

  try {
    const response = await fetch(
      `${BASE_API}/drivers?meeting_key=latest&session_key=latest`
    );
    driverData = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return driverData;
}
