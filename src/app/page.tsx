'use client';

import React, { useState } from 'react';
import { Shield, Book, Coffee, Cake, Heart } from 'lucide-react';

const Portfolio = () => {
  
  const visitedLocations = [
    {
      name: "United States",
      x: 200,
      y: 220,
      highlight: "University of Maryland - Masters in Cybersecurity",
      experience: "Explored diverse coffee scenes from Seattle to NYC"
    },
    {
      name: "India",
      x: 600,
      y: 280,
      highlight: "IBM Security Consultant",
      experience: "Home to my favorite filter coffee traditions"
    },
    {
      name: "Malaysia",
      x: 650,
      y: 320,
      highlight: "Cultural Exchange",
      experience: "Experienced unique Ipoh white coffee"
    },
    {
      name: "Singapore",
      x: 660,
      y: 330,
      highlight: "Tech Hub",
      experience: "Third wave coffee culture at its finest"
    },
    {
      name: "Dubai",
      x: 580,
      y: 270,
      highlight: "Innovation Center",
      experience: "Traditional Arabic coffee ceremonies"
    },
    {
      name: "Abu Dhabi",
      x: 575,
      y: 275,
      highlight: "Cultural Experience",
      experience: "Modern café culture meets tradition"
    },
    {
      name: "Sri Lanka",
      x: 620,
      y: 310,
      highlight: "Island Paradise",
      experience: "Ceylon tea and coffee experiences"
    },
    {
      name: "Andaman",
      x: 640,
      y: 300,
      highlight: "Island Adventure",
      experience: "Island coffee culture"
    },
    {
      name: "Langkawi",
      x: 645,
      y: 315,
      highlight: "Malaysian Paradise",
      experience: "Malaysian island coffee spots"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-purple-50">
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Heart className="mr-2" /> Personal Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Example passion component */}
          </div>
          <div className="bg-gray-700 p-6 rounded-lg border border-purple-400">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Dream Café Blueprint: /root/coffee_house</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <Coffee size={24} className="text-purple-400 mb-2" />
                <span>Roastery Lab</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <Cake size={24} className="text-purple-400 mb-2" />
                <span>Pastry Workshop</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <Book size={24} className="text-purple-400 mb-2" />
                <span>Global Recipe Library</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                <Heart size={24} className="text-purple-400 mb-2" />
                <span>Community Space</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Shield className="mr-2" /> Security Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example project component */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;