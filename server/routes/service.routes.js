const express = require('express');
const router = express.Router();

const services = [
  { id: 1, title: "Pengembangan Web", description: "Website profesional dengan teknologi modern.", icon: "🌐", cta: "Pelajari lebih lanjut" },
  { id: 2, title: "Aplikasi Mobile", description: "Aplikasi mobile iOS & Android yang user-friendly.", icon: "📱", cta: "Pelajari lebih lanjut" },
  { id: 3, title: "Konsultasi IT", description: "Konsultasi dengan tim ahli untuk solusi teknologi.", icon: "💡", cta: "Pelajari lebih lanjut" }
];

router.get('/', (req, res) => {
  res.json(services);
});

module.exports = router;