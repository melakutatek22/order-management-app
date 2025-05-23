const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const users = [{ username: 'admin', password: 'admin' }];
const orders = [
  { id: 1, item: 'Laptop', quantity: 1 },
  { id: 2, item: 'Mouse', quantity: 3 }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const valid = users.find(u => u.username === username && u.password === password);
  valid ? res.sendStatus(200) : res.sendStatus(401);
});

app.get('/api/orders', (req, res) => res.json(orders));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
