import React, { useEffect } from "react";

export const Members = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const members = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: "Name",
      role: "<Role>",
    }));

  return (
    <div className="min-h-screen">
      <div className="bg-cyan-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Members</h1>
          <p className="text-gray-700">[group photo of codeshack]</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Batch of 2024</h2>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-gray-200 h-64"></div>
              <div className="p-4 bg-gray-100">
                <h3 className="font-semibold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};