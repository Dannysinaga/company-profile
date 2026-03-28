const express = require('express');
const router = express.Router();

let blogPosts = [
  {
    id: 1,
    title: "5 Tren Teknologi 2024",
    content: "Konten lengkap tentang tren teknologi 2024...",
    excerpt: "Dari AI hingga blockchain, inilah teknologi yang akan mengubah lanskap bisnis tahun ini.",
    author: "Admin User",
    date: "2024-01-15",
    category: "Teknologi",
    tags: ["AI", "Blockchain", "IoT"],
    readTime: 5
  },
  {
    id: 2,
    title: "Cara Memilih Developer untuk Website Perusahaan",
    content: "Panduan lengkap memilih tim developer...",
    excerpt: "Panduan lengkap memilih tim developer yang tepat untuk proyek website perusahaan Anda.",
    author: "Author User",
    date: "2024-02-20",
    category: "Tips",
    tags: ["Developer", "Website", "Hiring"],
    readTime: 7
  }
];

// GET /api/blogs
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// GET /api/blogs/:id
router.get('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// POST /api/blogs
router.post('/', (req, res) => {
  const newPost = {
    id: blogPosts.length + 1,
    ...req.body,
    date: new Date().toISOString().split('T')[0]
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /api/blogs/:id
router.put('/:id', (req, res) => {
  const index = blogPosts.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    blogPosts[index] = { ...blogPosts[index], ...req.body };
    res.json(blogPosts[index]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// DELETE /api/blogs/:id
router.delete('/:id', (req, res) => {
  const index = blogPosts.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    blogPosts.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports = router;