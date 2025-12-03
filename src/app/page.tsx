"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Users, Award, Building, Megaphone, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Iklan Billboard & Baliho",
      description: "Penyediaan layanan iklan billboard dan baliho strategis di lokasi-lokasi premium untuk maksimalisasi visibilitas brand Anda."
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Outdoor Media",
      description: "Solusi lengkap outdoor media advertising dengan berbagai papan iklan digital dan konvensional."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Infrastruktur Papan Iklan",
      description: "Pembangunan dan pengelolaan infrastruktur papan iklan dengan standar kualitas tinggi dan keamanan terjamin."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Konsultasi & Perencanaan",
      description: "Konsultasi profesional dan perencanaan strategik untuk kampanye iklan yang efektif dan efisien."
    }
  ];

  const stats = [
    { number: "500+", label: "Proyek Selesai" },
    { number: "100+", label: "Klien Puas" },
    { number: "50+", label: "Lokasi Strategis" },
    { number: "10+", label: "Tahun Pengalaman" }
  ];

  const portfolio = [
    {
      title: "Billboard Jalan Gatot Subroto",
      category: "Billboard",
      description: "Pemasangan billboard premium di lokasi strategis Jakarta dengan LED display technology.",
      image: "/portfolio-1.jpg"
    },
    {
      title: "Highway Billboard Series",
      category: "Highway Media",
      description: "Jaringan billboard di jalan tol dan rute utama dengan jangkauan nasional.",
      image: "/portfolio-2.jpg"
    },
    {
      title: "Airport Advertising Campaign",
      category: "Airport Media",
      description: "Kampanye iklan komprehensif di bandara internasional dengan multiple touchpoints.",
      image: "/portfolio-3.jpg"
    },
    {
      title: "Transit Advertising Network",
      category: "Transit Media",
      description: "Jaringan iklan transportasi publik yang mencakup bus stop dan shelter di kota-kota besar.",
      image: "/portfolio-4.jpg"
    },
    {
      title: "Mall Branding Project",
      category: "Mall Advertising",
      description: "Branding lengkap untuk mal-mal premium dengan strategic placement dan high traffic areas.",
      image: "/portfolio-5.jpg"
    },
    {
      title: "Roadside Billboard Series",
      category: "Highway Media",
      description: "Jaringan billboard di jalan tol dan rute utama dengan jangkauan nasional.",
      image: "/portfolio-6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-white/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Solusi <span className="text-primary">Outdoor Media</span> Terpercaya untuk Brand Anda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kami membantu brand dan bisnis tampil lebih menonjol lewat strategi komunikasi yang tepat, desain yang memikat, dan konten yang efektif.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                  Lihat Portfolio
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Berpengalaman</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Profesional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Terpercaya</span>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-xl flex items-center justify-center">
                    <Building className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang PT FIRMA MEDIA SEJAHTERA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengan tim kreatif berpengalaman, kami menghadirkan solusi periklanan mulai dari branding, desain grafis, digital advertising, pembuatan konten, media sosial, hingga kampanye marketing yang dirancang khusus sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi & Misi Kami</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Visi</h4>
                  <p className="text-gray-600">
                    Menjadi leader dalam industri outdoor media advertising di Indonesia dengan inovasi berkelanjutan dan kepuasan pelanggan yang maksimal.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Misi</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Menyediakan solusi advertising yang efektif dan efisien</li>
                    <li>• Membangun infrastruktur media yang berkualitas tinggi</li>
                    <li>• Memberikan pelayanan terbaik dengan pendekatan personal</li>
                    <li>• Terus berinovasi dalam teknologi dan kreativitas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Sertifikasi</h4>
                  <p className="text-sm text-gray-600">Tersertifikasi dan berlisensi resmi</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Tim Profesional</h4>
                  <p className="text-sm text-gray-600">Ahli berpengalaman di bidangnya</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Hasil Terbukti</h4>
                  <p className="text-sm text-gray-600">Track record yang teruji</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Target Oriented</h4>
                  <p className="text-sm text-gray-600">Fokus pada tujuan klien</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami percaya setiap brand punya cerita. Tugas kami adalah membuat cerita itu lebih terlihat, lebih didengar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Proyek
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik kami untuk berbagai klien dari berbagai industri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Visibilitas Brand Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Konsultasikan kebutuhan advertising Anda dengan tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              +6287855340730
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu kebutuhan advertising outdoor media Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Happy Creative Hub, Jl. Cisitu Indah III No.2<br />
                        Dago, Coblong, Bandung<br />
                        Jawa Barat 40135
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Telepon</h4>
                      <p className="text-gray-600">+6287855340730</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@firmamedia.co.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Jam Operasional</h4>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between mb-2">
                    <span>Senin - Jumat</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-medium">09:00 - 15:00</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Lokasi Kami</h4>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7993098042733!2d107.6170473748953!3d-6.891486893149364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6e3e3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sHappy%20Creative%20Hub!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;