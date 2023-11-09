const express = require('express');
import { getSystemInformation } from "./sysinfoServer";


export const app = express();

app.get('/api/v1/sysinfo', async (req, res) => {
  try {
    const systemInfo = await getSystemInformation();
    res.json(systemInfo);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
});

