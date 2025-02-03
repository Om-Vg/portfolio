'use client';

import React, { useState } from 'react';
import { Terminal, Globe, Shield, Book, Briefcase, Code, Award, Coffee, Mail, Linkedin, Github, MapPin, Cake, Star, Bug, Lock, Folder, Heart } from 'lucide-react';

const Portfolio = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const EnhancedMap = () => {
    const continents = [
      "M 50,150 C 150,100 250,200 350,150 C 450,100 550,200 650,150",
      "M 150,200 C 200,250 300,200 400,250",
      "M 400,150 C 450,100 500,200 550,150",
      "M 500,200 C 550,250 600,200 650,250",
      "M 600,150 C 650,100 700,200 750,150",
      "M 650,300 C 700,350 750,300 800,350"
    ];

    return (
      <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden p-4">
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full"
          style={{ backgroundColor: '#1a202c' }}
        >
          {continents.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke="#2D3748"
              strokeWidth="2"
              fill="none"
            />
          ))}
          
          {visitedLocations.map((location, index) => (
            <g 
              key={index}
              onClick={() => setSelectedLocation(location)}
              className="cursor-pointer transform hover:scale-110 transition-transform duration-200"
            >
              <circle
                cx={location.x}
                cy={location.y}
                r="12"
                className="fill-purple-500 opacity-20"
              />
              
              <circle
                cx={location.x}
                cy={location.y}
                r="6"
                className="fill-purple-500 hover:fill-purple-300 transition-colors duration-200"
              />
              
              <text
                x={location.x + 10}
                y={location.y + 5}
                className="text-xs fill-current text-purple-200 pointer-events-none"
              >
                {location.name}
              </text>
            </g>
          ))}
        </svg>
        
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4 bg-gray-900 p-4 rounded-lg border border-purple-500">
            <h3 className="text-xl font-bold text-purple-300">{selectedLocation.name}</h3>
            <p className="text-purple-200 mb-2">{selectedLocation.highlight}</p>
            <p className="text-purple-200 italic">{selectedLocation.experience}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-purple-50">
      <header className="bg-gray-800 border-b border-purple-500">
        <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Om Venugopal</h1>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:omlsvenugopal@gmail.com" className="hover:text-purple-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Sections as before... */}
        {/* Add all the sections from the previous version */}
      </main>
    </div>
  );
};

export default Portfolio;