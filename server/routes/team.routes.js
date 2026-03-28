const express = require('express');
const router = express.Router();

const teamMembers = [
  { id: 1, name: "Arya Wirawan", role: "CEO & Founder", bio: "Pemimpin visioner dengan pengalaman 10+ tahun di industri teknologi.", email: "arya@itn.com" },
  { id: 2, name: "Dewi Sartika", role: "Lead Developer", bio: "Pakar full-stack development yang bersemangat membangun produk berkualitas tinggi.", email: "dewi@itn.com" },
  { id: 3, name: "Budi Santoso", role: "UI/UX Designer", bio: "Desainer kreatif dengan fokus pada pengalaman pengguna yang intuitif.", email: "budi@itn.com" }
];

router.get('/', (req, res) => {
  res.json(teamMembers);
});

module.exports = router;