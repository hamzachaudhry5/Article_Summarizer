const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();



const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get('/api/summarize', async (req, res) => {
  const { url} = req.query;

  try {
    const response = await axios.get('https://article-extractor-and-summarizer.p.rapidapi.com/summarize', {
      params: {
        url,
        length: '3',
      },
      headers: {
        'RapidAPI-Key': process.env.VITE_RAPID_API_KEY, 
        'RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
      },
    });

      res.json({ summary: response.data.summary });

    
  } catch (error) {
    console.error('Error fetching and summarizing article:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

