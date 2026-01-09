import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  const events = {
    'hacknocturne': { 
      id: 1, 
      name: 'HackNocturne', 
      description: "HackNocturne is CodeShack's flagship annual inter-college hackathon where students participate in a 24-hour non-stop coding challenge. Teams work together to build innovative solutions for real-world problems while learning new technologies and collaborating under time pressure. The event promotes creativity, teamwork, and hands-on experience. HackNocturne features a prize money, along with certificates, swag, and recognition for top-performing teams."
    },
    'tech-vistara': { 
      id: 2, 
      name: 'Tech Vistara', 
      description: "Tech Vistara is the official orientation program by CodeShack for first-year students. It is designed to help freshers understand what engineering and technology are really about beyond classrooms and exams. The session acts as a beginner-friendly guide that introduces different tech domains, learning paths, useful resources, and opportunities available in college. Tech Vistara helps first-year students take their first confident step into their technical journey and avoid common mistakes early on."
    },
    'codecafe': { 
      id: 3, 
      name: 'CodeCafe', 
      description: "CodeCafe is a webinar and talk series conducted by CodeShack that focuses on technology, placements, career guidance, and industry insights. The sessions are interactive and beginner-friendly, featuring seniors, alumni, and industry professionals who share their experiences and practical advice. CodeCafe aims to create an open and relaxed environment where students can learn, ask questions, and gain clarity about their academic and career paths."
    },
    'csoc': { 
      id: 4, 
      name: 'CSoC (CodeShack Summer of Code)', 
      description: "CSoC (CodeShack Summer of Code) is a structured 4–5 week summer learning program focused on helping students upskill in various technical domains such as Web Development, App Development, and Data Structures & Algorithms. The program includes guided learning, hands-on assignments, and mentor support. It concludes with a hackathon where participants apply what they have learned to build real projects, making CSoC a complete learning-to-building experience."
    }
  };

  const event = events[eventId];

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Event Detail Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        {/* Hero Image Section */}
        <div className="bg-gradient-to-br from-red-300 to-pink-400 rounded-2xl overflow-hidden mb-8">
          <div className="h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl sm:text-6xl">📅</span>
            </div>
          </div>
        </div>

        {/* Event Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 px-4">
          {event.name.toUpperCase()}
        </h1>

        {/* Event Details Card */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">About the Event</h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {event.description}
            </p>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-700">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Date & Time</h3>
                <p className="text-white">Coming Soon</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Location</h3>
                <p className="text-white">To Be Announced</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Registration</h3>
                <p className="text-white">Opens Soon</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Team Size</h3>
                <p className="text-white">To Be Announced</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">What to Expect</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Hands-on learning experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Networking with peers and mentors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Certificates and prizes for participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Real-world problem solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};