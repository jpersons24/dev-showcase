'use server';

import { Driver, Race, Lap, Session } from './types';

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

// function to get race session using meeting_key
// will return session
export async function getSession(meeting_key: number): Promise<Session> {
  let data;

  try {
    const response = await fetch(
      `${BASE_API}/sessions?session_type=Race&session_name=Race&meeting_key=${meeting_key}`
    );
    data = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return data[0];
}

export async function getLapsByDriver(
  sessionKey: string,
  driverNumber: string
): Promise<Lap[]> {
  let data;

  try {
    const response = await fetch(
      `${BASE_API}/laps?session_key=${sessionKey}&driver_number=${driverNumber}`
    );
    data = await response.json();
  } catch (err) {
    throw new Error(`There was an error: ${err}`);
  }

  return data;
}
