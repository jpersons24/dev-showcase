import { Driver } from '../interfaces';
import { Connection, QueryResult } from 'mysql2/promise';

export class DriversRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async getAllDrivers(): Promise<Driver[]> {
    const [rows] = await this.connection.query('SELECT * FROM drivers');
    return rows as Driver[];
  }

  async getDriverByNumber(number: number): Promise<Driver | null> {
    const [rows] = await this.connection.query(
      'SELECT * FROM drivers WHERE number = ?',
      [number]
    );
    return (rows as Driver[])[0] || null;
  }
}
