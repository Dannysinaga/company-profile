import React from 'react';
import useCompanyStore from '../store/companyStore';

const TeamsPage: React.FC = () => {
  const { teamMembers } = useCompanyStore();

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tim Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Para profesional berbakat di balik setiap kesuksesan proyek
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center relative">
                  <span className="text-white text-7xl opacity-50">👤</span>
                  {member.socialLinks?.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                    >
                      <span className="text-blue-600 text-xl">in</span>
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-lg mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">📧</span>
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Budaya Kerja Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🤝",
                title: "Kolaboratif",
                desc: "Kami percaya bahwa ide terbaik lahir dari kerja sama tim"
              },
              {
                icon: "💡",
                title: "Inovatif",
                desc: "Selalu terbuka pada ide baru dan cara berpikir kreatif"
              },
              {
                icon: "🌱",
                title: "Terus Belajar",
                desc: "Pembelajaran berkelanjutan adalah kunci pertumbuhan"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;