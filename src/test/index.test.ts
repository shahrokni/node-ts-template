import request from 'supertest';
import app from '../app';
import setup from '../setup';

describe('GET /', () => {
  it('should respond with OK message', async () => {
    setup();
    const res = await request(app).get('/api/v1');
    expect(res.statusCode).toBe(200);
  });
});
