import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// driver interface was also defined and used to get data
// from OpenF1 api but was deleted after doing so as drivers
// will not change often throughout year

interface MeetingOpenF1 {
  meeting_key: number;
  meeting_name: string;
  year: number;
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_start: Date;
  location: string;
}

interface SessionOpenF1 {
  session_key: number;
  session_name: string;
  session_type: string;
  meeting_key: number;
  year: number;
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_start: Date;
  date_end: Date;
  location: string;
}

async function createConnection() {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
}

async function seedMeetings(connection: mysql.Connection) {
  try {
    const response = await fetch(
      'https://api.openf1.org/v1/meetings?year=2023'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const meetings: MeetingOpenF1[] = await response.json();

    for (const meeting of meetings) {
      await connection.execute(
        'INSERT INTO meetings (id, name, year, circuit_id, circuit_name, country_code, country_id, country_name, start_date, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          meeting.meeting_key,
          meeting.circuit_short_name,
          meeting.year,
          meeting.circuit_key,
          meeting.circuit_short_name,
          meeting.country_code,
          meeting.country_key,
          meeting.country_name,
          meeting.date_start,
          meeting.location,
        ]
      );
    }

    console.log('Meetings seeded successfully');
  } catch (error) {
    console.error('Error seeding meetings:', error);
  }
}

async function seedSessions(connection: mysql.Connection) {
  try {
    const response = await fetch(
      'https://api.openf1.org/v1/sessions?year=2023'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const sessions: SessionOpenF1[] = await response.json();

    for (const session of sessions) {
      await connection.execute(
        'INSERT INTO sessions (id, meeting_id, name, type, year, circuit_id, circuit_name, country_code, country_id, country_name, start_date, end_date, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          session.session_key,
          session.meeting_key,
          session.session_name,
          session.session_type,
          session.year,
          session.circuit_key,
          session.circuit_short_name,
          session.country_code,
          session.country_key,
          session.country_name,
          session.date_start,
          session.date_end,
          session.location,
        ]
      );
    }

    console.log('Sessions seeded successfully');
  } catch (error) {
    console.error('Error seeding sessions:', error);
  }
}

async function main() {
  const connection = await createConnection();
  try {
    await seedMeetings(connection);
    await seedSessions(connection);
  } finally {
    await connection.end();
  }
}

main();
