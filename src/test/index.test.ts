import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('should respond with OK message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK!');
  });
});
