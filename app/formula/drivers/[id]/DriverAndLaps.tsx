'use client';

import React, { useMemo, useState } from 'react';
import { Select } from 'antd';
import styles from './DriverAndLaps.module.css';
import { getLapsByDriver, getSession } from '@/app/actions';
import { Driver, Lap } from '@/app/types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DriverAndLaps({
  raceOptions,
  selectPlaceholder,
  driver,
}: {
  raceOptions: { label: string; value: string }[];
  selectPlaceholder: string;
  driver: Driver;
}) {
  const [raceId, setRaceId] = useState<string | undefined>(undefined);
  const [currentLaps, setCurrentLaps] = useState<Lap[]>([]);

  async function getLaps(meeting_key: number): Promise<Lap[]> {
    const session = await getSession(meeting_key);
    const sk = session.session_key.toString();
    const dn = driver.driver_number.toString();
    const laps = await getLapsByDriver(sk, dn);
    return laps;
  }

  async function handleChange(value: string): Promise<void> {
    console.log('selected race:', value);
    setRaceId(value);

    const mk = Number(value);
    const laps = await getLaps(mk);
    setCurrentLaps(laps);
  }

  const lapData = useMemo(() => {
    return {
      labels: currentLaps.map((lap) => lap.lap_number),
      datasets: [
        {
          label: driver.last_name,
          data: currentLaps.map((lap) => lap.lap_duration),
          borderColor: `#${driver.team_colour}`,
          showLine: true,
        },
      ],
    };
  }, [currentLaps, driver.last_name, driver.team_colour]);

  return (
    <div className={styles.flexContainer}>
      <Select
        value={raceId}
        style={{ width: '25%' }}
        options={raceOptions}
        placeholder={selectPlaceholder}
        onChange={handleChange}
      />
      {currentLaps.length ? (
        <Line data={lapData} style={{ width: '75%' }} />
      ) : null}
    </div>
  );
}
