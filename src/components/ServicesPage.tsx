import React, { useState } from 'react';
import useCompanyStore from '../store/companyStore';

const ServicesPage: React.FC = () => {
  const { services, testimonials } = useCompanyStore();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Data harga layanan
  const pricingData = {
    1: { // Pengembangan Web
      starter: "Rp 5.000.000",
      professional: "Rp 15.000.000",
      enterprise: "Rp 35.000.000",
      features: {
        starter: ["Website statis", "5 halaman", "SSL gratis", "Support 30 hari"],
        professional: ["Website dinamis", "15 halaman", "CMS", "Database", "Support 6 bulan"],
        enterprise: ["Web app kompleks", "Unlimited halaman", "API integration", "Priority support", "Maintenance 1 tahun"]
      }
    },
    2: { // Aplikasi Mobile
      starter: "Rp 8.000.000",
      professional: "Rp 25.000.000",
      enterprise: "Rp 50.000.000",
      features: {
        starter: ["Single platform", "5 screens", "Basic UI", "1 bulan support"],
        professional: ["Cross platform", "15 screens", "Custom UI", "API integration", "3 bulan support"],
        enterprise: ["iOS + Android", "Unlimited screens", "Advanced features", "Backend included", "1 tahun support"]
      }
    },
    3: { // Konsultasi IT
      starter: "Rp 500.000/jam",
      professional: "Rp 3.000.000/hari",
      enterprise: "Rp 20.000.000/bulan",
      features: {
        starter: ["Konsultasi online", "1x pertemuan", "Laporan singkat"],
        professional: ["Konsultasi on-site", "5x pertemuan", "Analisis mendalam", "Rekomendasi"],
        enterprise: ["Dedicated consultant", "Unlimited konsultasi", "Strategic planning", "Monthly review"]
      }
    }
  };

  // Filter testimonial per layanan (simulasi)
  const getTestimonialsForService = (serviceId: number) => {
    return testimonials.filter((_, index) => index % 3 === serviceId - 1);
  };

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan digital bisnis Anda dengan harga transparan
          </p>
        </div>
      </section>

      {/* SERVICES GRID WITH PRICING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pilihan Layanan & Harga</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => {
              const pricing = pricingData[service.id as keyof typeof pricingData];
              const serviceTestimonials = getTestimonialsForService(service.id);
              
              return (
                <div key={service.id} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  {/* PRICING CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Starter Package */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-gray-100 hover:border-blue-200">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Starter</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-4">{pricing.starter}</div>
                      <ul className="space-y-2 mb-6">
                        {pricing.features.starter.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Pilih Paket
                      </button>
                    </div>

                    {/* Professional Package */}
                    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 border-2 border-blue-500 transform scale-105 relative">
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                        Popular
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Professional</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-4">{pricing.professional}</div>
                      <ul className="space-y-2 mb-6">
                        {pricing.features.professional.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
                        Pilih Paket
                      </button>
                    </div>

                    {/* Enterprise Package */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-2 border-gray-100 hover:border-purple-200">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Enterprise</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-4">{pricing.enterprise}</div>
                      <ul className="space-y-2 mb-6">
                        {pricing.features.enterprise.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Hubungi Sales
                      </button>
                    </div>
                  </div>

                  {/* TESTIMONIALS FOR THIS SERVICE */}
                  {serviceTestimonials.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">
                        Apa kata klien tentang {service.title}?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {serviceTestimonials.map((testimonial) => (
                          <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white">
                                {testimonial.avatar}
                              </div>
                              <div className="ml-3">
                                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                <p className="text-xs text-gray-500">{testimonial.role}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 italic">"{testimonial.content}"</p>
                            <div className="flex text-yellow-400 mt-2 text-sm">
                              {'⭐'.repeat(testimonial.rating)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Pertanyaan Umum</h2>
          <div className="space-y-4">
            {[
              {
                q: "Apada ada biaya tersembunyi?",
                a: "Tidak. Harga yang tertera sudah termasuk semua biaya yang disebutkan dalam fitur."
              },
              {
                q: "Bisa kustomisasi paket?",
                a: "Tentu! Kami menerima kustomisasi paket sesuai kebutuhan spesifik bisnis Anda."
              },
              {
                q: "Bagaimana metode pembayaran?",
                a: "Kami menerima transfer bank, kartu kredit, dan pembayaran bertahap (cicilan)."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800">{faq.q}</p>
                <p className="text-gray-600 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Siap Memilih Paket?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Konsultasi gratis dengan tim kami untuk menentukan paket terbaik sesuai kebutuhan
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;