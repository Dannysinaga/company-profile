import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCompanyStore from '../store/companyStore';
import useAuthStore from '../store/authStore';

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const { addBlogPost, teamMembers } = useCompanyStore();
  const { isLoggedIn, user } = useAuthStore();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: user?.name || '',
    authorId: 0,
    category: 'Teknologi',
    tags: '',
    readTime: 5,
    imageUrl: '/blog/default.jpg'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // LOGIN
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/create-blog' } });
    }
  }, [isLoggedIn, navigate]);

  // Set author dari user login
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        author: user.name
      }));
    }
  }, [user]);

  // LOGOUT
  const handleLogout = () => {
    const { logout } = useAuthStore.getState();
    logout();
    navigate('/');
  };

  const categories = ['Teknologi', 'Tips', 'Design', 'Business', 'Tutorial'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Judul harus diisi';
    if (!formData.content.trim()) newErrors.content = 'Konten harus diisi';
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Ringkasan harus diisi';
    if (formData.excerpt.length > 200) newErrors.excerpt = 'Ringkasan maksimal 200 karakter';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const teamMember = teamMembers.find(m => 
      m.name.toLowerCase() === formData.author.toLowerCase()
    );

    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag);

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const newPost = {
      title: formData.title,
      content: formData.content,
      excerpt: formData.excerpt,
      author: formData.author,
      authorId: teamMember?.id,
      category: formData.category,
      tags: tagsArray,
      readTime: formData.readTime,
      imageUrl: formData.imageUrl,
      slug: slug,
      date: formattedDate
    };

    setTimeout(() => {
      addBlogPost(newPost);
      setIsSubmitting(false);
      navigate('/blog');
    }, 1500);
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Mengalihkan ke halaman login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header dengan user info */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Buat Artikel Baru</h1>
            <p className="text-gray-600">Bagikan wawasan dan pengetahuan Anda dengan pembaca</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Logged in as</p>
              <p className="font-semibold text-gray-800">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Artikel <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Contoh: 5 Tren Teknologi 2024"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Category and Read Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Waktu Baca (menit)
              </label>
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                min="1"
                max="30"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Author - READ ONLY karena dari login */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Penulis
            </label>
            <input
              type="text"
              value={formData.author}
              readOnly
              disabled
              className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg text-gray-500 cursor-not-allowed"
            />
            <p className="text-xs text-gray-400 mt-1">Diisi otomatis dari akun Anda</p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (pisahkan dengan koma)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="React, JavaScript, Web Development"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ringkasan <span className="text-red-500">*</span>
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              maxLength={200}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none ${
                errors.excerpt ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ringkasan singkat artikel (max 200 karakter)"
            />
            <div className="flex justify-between mt-1">
              {errors.excerpt && (
                <p className="text-sm text-red-500">{errors.excerpt}</p>
              )}
              <p className={`text-sm ${formData.excerpt.length > 180 ? 'text-orange-500' : 'text-gray-400'}`}>
                {formData.excerpt.length}/200
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Konten Artikel <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                errors.content ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tulis konten artikel di sini..."
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-500">{errors.content}</p>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mempublikasikan...
                </span>
              ) : 'Publikasikan Artikel'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;