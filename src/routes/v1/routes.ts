import app from '../../app';
import { Router } from 'express';
import rootRoute from './root.route';

const setUpV1Routes = (): void => {
  const v1Routes: Array<{ key: string; value: Router }> = [
    { key: '', value: rootRoute },
  ];
  v1Routes.forEach((r) => {
    app.use(`/api/v1/${r.key}`, r.value);
  });
};

const setUpRoutes = (): void => {
  setUpV1Routes();
};

export default setUpRoutes;
