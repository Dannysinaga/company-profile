const express = require('express');
const router = express.Router();

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "CEO, TokoIndah",
    content: "Bekerja dengan tim Inovasi Teknologi benar-benar mengubah bisnis kami. Website baru kami meningkatkan penjualan sebesar 150%!",
    avatar: "👨‍💼",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Rahayu",
    role: "Founder, Dompetku",
    content: "Profesional, responsif, dan sangat berbakat. Mereka tidak hanya membuat aplikasi, tapi juga memberikan saran berharga.",
    avatar: "👩‍💼",
    rating: 5
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    role: "Owner, WarungKopi",
    content: "Sangat puas dengan hasilnya! Website kami sekarang lebih modern dan mudah dikelola.",
    avatar: "👨‍🦰",
    rating: 5
  }
];

router.get('/', (req, res) => {
  res.json(testimonials);
});

module.exports = router;