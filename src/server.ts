import app from './app';
import config from './config';
import setup from './setup';

setup();

app.listen(config.app.port, () => {
  console.log(`Server running at http://localhost:${config.app.port}`);
});
