import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

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

// Page routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === 'admin') {
    // Simple login, in production use sessions
    res.cookie('loggedIn', 'true');
    res.redirect('/dashboard');
  } else {
    res.render('login', { error: 'Invalid password' });
  }
});

app.get('/dashboard', (req, res) => {
  if (req.cookies.loggedIn === 'true') {
    fs.readFile('submissions.json', 'utf8', (err, data) => {
      const submissions = data ? JSON.parse(data) : [];
      res.render('dashboard', { submissions });
    });
  } else {
    res.redirect('/login');
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('loggedIn');
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});