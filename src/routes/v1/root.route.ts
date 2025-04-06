import express = require('express');

const router = express.Router();

router.get('/', async (_, res) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
