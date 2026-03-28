import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCompanyStore from '../store/companyStore';

const BlogList: React.FC = () => {
  const { blogPosts } = useCompanyStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog & Artikel</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Wawasan, tips, dan berita terbaru seputar teknologi dan bisnis digital
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Semua' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Tidak ada artikel di kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                    <span className="text-white text-4xl opacity-50">📰</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime} min read</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
                          {post.author[0]}
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Baca selengkapnya →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tertarik Menulis?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Kami membuka kesempatan bagi kontributor untuk berbagi wawasan dan pengalaman
          </p>
          <Link 
            to="/create-blog"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Buat Artikel Baru
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogList;