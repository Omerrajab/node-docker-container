const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/api', (req, res) => {
  res.send('Hello, World api!');
});

app.get('/add', (req, res) => {
  res.send('add api is called');
});
app.get('/edit', (req, res) => {
  res.send('edit api is called');
});
app.get('/delete', (req, res) => {
  res.send('delete api is called');
});


const PORT = process.env.PORT || 3000;
console.log("port is:",process.env.PORT )

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
