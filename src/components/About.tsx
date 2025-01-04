import { Code2, Globe, Database, Cpu } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      name: "Frontend",
      desc: "React, Vue, Tailwind",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Backend",
      desc: "Node.js, MongoDB, Express, SQL",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Web",
      desc: "HTML5, CSS3, JavaScript",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      name: "Other",
      desc: "Git, Docker, AWS",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in building modern web
            applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
