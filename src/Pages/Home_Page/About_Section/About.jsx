import React from 'react'

export const About = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <h3 className="text-3xl font-semibold mb-2">Motivation/Purpose</h3>
          <h3 className="text-3xl font-semibold mb-4">of our club</h3>
          <p className="text-gray-600">Then explaining about our clubs - GLUG and TECHHUB</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="w-16 h-16 bg-red-500 rounded-full mb-4"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="w-16 h-16 bg-red-500 rounded-full mb-4"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
