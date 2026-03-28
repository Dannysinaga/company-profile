import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import CreateBlog from './components/CreateBlog';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';  
import useCompanyStore from './store/companyStore';
import BlogList from './components/BLogList';
import TeamsPage from './components/TeamPages';

function App() {
  const { companyInfo } = useCompanyStore();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />  {/* <-- TAMBAHKAN INI */}
        </Routes>
        <footer className="bg-gray-800 text-white text-center py-6">
          <p className="text-sm">
            © {new Date().getFullYear()} {companyInfo?.name || 'Company'}. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;