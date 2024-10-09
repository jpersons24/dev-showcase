import { Connection } from 'mysql2/promise';
import { Request, Response } from 'express';
import { DriversRepository } from '../repositories/driversRespository';

export class DriversController {
  private driversRepository: DriversRepository;

  constructor(connection: Connection) {
    this.driversRepository = new DriversRepository(connection);
  }

  async getDrivers(req: Request, res: Response): Promise<void> {
    try {
      const drivers = await this.driversRepository.getAllDrivers();
      res.json(drivers);
    } catch (error) {
      console.error('Error fetching drivers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getDriverByNumber(req: Request, res: Response): Promise<void> {
    const { number } = req.params;
    try {
      const driver = await this.driversRepository.getDriverByNumber(
        Number(number)
      );
      if (driver) {
        res.json(driver);
      } else {
        res.status(404).json({ error: 'Driver not found' });
      }
    } catch (error) {
      console.error('Error fetching driver by number:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
