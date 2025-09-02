// src/server/index.js
import express from 'express';
import { createServer, getServerPort, reddit } from '@devvit/web/server';

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/api/current-username', async (_req, res) => {
  const username = await reddit.getCurrentUsername(); // undefined when logged out
  if (!username) {
    return res.status(200).json({ error: 'No logged-in user' });
  }
  res.json({ username });
});

router.post('/api/log-message', async (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.status(200).json({ status: 'logged' });
});

app.use(router);

const server = createServer(app);
server.listen(getServerPort(), () => {
});
