import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/submissions', (req, res) => {
  const submission = { ...req.body, timestamp: new Date().toISOString() };
  fs.readFile('submissions.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    let submissions = [];
    if (data) {
      submissions = JSON.parse(data);
    }
    submissions.push(submission);
    fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing file' });
      }
      res.json({ message: 'Submission saved' });
    });
  });
});

app.get('/api/submissions', (req, res) => {
  fs.readFile('submissions.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    const submissions = data ? JSON.parse(data) : [];
    res.json(submissions);
  });
});

app.delete('/api/submissions/:index', (req, res) => {
  const index = parseInt(req.params.index);
  fs.readFile('submissions.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    let submissions = data ? JSON.parse(data) : [];
    if (index >= 0 && index < submissions.length) {
      submissions.splice(index, 1);
      fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error writing file' });
        }
        res.json({ message: 'Submission deleted' });
      });
    } else {
      res.status(404).json({ error: 'Submission not found' });
    }
  });
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});