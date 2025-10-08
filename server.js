import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(3000, () => {
  console.log('Server running on port 3000');
});