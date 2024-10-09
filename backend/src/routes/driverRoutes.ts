import { Router } from 'express';
import { DriversController } from '../controllers/driversController';
import { Connection } from 'mysql2/promise';

export function driverRoutes(connection: Connection): Router {
  const router = Router();
  const driversController = new DriversController(connection);

  // map routes to controller methods
  router.get('/', driversController.getDrivers.bind(driversController));
  router.get(
    '/:number',
    driversController.getDriverByNumber.bind(driversController)
  );

  return router;
}
