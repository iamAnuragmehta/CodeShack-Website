import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  // Sample blog data - replace with actual data
  const blog = {
    title: 'Blog Title',
    author: {
      name: 'Name',
      batch: 'Batch of 2020'
    },
    content: `Blog content goes here...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button 
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Blogs</span>
        </button>
      </div>

      <div className="bg-cyan-300 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center space-x-3">
            <p className="text-gray-700">Written with ❤️ by</p>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
              <div>
                <p className="font-semibold">{blog.author.name}</p>
                <p className="text-sm text-gray-600">{blog.author.batch}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Content</h2>
          <div className="space-y-4 text-gray-700 whitespace-pre-line">
            {blog.content}
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-600">Written by {blog.author.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};