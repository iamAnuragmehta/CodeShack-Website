import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Event = () => {
  const navigate = useNavigate();
  
  const events = [
    { 
      id: 1, 
      slug: 'hacknocturne',
      name: 'HackNocturne', 
      description: "HackNocturne is CodeShack's flagship annual inter-college hackathon where students participate in a 24-hour non-stop coding challenge. Teams work together to build innovative solutions for real-world problems while learning new technologies and collaborating under time pressure. The event promotes creativity, teamwork, and hands-on experience. HackNocturne features a prize money, along with certificates, swag, and recognition for top-performing teams." 
    },
    { 
      id: 2, 
      slug: 'tech-vistara',
      name: 'Tech Vistara', 
      description: "Tech Vistara is the official orientation program by CodeShack for first-year students. It is designed to help freshers understand what engineering and technology are really about beyond classrooms and exams. The session acts as a beginner-friendly guide that introduces different tech domains, learning paths, useful resources, and opportunities available in college. Tech Vistara helps first-year students take their first confident step into their technical journey and avoid common mistakes early on." 
    },
    { 
      id: 3, 
      slug: 'codecafe',
      name: 'CodeCafe', 
      description: "CodeCafe is a webinar and talk series conducted by CodeShack that focuses on technology, placements, career guidance, and industry insights. The sessions are interactive and beginner-friendly, featuring seniors, alumni, and industry professionals who share their experiences and practical advice. CodeCafe aims to create an open and relaxed environment where students can learn, ask questions, and gain clarity about their academic and career paths."
    },
    { 
      id: 4, 
      slug: 'csoc',
      name: 'CSoC (CodeShack Summer of Code)', 
      description: "CSoC (CodeShack Summer of Code) is a structured 4–5 week summer learning program focused on helping students upskill in various technical domains such as Web Development, App Development, and Data Structures & Algorithms. The program includes guided learning, hands-on assignments, and mentor support. It concludes with a hackathon where participants apply what they have learned to build real projects, making CSoC a complete learning-to-building experience."
    }
  ];

  const handleEventClick = (eventSlug) => {
    navigate(`/event/${eventSlug}`);
  };

  return (
    <section className="w-screen py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">Events</h2>
        <p className="text-gray-600 mb-8">
          We extend our impact beyond just projects with exciting contests, seminars, 
          and events, cultivating a widespread technical culture.
        </p>
        
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {events.map((event) => (
              <div 
                key={event.id}
                onClick={() => handleEventClick(event.slug)}
                className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                style={{ minWidth: '320px', maxWidth: '320px' }}
              >
                <div className="bg-red-300 h-48 flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-black font-semibold text-2xl py-4">{event.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-4">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};