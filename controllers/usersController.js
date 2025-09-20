const users = [];

const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.json({ message: 'User registered successfully' });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  user ? res.json({ message: 'Login successful' }) : res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { registerUser, loginUser };
