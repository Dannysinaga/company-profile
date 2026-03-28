import React from 'react';
import useCompanyStore from '../store/companyStore';

const HomePage: React.FC = () => {
  const { companyInfo, services, testimonials } = useCompanyStore();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c"
          >
            <source src="https://videos.pexels.com/video-files/856971/856971-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {companyInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-200">
            {companyInfo.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            {companyInfo.mission}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Mulai Perjalanan
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Perusahaan</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Lebih dari Sekadar Perusahaan Teknologi
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dengan tim yang terdiri dari profesional berpengalaman dan penuh semangat, 
                kami telah membantu puluhan bisnis di Indonesia untuk bertransformasi secara digital.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-500">Proyek</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-500">Tahun</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-500">Kepuasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan digital bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  {service.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Apa Kata Klien Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;