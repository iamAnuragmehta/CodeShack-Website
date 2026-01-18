import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  const events = {
    hacknocturne: {
      id: 1,
      name: "HackNocturne",
      description:
        "HackNocturne is CodeShack's flagship annual inter-college hackathon where students participate in a 24-hour non-stop coding challenge. Teams work together to build innovative solutions for real-world problems while learning new technologies and collaborating under time pressure. The event promotes creativity, teamwork, and hands-on experience. HackNocturne features a prize money, along with certificates, swag, and recognition for top-performing teams.",
    },
    "tech-vistara": {
      id: 2,
      name: "Tech Vistara",
      description:
        "Tech Vistara is the official orientation program by CodeShack for first-year students. It is designed to help freshers understand what engineering and technology are really about beyond classrooms and exams. The session acts as a beginner-friendly guide that introduces different tech domains, learning paths, useful resources, and opportunities available in college. Tech Vistara helps first-year students take their first confident step into their technical journey and avoid common mistakes early on.",
    },
    codecafe: {
      id: 3,
      name: "CodeCafe",
      description:
        "CodeCafe is a webinar and talk series conducted by CodeShack that focuses on technology, placements, career guidance, and industry insights. The sessions are interactive and beginner-friendly, featuring seniors, alumni, and industry professionals who share their experiences and practical advice. CodeCafe aims to create an open and relaxed environment where students can learn, ask questions, and gain clarity about their academic and career paths.",
    },
    csoc: {
      id: 4,
      name: "CSoC (CodeShack Summer of Code)",
      description:
        "CSoC (CodeShack Summer of Code) is a structured 4–5 week summer learning program focused on helping students upskill in various technical domains such as Web Development, App Development, and Data Structures & Algorithms. The program includes guided learning, hands-on assignments, and mentor support. It concludes with a hackathon where participants apply what they have learned to build real projects, making CSoC a complete learning-to-building experience.",
    },
  };

  const event = events[eventId];

  if (!event) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image Section with Overlay Text */}
        <div className=" h-96 sm:h-[500px] md:h-[600px] mb-12 overflow-hidden rounded-2xl">
          {/* Background Image */}
          <img
            src={`https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80`}
            alt={event.name}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0"></div>

          {/* Centered Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Small number indicator */}

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider">
                {event.name}
              </h1>

              {/* Decorative underline */}
              <div className="w-32 h-1 bg-white mx-auto mt-6"></div>
            </div>
          </div>
        </div>

        {/* Event Details Card */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
            About the Event
          </h2>

          <div className="space-y-6 border-b border-gray-700 pb-8">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
