const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
const blogRoutes = require('./routes/blog.routes');
const serviceRoutes = require('./routes/service.routes');
const teamRoutes = require('./routes/team.routes');
const testimonialRoutes = require('./routes/testimonial.routes');  

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/testimonials', testimonialRoutes); 

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});