import React from 'react';
import useCompanyStore from '../store/companyStore';

const AboutUs: React.FC = () => {
  const { companyInfo, teamMembers } = useCompanyStore();

  return (
    <div className="pt-20"> 
      
      {/* HERO SECTION - ABOUT */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Mengenal lebih dekat siapa kami dan apa yang kami perjuangkan
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Company Story"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Cerita Kami</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {companyInfo.name} didirikan pada tahun 2015 dengan visi untuk membantu bisnis 
                Indonesia bertransformasi secara digital. Berawal dari sebuah tim kecil yang 
                penuh semangat, kami kini telah berkembang menjadi mitra teknologi terpercaya 
                bagi puluhan perusahaan di berbagai industri.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami percaya bahwa teknologi yang tepat, dikombinasikan dengan pemahaman 
                mendalam tentang kebutuhan bisnis, dapat menciptakan solusi yang tidak hanya 
                efektif tetapi juga transformasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nilai-Nilai Perusahaan</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Inovasi",
                desc: "Selalu mencari cara baru dan lebih baik untuk memecahkan masalah"
              },
              {
                icon: "🤝",
                title: "Integritas",
                desc: "Bekerja dengan jujur, transparan, dan penuh tanggung jawab"
              },
              {
                icon: "⭐",
                title: "Keunggulan",
                desc: "Berkomitmen untuk memberikan hasil terbaik dalam setiap proyek"
              },
              {
                icon: "👥",
                title: "Kolaborasi",
                desc: "Percaya bahwa kerja sama tim menghasilkan solusi terbaik"
              },
              {
                icon: "💡",
                title: "Pembelajaran",
                desc: "Terus belajar dan berkembang seiring perkembangan teknologi"
              },
              {
                icon: "🌍",
                title: "Dampak",
                desc: "Berkontribusi positif bagi masyarakat dan lingkungan"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Para profesional berbakat di balik kesuksesan setiap proyek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <span className="text-white text-7xl opacity-50">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;