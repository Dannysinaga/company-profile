const express = require('express');
const router = express.Router();


const users = [
  { id: 1, name: 'Admin User', email: 'admin@itn.com', password: 'admin123', role: 'admin' },
  { id: 2, name: 'Author User', email: 'author@itn.com', password: 'author123', role: 'author' }
];

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.json({
      success: true,
      user: userWithoutPassword
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    });
  }
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  
  const existingUser = users.find(u => u.email === email);
  
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: 'Email already exists'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    role: 'user'
  };
  
  users.push(newUser);
  
  const { password: _, ...userWithoutPassword } = newUser;
  
  res.status(201).json({
    success: true,
    user: userWithoutPassword
  });
});

module.exports = router;