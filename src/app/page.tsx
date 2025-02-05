'use client';
import React from 'react';
import { 
  Shield, 
  Book, 
  Coffee, 
  Cake, 
  Heart, 
  MapPin, 
  Bug, 
  Terminal, 
  Lock 
} from 'lucide-react';

const Portfolio = () => {
  const _visitedLocations = [
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
    }// ... (previous locations remain the same)
  ];

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
  
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-65EHQH8ZPQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-65EHQH8ZPQ');
</script>


  return (
    <div className="min-h-screen bg-gray-900 text-purple-50">
    <header className="bg-gray-800 border-b border-purple-500">
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          <span className="text-purple-400">~/</span>
          <span className="text-purple-300 hover:text-purple-200 transition-colors">
            Om Venugopal
          </span>
        </h1>
        <div className="bg-gray-700 p-4 rounded-lg flex items-center">
          <Terminal size={24} className="mr-3 text-green-400" />
          <p className="text-sm">
            <span className="text-green-400">➜</span> Cybersecurity Enthusiast | Coffee Connoisseur | Global Wanderer
          </p>
        </div>
        <div className="mt-4 bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-300">
            Crafting digital fortresses by day, exploring coffee cultures by night. 
            My life is a blend of security protocols and espresso shots – 
            where code meets caffeine, and curiosity knows no borders.
          </p>
        </div>
      </div>
      <div className="hidden md:block w-1/3 pl-6">
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <Cpu size={64} className="text-purple-400 animate-spin-slow" />
        </div>
      </div>
    </div>
  </header>
  
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Heart className="mr-2" /> Personal Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg flex items-center">
              <Coffee size={24} className="mr-3 text-purple-400" />
              <span>Coffee Exploration</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center">
              <MapPin size={24} className="mr-3 text-purple-400" />
              <span>Global Travel</span>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center">
              <Book size={24} className="mr-3 text-purple-400" />
              <span>Continuous Learning</span>
            </div>
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
            <Shield className="mr-2" /> Work Experience
          </h2>
          <div className="space-y-4">
            {workExperience.map((job) => (
              <div 
                key={job.title} 
                className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center mb-2">
                  <job.icon className="mr-3 text-purple-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300">{job.title}</h3>
                    <p className="text-sm">{job.company} | {job.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {job.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Terminal className="mr-2" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center mb-2">
                  <project.icon className="mr-3 text-purple-400" size={24} />
                  <h3 className="text-lg font-semibold text-purple-300">{project.title}</h3>
                </div>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-purple-500 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 border border-purple-500">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Shield className="mr-2" /> Visited Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_visitedLocations.map((location) => (
              <div 
                key={location.name} 
                className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  {location.name}
                </h3>
                <p className="text-sm mb-1">{location.highlight}</p>
                <p className="text-xs text-gray-400">{location.experience}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
