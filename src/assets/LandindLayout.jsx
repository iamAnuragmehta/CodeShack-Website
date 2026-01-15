import React from "react";

export const LandingLayout = ({ children }) => {
  return (
    <div className="relative text-white bg-tech-grid overflow-hidden">
      
      {/* Global background grid */}
      <div 
      id="tech-grid" className="pointer-events-none fixed inset-0 z-0
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:40px_40px]" 
      />

      

      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
