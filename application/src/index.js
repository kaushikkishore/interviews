const express = require('express');
const app = express();
const port = 3000;

// Sample data (for demonstration)
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const version = 'v3';

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint 1: Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Endpoint 2: Get user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// Endpoint 3: Create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint 4: Create a new user
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        version,
        data: {
            ping: "pong",
            health: true
        }
    });
  });


// Endpoint 5: Create a new user
app.get('/ping', (req, res) => {
    res.status(200).json({
        success: true,
        version,
        data: {
            ping: "pong"
        }
    });
  });

  app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        version,
        data: {
            ping: "pong",
            health: true,
            name: process.env.APPLICATION_NAME || '',
            db: process.env.DATABASE_NAME || '',
            password: process.env.APPLICATION_PASSWORD || ''
        }
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
