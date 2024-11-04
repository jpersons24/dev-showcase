'use server';

import { Driver, Race } from './types';

const BASE_API = 'https://api.openf1.org/v1';

export async function getDrivers(): Promise<Driver[]> {
  let data;

  try {
    const response = await fetch(
      `${BASE_API}/drivers?meeting_key=latest&session_key=latest`
    );
    data = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return data;
}

export async function getDriverByNumber(driverNumber: number): Promise<Driver> {
  let data;

  try {
    const response = await fetch(
      `${BASE_API}/drivers?meeting_key=latest&session_key=latest&driver_number=${driverNumber}`
    );
    data = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return data[0];
}

export async function getRacesByYear(year: string): Promise<Race[]> {
  let data;

  try {
    const response = await fetch(`${BASE_API}/meetings?year=${year}`);
    data = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return data;
}
