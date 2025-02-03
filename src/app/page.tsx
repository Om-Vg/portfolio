'use client';

import React, { useState } from 'react';
import { Terminal, Shield, Book, Coffee, Mail, Cake, Bug, Lock, Heart, Globe, Folder } from 'lucide-react';

const Portfolio = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  
  const workExperience = [
    {
      title: "Security Consultant",
      company: "IBM India",
      period: "Dec 2023 - Present",
      highlights: [
        "Conducted comprehensive penetration testing of web applications and APIs",
        "Performed API security assessments",
        "Executed automated and manual security assessments"
      ],
      icon: Shield
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of Maryland",
      period: "Aug 2022 - May 2023",
      highlights: [
        "Assisted in designing practical labs on encryption and authentication",
        "Ensured consistent grading for cybersecurity assessments"
      ],
      icon: Book
    },
    {
      title: "Cyber Security Intern",
      company: "The New York Public Library",
      period: "Jun 2022 - Aug 2022",
      highlights: [
        "Spearheaded phishing awareness campaigns",
        "Leveraged EDR and SIEM tools",
        "Investigated and prevented Bitcoin mining incident"
      ],
      icon: Bug
    }
  ];

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

  const projects = [
    {
      title: "Web Application Security Scanner",
      description: "Automated security testing tool for web applications",
      tags: ["Python", "Security", "OWASP"],
      icon: Shield
    },
    {
      title: "Network Monitoring Dashboard",
      description: "Real-time network traffic analysis and visualization",
      tags: ["JavaScript", "React", "Network Security"],
      icon: Terminal
    },
    {
      title: "API Security Framework",
      description: "Custom framework for API penetration testing",
      tags: ["Python", "API Security", "Automation"],
      icon: Lock
    }
  ];

  const coffeePassions = [
    {
      title: "Artisanal Coffee Expert",
      description: "Specializing in single-origin beans and unique brewing methods",
      details: "Certified in advanced brewing techniques and bean selection",
      icon: Coffee
    },
    {
      title: "Pastry Chef",
      description: "Creating unique fusion pastries combining global influences",
      details: "Specializing in French techniques with Asian flavors",
      icon: Cake
    },
    {
      title: "Future Café Owner",
      description: "Planning an artisanal coffee house with a global twist",
      details: "Concept: Modern café meets traditional brewing methods",
      icon: Heart
    }
  ];

  // Previous components remain the same...

  return (
    <div className="min-h-screen bg-gray-900 text-purple-50">
      {/* Previous header and initial sections remain the same... */}

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Previous sections remain... */}

        {/* Projects Section */}
        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Folder className="mr-2" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg border border-purple-400 hover:border-purple-300 transition-all">
                <div className="flex items-center mb-2">
                  <project.icon className="w-6 h-6 mr-2 text-purple-400" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500 rounded text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Experience Map */}
        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Globe className="mr-2" /> Travel & Global Experience
          </h2>
          <div className="relative">
            <img src="/world-map.png" alt="World Map" className="rounded-lg" />
            {selectedLocation && (
              <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-90 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-purple-300">{selectedLocation.name}</h3>
                <p className="text-purple-200 mb-4">{selectedLocation.experience}</p>
                <p className="text-purple-300">{selectedLocation.highlight}</p>
              </div>
            )}
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visitedLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocation(location)}
                className="flex items-center space-x-2 bg-gray-700 p-2 rounded hover:bg-gray-600 transition-colors"
              >
                <Mail className="w-6 h-6 text-purple-400" />
                <span>{location.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Personal Interests - Coffee & Baking */}
        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Heart className="mr-2" /> Personal Interests
          </h2>
          
          {/* Coffee & Baking Passions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {coffeePassions.map((passion, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg border border-purple-400 hover:border-purple-300 transition-all"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center mb-4">
                  <passion.icon className="w-8 h-8 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold text-purple-300">{passion.title}</h3>
                </div>
                <p className="text-purple-200">{passion.description}</p>
                {hoveredCard === index && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                    <p className="text-purple-300">{passion.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dream Café Blueprint */}
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
      </main>
    </div>
  );
};

export default Portfolio;