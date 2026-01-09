import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    slug: `blog-${i + 1}`,
    title: 'Title',
    domain: 'Domain'
  }));

  return (
    <div className="min-h-screen">
      <div className="bg-cyan-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Blogs</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold">Filter By</h2>
          <select className="border border-gray-300 rounded px-4 py-2 bg-gray-100">
            <option>Category</option>
            <option>Tech</option>
            <option>Design</option>
            <option>Development</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="bg-gray-200 h-48"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};