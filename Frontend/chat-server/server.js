const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

const cors = require('cors'); 
app.use(cors());
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to handle signup data
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const data = `${username} ${password}\n`;
 
    // Write data to 'users.txt' file
    fs.appendFile(path.join(__dirname, '../../Backend/ServerSide/Debug/users.txt'), data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).send('Error saving data');
      }
      res.status(200).send('User data saved successfully');
    });
  } else {
    res.status(400).send('Invalid data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
