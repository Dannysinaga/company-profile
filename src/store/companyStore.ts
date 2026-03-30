import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ============ INTERFACES ============
interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  logo: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  cta: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  authorId?: number;
  date: string;
  imageUrl: string;
  slug: string;
  category: string;
  tags: string[];
  readTime: number;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

// ============ STORE ============
interface CompanyState {
  // Data
  companyInfo: CompanyInfo;
  services: Service[];
  teamMembers: TeamMember[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  
  // Actions
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  addService: (service: Service) => void;
  addTeamMember: (member: TeamMember) => void;
  
  // BLOG CRUD OPERATIONS
  getAllBlogPosts: () => BlogPost[];
  getBlogPostById: (id: number) => BlogPost | undefined;
  getBlogPostBySlug: (slug: string) => BlogPost | undefined;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => BlogPost;
  updateBlogPost: (id: number, updatedPost: Partial<BlogPost>) => boolean;
  deleteBlogPost: (id: number) => boolean;
}

const useCompanyStore = create<CompanyState>()(
  persist(
    (set, get) => ({
      // ============ INITIAL DATA ============
      companyInfo: {
        name: "Inovasi Teknologi Nusantara",
        tagline: "Membangun Masa Depan Digital Indonesia",
        description: "Kami adalah mitra teknologi terpercaya yang membantu bisnis berkembang melalui solusi digital inovatif.",
        mission: "Memberdayakan bisnis Indonesia dengan teknologi terkini untuk menciptakan dampak positif dan berkelanjutan.",
        logo: "ITN",
      },
      
      // ============ ISI SERVICES ============
      services: [
        {
          id: 1,
          title: "Pengembangan Web",
          description: "Website profesional dengan teknologi modern untuk meningkatkan visibilitas bisnis Anda.",
          icon: "🌐",
          cta: "Pelajari lebih lanjut"
        },
        {
          id: 2,
          title: "Aplikasi Mobile",
          description: "Aplikasi mobile iOS & Android yang user-friendly untuk menjangkau lebih banyak pelanggan.",
          icon: "📱",
          cta: "Pelajari lebih lanjut"
        },
        {
          id: 3,
          title: "Konsultasi IT",
          description: "Konsultasi dengan tim ahli kami untuk solusi teknologi yang tepat bagi bisnis Anda.",
          icon: "💡",
          cta: "Pelajari lebih lanjut"
        }
      ],
      
      // ============ ISI TEAM MEMBERS ============
      teamMembers: [
        {
          id: 1,
          name: "Arya Wirawan",
          role: "CEO & Founder",
          bio: "Pemimpin visioner dengan pengalaman 10+ tahun di industri teknologi. Memiliki latar belakang di bidang AI dan Machine Learning.",
          email: "arya@itn.com",
          imageUrl: "/team/arya.jpg",
          socialLinks: {
            linkedin: "https://linkedin.com/in/arya",
            twitter: "https://twitter.com/arya"
          }
        },
        {
          id: 2,
          name: "Dewi Sartika",
          role: "Lead Developer",
          bio: "Pakar full-stack development yang bersemangat membangun produk berkualitas tinggi. Spesialisasi di React dan Node.js.",
          email: "dewi@itn.com",
          imageUrl: "/team/dewi.jpg",
          socialLinks: {
            linkedin: "https://linkedin.com/in/dewi"
          }
        },
        {
          id: 3,
          name: "Budi Santoso",
          role: "UI/UX Designer",
          bio: "Desainer kreatif dengan fokus pada pengalaman pengguna yang intuitif dan engaging.",
          email: "budi@itn.com",
          imageUrl: "/team/budi.jpg"
        }
      ],
      
      // ============ ISI BLOG POSTS ============
      blogPosts: [
        {
          id: 1,
          title: "5 Tren Teknologi 2026 yang Harus Diketahui Bisnis",
          content: "Konten lengkap tentang tren teknologi 2026...",
          excerpt: "Dari AI hingga blockchain, inilah teknologi yang akan mengubah lanskap bisnis tahun ini.",
          author: "Arya Wirawan",
          authorId: 1,
          date: "2026-01-15",
          imageUrl: "/blog/tech-trends.jpg",
          slug: "tren-teknologi-2026",
          category: "Teknologi",
          tags: ["AI", "Blockchain", "IoT"],
          readTime: 5
        },
        {
          id: 2,
          title: "Cara Memilih Developer untuk Website Perusahaan",
          content: "Panduan lengkap memilih tim developer...",
          excerpt: "Panduan lengkap memilih tim developer yang tepat untuk proyek website perusahaan Anda.",
          author: "Dewi Sartika",
          authorId: 2,
          date: "2026-02-20",
          imageUrl: "/blog/choose-developer.jpg",
          slug: "memilih-developer-website",
          category: "Tips",
          tags: ["Developer", "Website", "Hiring"],
          readTime: 7
        },
        {
          id: 3,
          title: "Mengapa UI/UX Penting untuk Bisnis Digital?",
          content: "Pembahasan mendalam tentang UI/UX...",
          excerpt: "Memahami peran penting desain antarmuka dalam meningkatkan konversi bisnis online.",
          author: "Budi Santoso",
          authorId: 3,
          date: "2026-03-10",
          imageUrl: "/blog/ui-ux.jpg",
          slug: "pentingnya-ui-ux",
          category: "Design",
          tags: ["UI", "UX", "Design"],
          readTime: 4
        }
      ],

      // ============ TESTIMONIALS ============
      testimonials: [
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
      ],

      // ============ ACTIONS ============
      updateCompanyInfo: (info) =>
        set((state) => ({
          companyInfo: { ...state.companyInfo, ...info }
        })),
        
      addService: (service) =>
        set((state) => ({
          services: [...state.services, { ...service, id: Date.now() }]
        })),
        
      addTeamMember: (member) =>
        set((state) => ({
          teamMembers: [...state.teamMembers, { ...member, id: Date.now() }]
        })),
      
      // ============ BLOG CRUD OPERATIONS ============
      getAllBlogPosts: () => {
        return get().blogPosts;
      },
      
      getBlogPostById: (id) => {
        return get().blogPosts.find(post => post.id === id);
      },
      
      getBlogPostBySlug: (slug) => {
        return get().blogPosts.find(post => post.slug === slug);
      },
      
      addBlogPost: (postData) => {
        const newPost: BlogPost = {
          ...postData,
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
        };
        
        set((state) => ({
          blogPosts: [newPost, ...state.blogPosts]
        }));
        
        return newPost;
      },
      
      updateBlogPost: (id, updatedPost) => {
        let found = false;
        set((state) => {
          const updatedPosts = state.blogPosts.map(post => {
            if (post.id === id) {
              found = true;
              return { ...post, ...updatedPost };
            }
            return post;
          });
          return { blogPosts: updatedPosts };
        });
        return found;
      },
      
      deleteBlogPost: (id) => {
        let found = false;
        set((state) => {
          const filteredPosts = state.blogPosts.filter(post => {
            if (post.id === id) found = true;
            return post.id !== id;
          });
          return { blogPosts: filteredPosts };
        });
        return found;
      }
    }),
    {
      name: 'company-profile-storage'
    }
  )
);

export default useCompanyStore;